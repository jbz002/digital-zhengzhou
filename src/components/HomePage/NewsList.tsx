import React from 'react'
import { NewsItem } from '@types/news'
import styles from '@styles/components/NewsList.module.css'

interface NewsListProps {
  newsItems: NewsItem[]
  className?: string
  onItemClick?: (item: NewsItem) => void
}

const NewsList: React.FC<NewsListProps> = ({
  newsItems,
  className = '',
  onItemClick
}) => {
  const handleItemClick = (item: NewsItem) => {
    if (onItemClick) {
      onItemClick(item)
    } else {
      // 默认行为：弹出详情
      alert(`资讯详情：\n标题：${item.title}\n时间：${item.publishTime}\n阅读：${item.readCount}次\n点赞：${item.likeCount}次`)
    }
  }

  const formatReadCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`
    }
    return count.toString()
  }

  const formatLikeCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`
    }
    return count.toString()
  }

  const getPriorityClass = (priority?: string) => {
    switch (priority) {
      case 'high':
        return styles.priorityHigh
      case 'medium':
        return styles.priorityMedium
      case 'low':
        return styles.priorityLow
      default:
        return ''
    }
  }

  return (
    <div className={`${styles.newsList} ${className}`}>
      {newsItems.map((item) => (
        <article
          key={item.id}
          className={`${styles.newsItem} ${getPriorityClass(item.priority)}`}
          onClick={() => handleItemClick(item)}
        >
          {item.imageUrl && (
            <div className={styles.newsImage}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.imageIcon}>📰</span>
              </div>
            </div>
          )}

          <div className={styles.newsContent}>
            <div className={styles.newsHeader}>
              {item.priority === 'high' && (
                <span className={styles.priorityBadge}>置顶</span>
              )}
              <h3 className={styles.newsTitle}>{item.title}</h3>
            </div>

            <p className={styles.newsSummary}>{item.summary}</p>

            <div className={styles.newsFooter}>
              <div className={styles.newsMeta}>
                <span className={styles.newsSource}>{item.source || item.author}</span>
                <span className={styles.newsTime}>{item.publishTime}</span>
              </div>

              <div className={styles.newsStats}>
                <span className={styles.readCount}>
                  <span className={styles.statIcon}>👁</span>
                  {formatReadCount(item.readCount || 0)}
                </span>
                <span className={styles.likeCount}>
                  <span className={styles.statIcon}>👍</span>
                  {formatLikeCount(item.likeCount || 0)}
                </span>
              </div>
            </div>

            {item.tags && item.tags.length > 0 && (
              <div className={styles.newsTags}>
                {item.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </article>
      ))}

      {newsItems.length === 0 && (
        <div className={styles.emptyState}>
          <span className={styles.emptyIcon}>📭</span>
          <p className={styles.emptyText}>暂无相关资讯</p>
          <p className={styles.emptySubtext}>请稍后再来查看</p>
        </div>
      )}
    </div>
  )
}

export default NewsList