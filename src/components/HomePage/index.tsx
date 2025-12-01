import React, { useState, useMemo } from 'react'
import { HomeTabType } from '../../types/home'
import { NewsItem } from '../../types/news'
import { CommunityInfo } from '../../types/community'
import { getNewsByTab } from '../../data/newsData'
import NewsList from './NewsList'
import CommunityClassification from '../CommunityClassification'
import styles from '../../styles/components/HomePage.module.css'

interface HomePageProps {
  onArticleClick: (articleId: string) => void
  onCommunitySelect?: (community: CommunityInfo) => void
}

const HomePage: React.FC<HomePageProps> = ({ onArticleClick, onCommunitySelect }) => {
  const [activeTab, setActiveTab] = useState<HomeTabType>(HomeTabType.FOLLOW)

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

  const handleCommunitySelect = (community: CommunityInfo) => {
    console.log('选择社区:', community)
    if (onCommunitySelect) {
      onCommunitySelect(community)
    }
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
            {/* 社区标签显示社区分类组件，其他标签显示资讯列表 */}
            {activeTab === HomeTabType.COMMUNITY ? (
              <CommunityClassification
                onCommunitySelect={handleCommunitySelect}
                className={styles.communityContainer}
              />
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage