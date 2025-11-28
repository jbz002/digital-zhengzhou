import React from 'react'
import { CultureFeatureType } from '@types/culture'
import styles from '@styles/components/CulturePage.module.css'

const CulturePage: React.FC = () => {
  // 文化功能模块配置
  const features = [
    {
      id: CultureFeatureType.MEDIA_CENTER,
      title: '融媒中心',
      description: '融媒体内容和资讯平台',
      icon: '📺'
    },
    {
      id: CultureFeatureType.READING_CLUB,
      title: '同城读书会',
      description: '本地读书活动和书友社区',
      icon: '📖'
    },
    {
      id: CultureFeatureType.NATION_READING,
      title: '全民阅读',
      description: '推广全民阅读活动',
      icon: '📚'
    },
    {
      id: CultureFeatureType.KNOWLEDGE_MARKET,
      title: '知识超市',
      description: '知识付费和学习平台',
      icon: '🛒'
    },
    {
      id: CultureFeatureType.CITY_CARD,
      title: '城市名片',
      description: '郑州城市形象展示',
      icon: '🏛️'
    },
    {
      id: CultureFeatureType.CITY_MAP,
      title: '城市地图',
      description: '郑州文化地点导览',
      icon: '🗺️'
    },
    {
      id: CultureFeatureType.CULTURE_ACTIVITY,
      title: '文化活动',
      description: '本地文化活动信息',
      icon: '🎭'
    },
    {
      id: CultureFeatureType.TOURISM_SERVICE,
      title: '文旅服务',
      description: '文化旅游综合服务',
      icon: '✈️'
    }
  ]

  return (
    <div className={styles.culturePage}>
      <div className={styles.pageHeader}>
        <h2 className={styles.pageTitle}>郑州文化</h2>
        <p className={styles.pageSubtitle}>探索郑州丰富的文化资源和活动</p>
      </div>

      <div className={styles.featureGrid}>
        {features.map((feature) => (
          <div key={feature.id} className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <span className={styles.iconEmoji}>{feature.icon}</span>
            </div>
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CulturePage