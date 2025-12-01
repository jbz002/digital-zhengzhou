import React, { useState } from 'react'
import { ImageSizes } from '@utils/randomImage'
import styles from '@styles/components/CulturePage/TourismService.module.css'

interface TourismServiceItem {
  id: string
  title: string
  description: string
  category: string
  icon: string
  image: string
  contact: string
  rating: number
  priceLevel: string
  location: string
  openingHours: string
}

const TourismServiceComponent: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const services: TourismServiceItem[] = [
    {
      id: 'service-1',
      title: '郑州文旅服务中心',
      description: '提供全方位的旅游咨询、线路规划、票务预订等一站式服务',
      category: '服务中心',
      icon: '🏢',
      image: 'tourism-service-center',
      contact: '0371-12345678',
      rating: 4.9,
      priceLevel: '免费服务',
      location: '郑东新区商务内环',
      openingHours: '8:00-20:00'
    },
    {
      id: 'service-2',
      title: '黄河文化体验中心',
      description: '深度体验黄河文化，提供文化讲解、传统手工艺体验等服务',
      category: '文化体验',
      icon: '🏛️',
      image: 'yellow-river-experience',
      contact: '0371-87654321',
      rating: 4.8,
      priceLevel: '¥50-200',
      location: '惠济区黄河风景名胜区',
      openingHours: '9:00-18:00'
    },
    {
      id: 'service-3',
      title: '郑州美食导览服务',
      description: '品尝地道郑州美食，专业导游带领探索城市美食文化',
      category: '美食旅游',
      icon: '🍜',
      image: 'food-tour-service',
      contact: '0371-11223344',
      rating: 4.7,
      priceLevel: '¥100-300',
      location: '二七区德化街',
      openingHours: '10:00-22:00'
    }
  ]

  const categories = [
    { id: 'all', name: '全部服务', count: services.length },
    { id: '服务中心', name: '服务中心', count: 1 },
    { id: '文化体验', name: '文化体验', count: 1 },
    { id: '美食旅游', name: '美食旅游', count: 1 }
  ]

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(service => service.category === activeCategory)

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating)
    const emptyStars = 5 - fullStars

    return (
      <div className={styles.rating}>
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className={styles.star}>★</span>
        ))}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className={styles.starEmpty}>★</span>
        ))}
        <span className={styles.ratingValue}>{rating}</span>
      </div>
    )
  }

  return (
    <div className={styles.tourismService}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>文旅服务</h3>
        <p className={styles.sectionSubtitle}>专业文化旅游服务，让您的郑州之旅更加精彩</p>
      </div>

      <div className={styles.categoryFilter}>
        <div className={styles.categories}>
          {categories.map(category => (
            <button
              key={category.id}
              className={`${styles.categoryBtn} ${activeCategory === category.id ? styles.active : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className={styles.categoryCount}>{category.count}</span>
              <span className={styles.categoryName}>{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.servicesGrid}>
        {filteredServices.map(service => (
          <div key={service.id} className={styles.serviceCard}>
            <div className={styles.serviceImage}>
              <img
                src={ImageSizes.grid(service.image, 'tourism-service')}
                alt={service.title}
                className={styles.serviceImg}
              />
              <div className={styles.serviceIcon}>
                <span className={styles.iconEmoji}>{service.icon}</span>
              </div>
            </div>
            <div className={styles.serviceContent}>
              <div className={styles.serviceHeader}>
                <h4 className={styles.serviceTitle}>{service.title}</h4>
                <span className={styles.serviceCategory}>{service.category}</span>
              </div>
              <p className={styles.serviceDescription}>{service.description}</p>
              {renderStars(service.rating)}

              <div className={styles.serviceInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>价格：</span>
                  <span className={styles.infoValue}>{service.priceLevel}</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>地址：</span>
                  <span className={styles.infoValue}>{service.location}</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>时间：</span>
                  <span className={styles.infoValue}>{service.openingHours}</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>电话：</span>
                  <span className={styles.infoValue}>{service.contact}</span>
                </div>
              </div>

              <div className={styles.serviceActions}>
                <button className={styles.detailBtn}>查看详情</button>
                <button className={styles.contactBtn}>立即联系</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.serviceStats}>
        <div className={styles.statsHeader}>
          <h4 className={styles.statsTitle}>服务统计</h4>
          <p className={styles.statsSubtitle}>优质服务，贴心体验</p>
        </div>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <span className={styles.statIcon}>🏢</span>
            <span className={styles.statNumber}>23</span>
            <span className={styles.statLabel}>服务中心</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statIcon}>👥</span>
            <span className={styles.statNumber}>150K+</span>
            <span className={styles.statLabel}>年服务人次</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statIcon}>⭐</span>
            <span className={styles.statNumber}>4.8</span>
            <span className={styles.statLabel}>平均评分</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statIcon}>🏆</span>
            <span className={styles.statNumber}>98%</span>
            <span className={styles.statLabel}>满意度</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourismServiceComponent