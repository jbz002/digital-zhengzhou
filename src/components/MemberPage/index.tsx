import React from 'react'
import styles from '@styles/components/MemberPage.module.css'

const MemberPage: React.FC = () => {
  return (
    <div className={styles.memberPage}>
      <div className={styles.pageHeader}>
        <h2 className={styles.pageTitle}>会员中心</h2>
        <p className={styles.pageSubtitle}>数字郑州会员专属服务</p>
      </div>

      <div className={styles.memberContent}>
        <div className={styles.memberCard}>
          <div className={styles.cardHeader}>
            <div className={styles.memberAvatar}>
              <span className={styles.avatarIcon}>⭐</span>
            </div>
            <div className={styles.memberInfo}>
              <h3 className={styles.memberName}>郑州用户</h3>
              <p className={styles.memberLevel}>VIP会员</p>
            </div>
          </div>

          <div className={styles.cardContent}>
            <div className={styles.memberStats}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>128</span>
                <span className={styles.statLabel}>积分</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>15</span>
                <span className={styles.statLabel}>关注服务</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>32</span>
                <span className={styles.statLabel}>使用次数</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.memberFeatures}>
          <h3 className={styles.featuresTitle}>会员特权</h3>
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>🎁</span>
              <span className={styles.featureName}>专属优惠</span>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>⚡</span>
              <span className={styles.featureName}>快速通道</span>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>📞</span>
              <span className={styles.featureName}>专属客服</span>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>📊</span>
              <span className={styles.featureName}>数据报告</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberPage