import React, { useState, useMemo } from 'react'
import {
  DistrictInfo,
  StreetInfo,
  CommunityInfo,
  CommunityLevel,
  LocationHierarchy
} from '../../types/community'
import {
  getAllDistricts,
  getStreetsByDistrict,
  getCommunitiesByStreet,
  getAllStreetsAndCommunitiesByDistrict
} from '../../data/communityData'
import styles from '../../styles/components/CommunityClassification.module.css'

interface CommunityClassificationProps {
  className?: string
  onCommunitySelect?: (community: CommunityInfo) => void
}

const CommunityClassification: React.FC<CommunityClassificationProps> = ({
  className = '',
  onCommunitySelect
}) => {
  const [hierarchy, setHierarchy] = useState<LocationHierarchy>({
    districts: getAllDistricts(),
    currentDistrict: undefined,
    currentStreet: undefined,
    currentCommunity: undefined
  })

  const [currentLevel, setCurrentLevel] = useState<CommunityLevel>('district')

  // 使用useMemo优化数据获取
  const availableStreets = useMemo(() => {
    return hierarchy.currentDistrict
      ? getStreetsByDistrict(hierarchy.currentDistrict.id)
      : []
  }, [hierarchy.currentDistrict])

  const availableCommunities = useMemo(() => {
    if (hierarchy.currentDistrict && hierarchy.currentStreet) {
      return getCommunitiesByStreet(
        hierarchy.currentDistrict.id,
        hierarchy.currentStreet.id
      )
    }
    return []
  }, [hierarchy.currentDistrict, hierarchy.currentStreet])

  const allCommunitiesInDistrict = useMemo(() => {
    if (hierarchy.currentDistrict) {
      const streetsAndCommunities = getAllStreetsAndCommunitiesByDistrict(hierarchy.currentDistrict.id)
      return streetsAndCommunities.flatMap(({ communities }) => communities)
    }
    return []
  }, [hierarchy.currentDistrict])

  const streetsAndCommunities = useMemo(() => {
    return hierarchy.currentDistrict
      ? getAllStreetsAndCommunitiesByDistrict(hierarchy.currentDistrict.id)
      : []
  }, [hierarchy.currentDistrict])

  // 选择区
  const handleDistrictSelect = (district: DistrictInfo) => {
    setHierarchy(prev => ({
      ...prev,
      currentDistrict: district,
      currentStreet: undefined,
      currentCommunity: undefined
    }))
    setCurrentLevel('street')
  }

  // 选择街道
  const handleStreetSelect = (street: StreetInfo) => {
    setHierarchy(prev => ({
      ...prev,
      currentStreet: street,
      currentCommunity: undefined
    }))
    setCurrentLevel('community')
  }

  // 选择社区
  const handleCommunitySelect = (community: CommunityInfo) => {
    setHierarchy(prev => ({
      ...prev,
      currentCommunity: community
    }))

    if (onCommunitySelect) {
      onCommunitySelect(community)
    }
  }

  // 重置到区级选择
  const handleReset = () => {
    setCurrentLevel('district')
    setHierarchy(prev => ({
      ...prev,
      currentDistrict: undefined,
      currentStreet: undefined,
      currentCommunity: undefined
    }))
  }

  // 获取当前选择状态文本
  const getSelectionText = () => {
    if (hierarchy.currentDistrict) {
      let text = hierarchy.currentDistrict.name
      if (hierarchy.currentStreet) {
        text += ' > ' + hierarchy.currentStreet.name
      }
      if (hierarchy.currentCommunity) {
        text += ' > ' + hierarchy.currentCommunity.name
      }
      return text
    }
    return '请选择行政区划'
  }

  return (
    <div className={`${styles.communityClassification} ${className}`}>
      {/* 顶部标题和状态 */}
      <div className={styles.classificationHeader}>
        <h3 className={styles.classificationTitle}>行政区划选择</h3>
        <div className={styles.selectionStatus}>
          <span className={styles.statusText}>{getSelectionText()}</span>
          {hierarchy.currentDistrict && (
            <button
              className={styles.resetButton}
              onClick={handleReset}
            >
              重置
            </button>
          )}
        </div>
      </div>

      {/* 固定分类选择区域 */}
      <div className={styles.fixedClassificationArea}>
        <div className={styles.levelSelector}>
          <div className={styles.levelItem}>
            <label className={styles.levelLabel}>区</label>
            <select
              className={styles.levelSelect}
              value={hierarchy.currentDistrict?.id || ''}
              onChange={(e) => {
                const district = hierarchy.districts.find(d => d.id === e.target.value)
                if (district) handleDistrictSelect(district)
              }}
            >
              <option value="">请选择区</option>
              {hierarchy.districts.map((district) => (
                <option key={district.id} value={district.id}>
                  {district.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.levelItem}>
            <label className={styles.levelLabel}>街道</label>
            <select
              className={styles.levelSelect}
              value={hierarchy.currentStreet?.id || ''}
              onChange={(e) => {
                const street = availableStreets.find(s => s.id === e.target.value)
                if (street) handleStreetSelect(street)
              }}
              disabled={!hierarchy.currentDistrict}
            >
              <option value="">请选择街道</option>
              {availableStreets.map((street) => (
                <option key={street.id} value={street.id}>
                  {street.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.levelItem}>
            <label className={styles.levelLabel}>社区</label>
            <select
              className={styles.levelSelect}
              value={hierarchy.currentCommunity?.id || ''}
              onChange={(e) => {
                const community = availableCommunities.find(c => c.id === e.target.value)
                if (community) handleCommunitySelect(community)
              }}
              disabled={!hierarchy.currentStreet}
            >
              <option value="">请选择社区</option>
              {availableCommunities.map((community) => (
                <option key={community.id} value={community.id}>
                  {community.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* 展示区域 */}
      <div className={styles.displayArea}>
        {hierarchy.currentDistrict ? (
          <div className={styles.districtDisplay}>
            <div className={styles.districtHeader}>
              <h4 className={styles.districtTitle}>
                {hierarchy.currentStreet ? hierarchy.currentStreet.name : hierarchy.currentDistrict.name}社区一览
              </h4>
              <p className={styles.districtSubtitle}>
                {hierarchy.currentStreet
                  ? `共 ${availableCommunities.length} 个社区`
                  : `共 ${allCommunitiesInDistrict.length} 个社区`
                }
              </p>
            </div>

            {/* 社区列表展示 - 按街道分组 */}
            <div className={styles.communityListGroup}>
              {(hierarchy.currentStreet ? [
                { street: hierarchy.currentStreet, communities: availableCommunities }
              ] : streetsAndCommunities).map(({ street, communities }) => (
                <div key={street.id} className={styles.streetGroup}>
                  <div className={styles.streetGroupHeader}>
                    <h5 className={styles.streetGroupName}>{street.name}</h5>
                    <span className={styles.streetGroupCount}>
                      {communities.length}个社区
                    </span>
                  </div>
                  <div className={styles.communityList}>
                    {communities.map((community) => (
                      <div
                        key={community.id}
                        className={`${styles.communityListItem} ${hierarchy.currentCommunity?.id === community.id ? styles.selected : ''}`}
                        onClick={() => handleCommunitySelect(community)}
                      >
                        <div className={styles.listItemMain}>
                          <span className={styles.communityName}>{community.name}</span>
                          {community.address && (
                            <span className={styles.communityAddressText}>
                              {community.address}
                            </span>
                          )}
                        </div>
                        <div className={styles.listItemServices}>
                          {community.services?.slice(0, 4).map((service, index) => (
                            <span
                              key={index}
                              className={styles.listServiceTag}
                            >
                              {service}
                            </span>
                          ))}
                          {community.services && community.services.length > 4 && (
                            <span className={styles.moreServices}>
                              +{community.services.length - 4}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.placeholderArea}>
            <div className={styles.placeholderContent}>
              <h4 className={styles.placeholderTitle}>请选择要查看的区</h4>
              <p className={styles.placeholderDesc}>
                选择区后，将展示该区下所有社区信息
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CommunityClassification