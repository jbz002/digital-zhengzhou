import React from 'react'
import { Merchant, MerchantDetailProps } from '@types/resident'
import { NewsItem } from '@types/news'
import { HomeTabType } from '@types/home'
import NewsList from '@components/HomePage/NewsList'
import styles from '@styles/components/MerchantDetail.module.css'

const MerchantDetail: React.FC<MerchantDetailProps> = ({ merchant, onBack }) => {
  // 生成示例资讯数据 - 在实际项目中应该从API获取
  const generateNewsData = (): NewsItem[] => {
    const newsTitles = [
      `${merchant.name}最新优惠活动`,
      `${merchant.name}新品上市`,
      `${merchant.name}会员权益升级`,
      `${merchant.name}服务品质提升`,
      `${merchant.name}顾客好评如潮`
    ]

    return newsTitles.map((title, index) => ({
      id: `${merchant.id}-news-${index + 1}`,
      title,
      category: HomeTabType.ORGANIZATION,
      summary: `${merchant.name}最新动态信息，点击查看详情...`,
      publishTime: new Date(Date.now() - (index + 1) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      imageUrl: merchant.imageUrl || '/images/news-default.jpg',
      author: merchant.name,
      tags: ['公告', '优惠', '活动'],
      content: `这是${merchant.name}的详细公告内容。${title}的具体信息请查看完整详情。`
    }))
  }

  const newsData = generateNewsData()

  return (
    <div className={styles.merchantDetail}>
      {/* 商家信息头部 */}
      <div className={styles.detailHeader}>
        <button className={styles.backButton} onClick={onBack}>
          ← 返回服务列表
        </button>

        <div className={styles.merchantInfo}>
          <div className={styles.merchantBasic}>
            <h1 className={styles.merchantName}>{merchant.name}</h1>
            <div className={styles.merchantMeta}>
              <div className={styles.rating}>
                <span className={styles.stars}>⭐</span>
                <span className={styles.ratingValue}>{merchant.rating || '暂无评分'}</span>
                <span className={styles.reviewCount}>({merchant.reviewCount || 0}条评价)</span>
              </div>
              <div className={styles.averagePrice}>
                <span className={styles.priceLabel}>人均消费：</span>
                <span className={styles.priceValue}>{merchant.averagePrice || '暂无'}</span>
              </div>
            </div>
          </div>

          <div className={styles.merchantTags}>
            {merchant.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* 商家详细信息 */}
      <div className={styles.infoSection}>
        <h3 className={styles.sectionTitle}>商家信息</h3>
        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>📍 地址</span>
            <span className={styles.infoValue}>{merchant.address}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>📞 联系电话</span>
            <span className={styles.infoValue}>{merchant.phone}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>⏰ 营业时间</span>
            <span className={styles.infoValue}>{merchant.businessHours}</span>
          </div>
        </div>
      </div>

      {/* 店铺简介 */}
      <div className={styles.introductionSection}>
        <h3 className={styles.sectionTitle}>店铺简介</h3>
        <div className={styles.introductionContent}>
          <p className={styles.introductionText}>{merchant.introduction}</p>
        </div>
      </div>

      {/* 特色服务 */}
      {merchant.features && merchant.features.length > 0 && (
        <div className={styles.featuresSection}>
          <h3 className={styles.sectionTitle}>特色服务</h3>
          <div className={styles.featuresGrid}>
            {merchant.features.map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                <span className={styles.featureIcon}>✨</span>
                <span className={styles.featureText}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 主要产品/服务 */}
      {merchant.services && merchant.services.length > 0 && (
        <div className={styles.servicesSection}>
          <h3 className={styles.sectionTitle}>主要产品</h3>
          <div className={styles.servicesList}>
            {merchant.services.map((service, index) => (
              <div key={index} className={styles.serviceItem}>
                <span className={styles.serviceBullet}>•</span>
                <span className={styles.serviceText}>{service}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 资讯列表区域 */}
      <div className={styles.newsSection}>
        <h3 className={styles.sectionTitle}>
          最新资讯
          <span className={styles.newsCount}>共{newsData.length}条</span>
        </h3>
        <div className={styles.newsListContainer}>
          <NewsList
            newsItems={newsData}
            onItemClick={(item) => {
              // 这里可以处理资讯项点击，比如跳转到资讯详情页
              console.log('点击了商家资讯：', item.title)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default MerchantDetail