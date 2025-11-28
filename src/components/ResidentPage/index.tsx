import React, { useState } from 'react'
import { ServiceCategory, Service } from '@types/resident'
import styles from '@styles/components/ResidentPage.module.css'

const ResidentPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(ServiceCategory.CONVENIENT_SERVICE)
  const [followedServices, setFollowedServices] = useState<Set<string>>(new Set())

  // 服务分类配置
  const categories = [
    { id: ServiceCategory.CONVENIENT_SERVICE, name: '便民服务', icon: '🛠️', description: '生活便民服务' },
    { id: ServiceCategory.DINING, name: '餐饮美食', icon: '🍽️', description: '美食餐厅推荐' },
    { id: ServiceCategory.HEALTH, name: '健康养生', icon: '💊', description: '医疗健康服务' },
    { id: ServiceCategory.HOUSEKEEPING, name: '家政服务', icon: '🧹', description: '家政保洁服务' },
    { id: ServiceCategory.EDUCATION, name: '教育培训', icon: '🎓', description: '教育培训机构' },
    { id: ServiceCategory.TRANSPORTATION, name: '交通出行', icon: '🚗', description: '交通出行服务' },
    { id: ServiceCategory.SHOPPING, name: '购物消费', icon: '🛍️', description: '购物商场信息' },
    { id: ServiceCategory.ENTERTAINMENT, name: '休闲娱乐', icon: '🎮', description: '娱乐休闲场所' }
  ]

  // 示例服务数据
  const services: Record<ServiceCategory, Service[]> = {
    [ServiceCategory.CONVENIENT_SERVICE]: [
      { id: '1', name: '供暖缴费', category: ServiceCategory.CONVENIENT_SERVICE, description: '暖气费在线缴纳服务' },
      { id: '2', name: '自来水缴费', category: ServiceCategory.CONVENIENT_SERVICE, description: '自来水费在线缴纳' },
      { id: '3', name: '燃气缴费', category: ServiceCategory.CONVENIENT_SERVICE, description: '燃气费在线缴纳服务' },
      { id: '4', name: '电费缴纳', category: ServiceCategory.CONVENIENT_SERVICE, description: '电费在线缴纳服务' },
      { id: '5', name: '物业缴费', category: ServiceCategory.CONVENIENT_SERVICE, description: '物业费在线缴纳' },
      { id: '6', name: '有线电视缴费', category: ServiceCategory.CONVENIENT_SERVICE, description: '有线电视费缴纳' }
    ],
    [ServiceCategory.DINING]: [
      { id: '7', name: '豫菜餐厅', category: ServiceCategory.DINING, description: '正宗河南豫菜餐厅' },
      { id: '8', name: '火锅外卖', category: ServiceCategory.DINING, description: '火锅外卖配送服务' }
    ],
    [ServiceCategory.HEALTH]: [
      { id: '9', name: '在线问诊', category: ServiceCategory.HEALTH, description: '医生在线咨询服务' },
      { id: '10', name: '体检预约', category: ServiceCategory.HEALTH, description: '医院体检预约服务' }
    ],
    [ServiceCategory.HOUSEKEEPING]: [
      { id: '11', name: '家庭保洁', category: ServiceCategory.HOUSEKEEPING, description: '专业家庭保洁服务' },
      { id: '12', name: '家电维修', category: ServiceCategory.HOUSEKEEPING, description: '家电维修上门服务' }
    ],
    [ServiceCategory.EDUCATION]: [
      { id: '13', name: '职业技能培训', category: ServiceCategory.EDUCATION, description: '职业技能提升培训' }
    ],
    [ServiceCategory.TRANSPORTATION]: [
      { id: '14', name: '公交查询', category: ServiceCategory.TRANSPORTATION, description: '公交线路查询服务' }
    ],
    [ServiceCategory.SHOPPING]: [
      { id: '15', name: '购物中心', category: ServiceCategory.SHOPPING, description: '大型购物中心导航' }
    ],
    [ServiceCategory.ENTERTAINMENT]: [
      { id: '16', name: '电影院', category: ServiceCategory.ENTERTAINMENT, description: '电影院在线购票' }
    ]
  }

  const handleCategoryClick = (categoryId: ServiceCategory) => {
    setSelectedCategory(categoryId)
  }

  const handleServiceFollow = (serviceId: string) => {
    setFollowedServices(prev => {
      const newSet = new Set(prev)
      if (newSet.has(serviceId)) {
        newSet.delete(serviceId)
      } else {
        newSet.add(serviceId)
      }
      return newSet
    })
  }

  const handleServiceClick = (service: Service) => {
    alert(`点击了服务：${service.name}\n${service.description}`)
  }

  const currentServices = selectedCategory ? services[selectedCategory] : []

  return (
    <div className={styles.residentPage}>
      <div className={styles.pageHeader}>
        <h2 className={styles.pageTitle}>居民服务</h2>
        <p className={styles.pageSubtitle}>为郑州市民提供便捷的生活服务</p>
      </div>

      <div className={styles.contentLayout}>
        {/* 左侧服务分类 */}
        <aside className={styles.serviceCategory}>
          <h3 className={styles.categoryTitle}>服务分类</h3>
          <div className={styles.categoryList}>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`${styles.categoryItem} ${selectedCategory === category.id ? styles.active : ''}`}
                onClick={() => handleCategoryClick(category.id)}
              >
                <span className={styles.categoryIcon}>{category.icon}</span>
                <div className={styles.categoryInfo}>
                  <span className={styles.categoryName}>{category.name}</span>
                  <span className={styles.categoryDesc}>{category.description}</span>
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* 右侧服务网格 */}
        <main className={styles.serviceGrid}>
          <div className={styles.gridHeader}>
            <h3 className={styles.gridTitle}>
              {selectedCategory ? categories.find(c => c.id === selectedCategory)?.name : '全部服务'}
            </h3>
            <p className={styles.gridSubtitle}>共 {currentServices.length} 项服务</p>
          </div>

          <div className={styles.servicesContainer}>
            {currentServices.map((service) => (
              <div key={service.id} className={styles.serviceCard}>
                <div className={styles.serviceHeader}>
                  <span className={styles.serviceIcon}>🔧</span>
                  <button
                    className={`${styles.followButton} ${followedServices.has(service.id) ? styles.followed : ''}`}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleServiceFollow(service.id)
                    }}
                  >
                    {followedServices.has(service.id) ? '已关注' : '关注'}
                  </button>
                </div>
                <div className={styles.serviceContent}>
                  <h4 className={styles.serviceName}>{service.name}</h4>
                  <p className={styles.serviceDescription}>{service.description}</p>
                </div>
                <button
                  className={styles.serviceButton}
                  onClick={() => handleServiceClick(service)}
                >
                  立即使用
                </button>
              </div>
            ))}
          </div>

          {currentServices.length === 0 && (
            <div className={styles.emptyState}>
              <span className={styles.emptyIcon}>🔍</span>
              <p>该分类下暂无服务</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default ResidentPage