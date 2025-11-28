import React, { useState, useMemo } from 'react'
import { HomeTabType } from '@types/home'
import { NewsItem } from '@types/news'
import { getNewsByTab } from '../../data/newsData'
import NewsList from './NewsList'
import styles from '@styles/components/HomePage.module.css'

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<HomeTabType>(HomeTabType.RECOMMEND)

  // 标签项配置
  const tabs = [
    { id: HomeTabType.FOLLOW, label: '关注' },
    { id: HomeTabType.RECOMMEND, label: '推荐' },
    { id: HomeTabType.COMMUNITY, label: '社区' },
    { id: HomeTabType.MEDIA, label: '融媒' },
    { id: HomeTabType.GOVERNMENT, label: '政务' },
    { id: HomeTabType.SCIENCE, label: '科普' },
    { id: HomeTabType.HEALTH, label: '健康' },
    { id: HomeTabType.FAMILY, label: '家庭' }
  ]

  // 使用useMemo优化数据获取
  const currentNews = useMemo(() => {
    return getNewsByTab(activeTab)
  }, [activeTab])

  const handleTabChange = (tabId: HomeTabType) => {
    setActiveTab(tabId)
  }

  const handleNewsClick = (newsItem: NewsItem) => {
    console.log('点击资讯:', newsItem)
    // 这里可以添加导航到详情页的逻辑
    const additionalInfo = []
    if (newsItem.eventDate) additionalInfo.push(`活动时间：${newsItem.eventDate}`)
    if (newsItem.location) additionalInfo.push(`地点：${newsItem.location}`)
    if (newsItem.price) additionalInfo.push(`价格：${newsItem.price}`)
    if (newsItem.discount) additionalInfo.push(`优惠：${newsItem.discount}`)
    if (newsItem.rating) additionalInfo.push(`评分：${newsItem.rating}分`)
    if (newsItem.quote) additionalInfo.push(`金句：${newsItem.quote}`)
    if (newsItem.videoUrl) additionalInfo.push(`包含视频内容`)
    if (newsItem.audioUrl) additionalInfo.push(`包含音频内容`)
    if (newsItem.images && newsItem.images.length > 1) additionalInfo.push(`多图展示：${newsItem.images.length}张`)
    if (newsItem.difficulty) additionalInfo.push(`难度：${newsItem.difficulty === 'easy' ? '入门级' : newsItem.difficulty === 'medium' ? '进阶级' : '专业级'}`)
    if (newsItem.duration) additionalInfo.push(`时长：${newsItem.duration}`)

    const badges = []
    if (newsItem.isHot) badges.push('🔥热门')
    if (newsItem.isNew) badges.push('🆕新品')
    if (newsItem.isExclusive) badges.push('⭐独家')

    const baseInfo = [
      `标题：${newsItem.title}`,
      `时间：${newsItem.publishTime}`,
      `来源：${newsItem.source || newsItem.author}`,
      `阅读：${newsItem.readCount}次`,
      `点赞：${newsItem.likeCount}次`
    ]

    const allInfo = [...baseInfo, ...additionalInfo]
    if (badges.length > 0) allInfo.push(`标签：${badges.join('、')}`)

    alert(`资讯详情：\n${allInfo.join('\n')}`)
  }

  const handleLoadMore = () => {
    console.log('加载更多资讯')
    // 这里可以实现加载更多的逻辑
  }

  return (
    <div className={styles.homePage}>
      <div className={styles.contentLayout}>
        <div className={styles.leftSidebar}>
          <div className={styles.verticalTabBar}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.verticalTabItem} ${activeTab === tab.id ? styles.active : ''}`}
                onClick={() => handleTabChange(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.contentArea}>
            <NewsList
              newsItems={currentNews}
              onItemClick={handleNewsClick}
              displayMode="mixed"
              className={styles.newsListContainer}
            />

            {currentNews.length > 0 && (
              <div className={styles.loadMore}>
                <button className={styles.loadMoreButton} onClick={handleLoadMore}>
                  加载更多资讯
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage