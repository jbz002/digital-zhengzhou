import React, { useState } from 'react'
import { Organization, OrganizationCategory } from '@types/organization'
import { NewsItem } from '@types/news'
import { HomeTabType } from '@types/home'
import { organizationDetailButtons } from '@data/organizationDetailButtons'
import NewsList from '@components/HomePage/NewsList'
import styles from '@styles/components/OrganizationDetail.module.css'

interface OrganizationDetailProps {
  organization: Organization
  onBack: () => void
}

const OrganizationDetail: React.FC<OrganizationDetailProps> = ({ organization, onBack }) => {
  const [activeTab, setActiveTab] = useState<string>('info')

  // 获取该类型机构的详情按钮配置
  const detailButtons = organizationDetailButtons[organization.category] || []

  // 生成示例资讯数据 - 在实际项目中应该从API获取
  const generateNewsData = (): NewsItem[] => {
    const newsTitles = {
      [OrganizationCategory.LIBRARY]: [
        '图书馆举办"阅读点亮人生"系列活动',
        '新书推荐：《郑州历史文化遗产》',
        '端午节期间开放时间调整通知',
        '暑期阅读推广活动开始报名',
        '图书馆数字化服务升级公告'
      ],
      [OrganizationCategory.SCHOOL]: [
        '2024年秋季招生简章发布',
        '学校荣获"省级文明校园"称号',
        '期末考试安排及注意事项',
        '校园开放日邀请函',
        '优秀教师表彰大会圆满举行'
      ],
      [OrganizationCategory.HOSPITAL]: [
        '医院引进先进医疗设备',
        '专家门诊时间安排表',
        '健康体检优惠活动通知',
        '医保结算系统升级说明',
        '医护人员技能培训圆满完成'
      ],
      default: [
        `${organization.name}最新动态公告`,
        '服务升级通知',
        '用户满意度调查结果',
        '月度工作总结',
        '重要提醒：服务时间调整'
      ]
    }

    const titles = newsTitles[organization.category] || newsTitles.default

    return titles.map((title, index) => ({
      id: `${organization.id}-news-${index + 1}`,
      title,
      category: HomeTabType.ORGANIZATION,
      summary: `${organization.name}最新动态信息，点击查看详情...`,
      publishTime: new Date(Date.now() - (index + 1) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      imageUrl: '/images/news-default.jpg',
      author: organization.name,
      tags: ['公告', '通知'],
      content: `这是${organization.name}的详细公告内容。${title}的具体信息请查看完整详情。`
    }))
  }

  const newsData = generateNewsData()

  return (
    <div className={styles.organizationDetail}>
      {/* 机构信息头部 */}
      <div className={styles.detailHeader}>
        <button className={styles.backButton} onClick={onBack}>
          ← 返回机构列表
        </button>
        <div className={styles.organizationInfo}>
          <h1 className={styles.organizationName}>{organization.name}</h1>
          <div className={styles.organizationMeta}>
            <p className={styles.address}>
              <span className={styles.icon}>📍</span>
              {organization.address}
            </p>
            {organization.phone && (
              <p className={styles.phone}>
                <span className={styles.icon}>📞</span>
                {organization.phone}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* 功能按钮区域 */}
      {detailButtons.length > 0 && (
        <div className={styles.buttonSection}>
          <h3 className={styles.sectionTitle}>服务功能</h3>
          <div className={styles.buttonGrid}>
            {detailButtons.map((button) => (
              <button
                key={button.id}
                className={styles.functionButton}
                onClick={() => {
                  // 这里可以处理按钮点击事件，比如显示模态框或跳转到对应页面
                  console.log(`点击了${button.label}按钮`)
                }}
              >
                <span className={styles.buttonIcon}>{button.icon}</span>
                <span className={styles.buttonLabel}>{button.label}</span>
              </button>
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
              console.log('点击了资讯：', item.title)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default OrganizationDetail