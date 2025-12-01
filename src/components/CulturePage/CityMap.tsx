import React, { useState } from 'react'
import { ImageSizes } from '@utils/randomImage'
import styles from '@styles/components/CulturePage/CityMap.module.css'

interface MapLocation {
  id: string
  name: string
  description: string
  category: string
  image: string
  address: string
  openHours: string
  rating: number
  tags: string[]
}

const CityMap: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const locations: MapLocation[] = [
    {
      id: 'location-1',
      name: '郑州博物馆',
      description: '展示郑州历史文化的重要场所，收藏有大量珍贵文物',
      category: '博物馆',
      image: 'zhengzhou-museum',
      address: '中原区嵩山南路168号',
      openHours: '9:00-17:00（周一闭馆）',
      rating: 4.8,
      tags: ['历史文化', '免费开放', 'AAA景区']
    },
    {
      id: 'location-2',
      name: '二七纪念塔',
      description: '郑州标志性建筑，纪念二七大罢工的历史遗迹',
      category: '历史遗迹',
      image: 'erqi-tower',
      address: '二七区二七路',
      openHours: '全天开放',
      rating: 4.7,
      tags: ['红色教育', '城市地标', '免费参观']
    },
    {
      id: 'location-3',
      name: '河南省博物院',
      description: '中国重要的综合性博物馆，收藏有大量珍贵文物',
      category: '博物馆',
      image: 'henan-museum',
      address: '金水区农业路8号',
      openHours: '9:00-17:30（周一闭馆）',
      rating: 4.9,
      tags: ['国家一级博物馆', '珍贵文物', '免费开放']
    },
    {
      id: 'location-4',
      name: '黄河风景名胜区',
      description: '黄河文化主题景区，感受母亲河的壮美风光',
      category: '自然景观',
      image: 'yellow-river-scenic',
      address: '惠济区黄河风景名胜区',
      openHours: '8:00-18:00',
      rating: 4.6,
      tags: ['AAAA景区', '自然风光', '黄河文化']
    },
    {
      id: 'location-5',
      name: '郑州图书馆',
      description: '现代化的城市图书馆，提供优质的阅读服务',
      category: '文化场馆',
      image: 'zhengzhou-library',
      address: '金水区客文一街10号',
      openHours: '9:00-21:00',
      rating: 4.7,
      tags: ['阅读空间', '免费借阅', '文化活动']
    },
    {
      id: 'location-6',
      name: '郑州大剧院',
      description: '现代化演艺中心，举办各类文艺演出',
      category: '文化场馆',
      image: 'zhengzhou-theater',
      address: '郑东新区商务内环路',
      openHours: '根据演出时间',
      rating: 4.8,
      tags: ['文艺演出', '现代建筑', '文化体验']
    }
  ]

  const categories = [
    { id: 'all', name: '全部地点', icon: '🗺️' },
    { id: '博物馆', name: '博物馆', icon: '🏛️' },
    { id: '历史遗迹', name: '历史遗迹', icon: '🏺' },
    { id: '文化场馆', name: '文化场馆', icon: '🎭' },
    { id: '自然景观', name: '自然景观', icon: '🌳' }
  ]

  const filteredLocations = activeCategory === 'all'
    ? locations
    : locations.filter(location => location.category === activeCategory)

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    const emptyStars = 5 - Math.ceil(rating)

    return (
      <div className={styles.rating}>
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className={styles.star}>★</span>
        ))}
        {hasHalfStar && <span className={styles.starHalf}>★</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className={styles.starEmpty}>★</span>
        ))}
        <span className={styles.ratingValue}>{rating}</span>
      </div>
    )
  }

  return (
    <div className={styles.cityMap}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>城市地图</h3>
        <p className={styles.sectionSubtitle}>探索郑州文化地点，感受城市文化魅力</p>
      </div>

      <div className={styles.mapLayout}>
        {/* 左侧地图区域 */}
        <div className={styles.mapContainer}>
          <div className={styles.mapImage}>
            <img
              src={ImageSizes.large('zhengzhou-city-map', 'city-map')}
              alt="郑州文化地图"
              className={styles.mapImg}
            />
            <div className={styles.mapOverlay}>
              <div className={styles.mapLegend}>
                <h5 className={styles.legendTitle}>文化地点分布</h5>
                <div className={styles.legendItems}>
                  <div className={styles.legendItem}>
                    <span className={styles.legendDot + ' ' + styles.museum}></span>
                    <span>博物馆</span>
                  </div>
                  <div className={styles.legendItem}>
                    <span className={styles.legendDot + ' ' + styles.historical}></span>
                    <span>历史遗迹</span>
                  </div>
                  <div className={styles.legendItem}>
                    <span className={styles.legendDot + ' ' + styles.venue}></span>
                    <span>文化场馆</span>
                  </div>
                  <div className={styles.legendItem}>
                    <span className={styles.legendDot + ' ' + styles.nature}></span>
                    <span>自然景观</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧地点列表 */}
        <div className={styles.locationsPanel}>
          <div className={styles.categoryFilter}>
            {categories.map(category => (
              <button
                key={category.id}
                className={`${styles.categoryBtn} ${activeCategory === category.id ? styles.active : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className={styles.categoryIcon}>{category.icon}</span>
                <span className={styles.categoryName}>{category.name}</span>
              </button>
            ))}
          </div>

          <div className={styles.locationsList}>
            {filteredLocations.map(location => (
              <div
                key={location.id}
                className={`${styles.locationCard} ${selectedLocation === location.id ? styles.selected : ''}`}
                onClick={() => setSelectedLocation(location.id)}
              >
                <div className={styles.locationImage}>
                  <img
                    src={ImageSizes.medium(location.image, 'city-map-location')}
                    alt={location.name}
                    className={styles.locationImg}
                  />
                </div>
                <div className={styles.locationContent}>
                  <div className={styles.locationHeader}>
                    <h5 className={styles.locationName}>{location.name}</h5>
                    <span className={styles.locationCategory}>{location.category}</span>
                  </div>
                  <p className={styles.locationDescription}>{location.description}</p>
                  <div className={styles.locationInfo}>
                    <div className={styles.infoItem}>
                      <span className={styles.infoIcon}>📍</span>
                      <span className={styles.infoText}>{location.address}</span>
                    </div>
                    <div className={styles.infoItem}>
                      <span className={styles.infoIcon}>🕐</span>
                      <span className={styles.infoText}>{location.openHours}</span>
                    </div>
                  </div>
                  {renderStars(location.rating)}
                  <div className={styles.locationTags}>
                    {location.tags.map((tag, index) => (
                      <span key={index} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 底部统计信息 */}
      <div className={styles.mapStats}>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>48</span>
          <span className={styles.statLabel}>文化景点</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>15</span>
          <span className={styles.statLabel}>博物馆</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>12</span>
          <span className={styles.statLabel}>历史遗迹</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>8</span>
          <span className={styles.statLabel}>文化场馆</span>
        </div>
      </div>
    </div>
  )
}

export default CityMap