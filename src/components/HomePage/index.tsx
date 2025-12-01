import React, { useState, useMemo } from 'react'
import { HomeTabType } from '../../types/home'
import { NewsItem } from '../../types/news'
import { getNewsByTab } from '../../data/newsData'
import NewsList from './NewsList'
import styles from '../../styles/components/HomePage.module.css'

interface HomePageProps {
  onArticleClick: (articleId: string) => void
}

const HomePage: React.FC<HomePageProps> = ({ onArticleClick }) => {
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
    // 跳转到文章详情页
    onArticleClick(newsItem.id)
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