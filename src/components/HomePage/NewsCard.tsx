import React from 'react'
import { NewsItem, CardLayoutType } from '@types/news'
import { ImageSizes, handleImageError, imageStyles } from '@utils/randomImage'
import styles from '@styles/components/NewsCard.module.css'

interface NewsCardProps {
  item: NewsItem
  onItemClick?: (item: NewsItem) => void
  layout?: CardLayoutType
  className?: string
}

const NewsCard: React.FC<NewsCardProps> = ({
  item,
  onItemClick,
  layout = 'default',
  className = ''
}) => {
  const handleCardClick = () => {
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

  const getVisualClassNames = () => {
    const visual = item.visualStyle || {}
    const classNames = []

    if (visual.theme) classNames.push(styles[`theme-${visual.theme}`])
    if (visual.borderRadius) classNames.push(styles[`radius-${visual.borderRadius}`])
    if (visual.shadow) classNames.push(styles[`shadow-${visual.shadow}`])

    return classNames.join(' ')
  }

  const renderBadges = () => {
    const badges = []
    if (item.priority === 'high') {
      badges.push(<span key="priority" className={styles.priorityBadge}>置顶</span>)
    }
    if (item.isHot) {
      badges.push(<span key="hot" className={styles.hotBadge}>热门</span>)
    }
    if (item.isNew) {
      badges.push(<span key="new" className={styles.newBadge}>新品</span>)
    }
    if (item.isExclusive) {
      badges.push(<span key="exclusive" className={styles.exclusiveBadge}>独家</span>)
    }
    return badges
  }

  const renderRating = () => {
    if (!item.rating) return null
    return (
      <div className={styles.rating}>
        <span className={styles.ratingStars}>
          {'★'.repeat(Math.floor(item.rating))}{item.rating % 1 >= 0.5 ? '☆' : ''}
        </span>
        <span className={styles.ratingValue}>{item.rating.toFixed(1)}</span>
      </div>
    )
  }

  const renderSpecialInfo = () => {
    const items = []
    if (item.eventDate) items.push(<span key="date" className={styles.eventInfo}>📅 {item.eventDate}</span>)
    if (item.location) items.push(<span key="location" className={styles.eventInfo}>📍 {item.location}</span>)
    if (item.duration) items.push(<span key="duration" className={styles.eventInfo}>⏱ {item.duration}</span>)
    if (item.difficulty) items.push(<span key="difficulty" className={`${styles.difficulty} ${styles[`difficulty-${item.difficulty}`]}`}>{item.difficulty === 'easy' ? '入门' : item.difficulty === 'medium' ? '中等' : '高级'}</span>)
    if (item.price) items.push(<span key="price" className={styles.price}>{item.price}</span>)
    if (item.discount) items.push(<span key="discount" className={styles.discount}>{item.discount}</span>)
    return items
  }

  const renderMediaIndicators = () => {
    const indicators = []
    if (item.videoUrl) indicators.push(<span key="video" className={styles.mediaIndicator}>🎥 视频</span>)
    if (item.audioUrl) indicators.push(<span key="audio" className={styles.mediaIndicator}>🎵 音频</span>)
    if (item.images && item.images.length > 1) indicators.push(<span key="gallery" className={styles.mediaIndicator}>🖼 {item.images.length}图</span>)
    return indicators
  }

  // 根据布局类型渲染不同的卡片
  const renderCardByLayout = () => {
    const commonProps = {
      onClick: handleCardClick,
      className: `${styles.newsCard} ${styles[`layout-${layout}`]} ${getVisualClassNames()} ${className}`
    }

    switch (layout) {
      case 'featured':
        return (
          <article {...commonProps}>
            {item.featuredImage && (
              <div className={styles.featuredImage}>
                <div className={styles.imageWrapper}>
                  <img
                    src={ImageSizes.featured(item.id, 'NewsCard')}
                    alt={item.title}
                    style={imageStyles}
                    onError={handleImageError}
                  />
                </div>
              </div>
            )}
            <div className={styles.featuredContent}>
              <div className={styles.cardHeader}>
                <div className={styles.badges}>{renderBadges()}</div>
                <h2 className={styles.featuredTitle}>{item.title}</h2>
                {item.quote && <blockquote className={styles.quote}>"{item.quote}"</blockquote>}
              </div>
              <p className={styles.featuredSummary}>{item.summary}</p>
              <div className={styles.cardFooter}>
                <div className={styles.leftInfo}>
                  {item.visualStyle?.showSource !== false && (
                    <span className={styles.source}>{item.source || item.author}</span>
                  )}
                  <span className={styles.time}>{item.publishTime}</span>
                  {renderMediaIndicators()}
                </div>
                {item.visualStyle?.showStats !== false && (
                  <div className={styles.stats}>
                    <span className={styles.statItem}>
                      <span className={styles.statIcon}>👁</span>
                      {formatReadCount(item.readCount || 0)}
                    </span>
                    <span className={styles.statItem}>
                      <span className={styles.statIcon}>👍</span>
                      {formatLikeCount(item.likeCount || 0)}
                    </span>
                    {renderRating()}
                  </div>
                )}
              </div>
              {item.visualStyle?.showTags !== false && item.tags && (
                <div className={styles.tags}>
                  {item.tags.slice(0, 4).map((tag, index) => (
                    <span key={index} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </article>
        )

      case 'grid':
        return (
          <article {...commonProps}>
            <div className={styles.gridImage}>
              <div className={styles.imageWrapper}>
                <img
                  src={ImageSizes.grid(item.id, 'NewsCard')}
                  alt={item.title}
                  style={imageStyles}
                  onError={handleImageError}
                />
              </div>
              <div className={styles.overlayBadges}>{renderBadges()}</div>
              {renderMediaIndicators()}
            </div>
            <div className={styles.gridContent}>
              <h3 className={styles.gridTitle}>{item.title}</h3>
              <p className={styles.gridSummary}>{item.summary}</p>
              <div className={styles.gridFooter}>
                <div className={styles.specialInfo}>{renderSpecialInfo()}</div>
                <div className={styles.gridMeta}>
                  <span className={styles.time}>{item.publishTime}</span>
                  {item.visualStyle?.showStats !== false && (
                    <div className={styles.gridStats}>
                      <span className={styles.statIcon}>👁 {formatReadCount(item.readCount || 0)}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </article>
        )

      case 'list':
        return (
          <article {...commonProps}>
            <div className={styles.listContent}>
              <div className={styles.listHeader}>
                <div className={styles.listBadges}>{renderBadges()}</div>
                <h3 className={styles.listTitle}>{item.title}</h3>
              </div>
              <p className={styles.listSummary}>{item.summary}</p>
              {item.quote && <div className={styles.listQuote}>💭 {item.quote}</div>}
              <div className={styles.listFooter}>
                <div className={styles.listLeft}>
                  {item.visualStyle?.showSource !== false && (
                    <span className={styles.source}>{item.source || item.author}</span>
                  )}
                  <span className={styles.time}>{item.publishTime}</span>
                  <div className={styles.specialInfo}>{renderSpecialInfo()}</div>
                </div>
                {item.visualStyle?.showStats !== false && (
                  <div className={styles.listStats}>
                    <span className={styles.statItem}>
                      <span className={styles.statIcon}>👁</span>
                      {formatReadCount(item.readCount || 0)}
                    </span>
                    <span className={styles.statItem}>
                      <span className={styles.statIcon}>👍</span>
                      {formatLikeCount(item.likeCount || 0)}
                    </span>
                  </div>
                )}
              </div>
            </div>
            {item.imageUrl && (
              <div className={styles.listImage}>
                <div className={styles.imageWrapper}>
                  <img
                    src={ImageSizes.small(item.id, 'NewsCard')}
                    alt={item.title}
                    style={imageStyles}
                    onError={handleImageError}
                  />
                </div>
              </div>
            )}
          </article>
        )

      case 'magazine':
        return (
          <article {...commonProps}>
            <div className={styles.magazineHeader}>
              <div className={styles.magazineBadges}>{renderBadges()}</div>
              <h2 className={styles.magazineTitle}>{item.title}</h2>
              {item.quote && <blockquote className={styles.magazineQuote}>"{item.quote}"</blockquote>}
            </div>
            {item.featuredImage && (
              <div className={styles.magazineImage}>
                <div className={styles.imageWrapper}>
                  <img
                    src={ImageSizes.medium(item.id, 'NewsCard')}
                    alt={item.title}
                    style={imageStyles}
                    onError={handleImageError}
                  />
                </div>
              </div>
            )}
            <div className={styles.magazineContent}>
              <p className={styles.magazineSummary}>{item.summary}</p>
              <div className={styles.magazineMeta}>
                <div className={styles.magazineLeft}>
                  {item.visualStyle?.showSource !== false && (
                    <span className={styles.source}>{item.source || item.author}</span>
                  )}
                  <span className={styles.time}>{item.publishTime}</span>
                </div>
                <div className={styles.magazineRight}>
                  {renderRating()}
                  {item.visualStyle?.showStats !== false && (
                    <div className={styles.magazineStats}>
                      <span className={styles.statIcon}>👁 {formatReadCount(item.readCount || 0)}</span>
                    </div>
                  )}
                </div>
              </div>
              {renderSpecialInfo()}
            </div>
          </article>
        )

      case 'compact':
        return (
          <article {...commonProps}>
            <div className={styles.compactLeft}>
              {item.imageUrl && (
                <div className={styles.compactImage}>
                  <div className={styles.imageWrapper}>
                    <img
                      src={ImageSizes.thumbnail(item.id, 'NewsCard')}
                      alt={item.title}
                      style={imageStyles}
                      onError={handleImageError}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className={styles.compactContent}>
              <div className={styles.compactHeader}>
                <h3 className={styles.compactTitle}>{item.title}</h3>
                <div className={styles.compactBadges}>{renderBadges()}</div>
              </div>
              <div className={styles.compactMeta}>
                <span className={styles.source}>{item.source || item.author}</span>
                <span className={styles.time}>{item.publishTime}</span>
                <div className={styles.compactStats}>
                  <span className={styles.statIcon}>👁 {formatReadCount(item.readCount || 0)}</span>
                  <span className={styles.statIcon}>👍 {formatLikeCount(item.likeCount || 0)}</span>
                </div>
              </div>
            </div>
          </article>
        )

      default: // 'default'
        return (
          <article {...commonProps}>
            {item.imageUrl && (
              <div className={styles.defaultImage}>
                <div className={styles.imageWrapper}>
                  <img
                    src={ImageSizes.small(item.id, 'NewsCard')}
                    alt={item.title}
                    style={imageStyles}
                    onError={handleImageError}
                  />
                </div>
              </div>
            )}
            <div className={styles.defaultContent}>
              <div className={styles.defaultHeader}>
                <div className={styles.defaultBadges}>{renderBadges()}</div>
                <h3 className={styles.defaultTitle}>{item.title}</h3>
              </div>
              <p className={styles.defaultSummary}>{item.summary}</p>
              <div className={styles.defaultFooter}>
                <div className={styles.defaultLeft}>
                  {item.visualStyle?.showSource !== false && (
                    <span className={styles.source}>{item.source || item.author}</span>
                  )}
                  <span className={styles.time}>{item.publishTime}</span>
                </div>
                {item.visualStyle?.showStats !== false && (
                  <div className={styles.defaultStats}>
                    <span className={styles.statItem}>
                      <span className={styles.statIcon}>👁</span>
                      {formatReadCount(item.readCount || 0)}
                    </span>
                    <span className={styles.statItem}>
                      <span className={styles.statIcon}>👍</span>
                      {formatLikeCount(item.likeCount || 0)}
                    </span>
                  </div>
                )}
              </div>
              {item.visualStyle?.showTags !== false && item.tags && (
                <div className={styles.tags}>
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </article>
        )
    }
  }

  return renderCardByLayout()
}

export default NewsCard