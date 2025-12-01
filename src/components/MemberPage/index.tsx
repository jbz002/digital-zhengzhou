import React from 'react'
import styles from '@styles/components/MemberPage.module.css'

const MemberPage: React.FC = () => {
  // 会员等级权益数据
  const membershipLevels = [
    {
      level: '普通会员',
      icon: '🥉',
      benefits: ['基础服务', '资讯浏览', '服务预约'],
      current: false
    },
    {
      level: '白银会员',
      icon: '🥈',
      benefits: ['快速通道', '专属客服', '积分翻倍', '优先办理'],
      current: false
    },
    {
      level: '黄金会员',
      icon: '🥇',
      benefits: ['全功能服务', '一对一顾问', 'VIP快速通道', '积分3倍', '专属活动'],
      current: true
    },
    {
      level: '钻石会员',
      icon: '💎',
      benefits: ['顶级服务', '专属管家', '绿色通道', '积分5倍', '定制化服务', '免费代办'],
      current: false
    }
  ]

  // 会员专享服务
  const exclusiveServices = [
    { name: '政务代办', icon: '📝', desc: '专业政务代办服务', color: '#E53935' },
    { name: '法律咨询', icon: '⚖️', desc: '专业法律顾问服务', color: '#2196F3' },
    { name: '健康管理', icon: '🏥', desc: '个人健康档案管理', color: '#4CAF50' },
    { name: '教育咨询', icon: '🎓', desc: '教育资源规划服务', color: '#FF9800' },
    { name: '金融服务', icon: '💰', desc: '理财规划和金融服务', color: '#9C27B0' },
    { name: '生活服务', icon: '🏠', desc: '便民生活一站式服务', color: '#00BCD4' }
  ]

  // 会员活动
  const memberActivities = [
    {
      title: '新会员专享礼包',
      desc: '首次成为会员即可获得积分大礼包',
      icon: '🎁',
      date: '2024-12-31截止',
      type: 'limited'
    },
    {
      title: '会员日活动',
      desc: '每月15日会员专享全场服务8折',
      icon: '🎉',
      date: '每月15日',
      type: 'monthly'
    },
    {
      title: '积分兑换商城',
      desc: '使用积分兑换精美礼品和优惠券',
      icon: '🛍️',
      date: '长期有效',
      type: 'permanent'
    }
  ]

  // 会员统计数据
  const memberStats = {
    totalPoints: 2580,
    monthlyUsage: 45,
    savedTime: '12小时',
    savedMoney: '¥1,280',
    memberSince: '2023年6月',
    nextReward: '还需420积分达到下一等级'
  }

  return (
    <div className={styles.memberPage}>
      <div className={styles.pageHeader}>
        <h2 className={styles.pageTitle}>会员中心</h2>
        <p className={styles.pageSubtitle}>数字郑州会员专属服务，畅享智慧城市生活</p>
      </div>

      <div className={styles.memberContent}>
        {/* 会员信息卡片 */}
        <div className={styles.memberCard}>
          <div className={styles.cardHeader}>
            <div className={styles.memberAvatar}>
              <span className={styles.avatarIcon}>👑</span>
            </div>
            <div className={styles.memberInfo}>
              <h3 className={styles.memberName}>郑州用户</h3>
              <p className={styles.memberLevel}>黄金会员</p>
              <p className={styles.memberSince}>会员时长：{memberStats.memberSince}</p>
            </div>
            <div className={styles.upgradeButton}>
              <button>升级会员</button>
            </div>
          </div>

          <div className={styles.cardContent}>
            <div className={styles.memberStats}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>{memberStats.totalPoints}</span>
                <span className={styles.statLabel}>积分</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>{memberStats.monthlyUsage}</span>
                <span className={styles.statLabel}>本月使用</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>{memberStats.savedTime}</span>
                <span className={styles.statLabel}>节省时间</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>{memberStats.savedMoney}</span>
                <span className={styles.statLabel}>节省费用</span>
              </div>
            </div>
            <div className={styles.nextReward}>
              <span className={styles.rewardText}>{memberStats.nextReward}</span>
              <div className={styles.progress}>
                <div className={styles.progressBar} style={{ width: '86%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* 会员等级体系 */}
        <div className={styles.memberLevels}>
          <h3 className={styles.sectionTitle}>会员等级体系</h3>
          <div className={styles.levelsGrid}>
            {membershipLevels.map((level, index) => (
              <div
                key={index}
                className={`${styles.levelCard} ${level.current ? styles.currentLevel : ''}`}
              >
                <div className={styles.levelHeader}>
                  <span className={styles.levelIcon}>{level.icon}</span>
                  <span className={styles.levelName}>{level.level}</span>
                  {level.current && <span className={styles.currentBadge}>当前</span>}
                </div>
                <div className={styles.levelBenefits}>
                  {level.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className={styles.benefitItem}>
                      <span className={styles.benefitIcon}>✓</span>
                      <span className={styles.benefitText}>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 会员专享服务 */}
        <div className={styles.exclusiveServices}>
          <h3 className={styles.sectionTitle}>专享服务</h3>
          <div className={styles.servicesGrid}>
            {exclusiveServices.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon} style={{ backgroundColor: service.color }}>
                  {service.icon}
                </div>
                <div className={styles.serviceContent}>
                  <h4 className={styles.serviceName}>{service.name}</h4>
                  <p className={styles.serviceDesc}>{service.desc}</p>
                </div>
                <button className={styles.useButton}>立即使用</button>
              </div>
            ))}
          </div>
        </div>

        {/* 会员活动 */}
        <div className={styles.memberActivities}>
          <h3 className={styles.sectionTitle}>会员活动</h3>
          <div className={styles.activitiesGrid}>
            {memberActivities.map((activity, index) => (
              <div key={index} className={styles.activityCard}>
                <div className={styles.activityHeader}>
                  <span className={styles.activityIcon}>{activity.icon}</span>
                  <div className={styles.activityType}>
                    <span className={`${styles.typeBadge} ${styles[activity.type]}`}>
                      {activity.type === 'limited' ? '限时活动' :
                       activity.type === 'monthly' ? '月度活动' : '长期活动'}
                    </span>
                  </div>
                </div>
                <h4 className={styles.activityTitle}>{activity.title}</h4>
                <p className={styles.activityDesc}>{activity.desc}</p>
                <div className={styles.activityFooter}>
                  <span className={styles.activityDate}>{activity.date}</span>
                  <button className={styles.joinButton}>参与活动</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 会员特权 */}
        <div className={styles.memberFeatures}>
          <h3 className={styles.featuresTitle}>会员特权</h3>
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>🎁</span>
              <span className={styles.featureName}>专属优惠</span>
              <span className={styles.featureDesc}>享受专属会员价格</span>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>⚡</span>
              <span className={styles.featureName}>快速通道</span>
              <span className={styles.featureDesc}>优先办理各类业务</span>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>📞</span>
              <span className={styles.featureName}>专属客服</span>
              <span className={styles.featureDesc}>7×24小时专属服务</span>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>📊</span>
              <span className={styles.featureName}>数据报告</span>
              <span className={styles.featureDesc}>个人服务数据分析</span>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>🎫</span>
              <span className={styles.featureName}>活动优先</span>
              <span className={styles.featureDesc}>优先参与各类活动</span>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>🔄</span>
              <span className={styles.featureName}>积分加速</span>
              <span className={styles.featureDesc}>积分获取加速特权</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberPage