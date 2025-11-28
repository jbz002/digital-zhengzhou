import React from 'react'
import { NewsItem } from '@types/news'
import NewsCard from './NewsCard'
import styles from '@styles/components/NewsList.module.css'

interface NewsListProps {
  newsItems: NewsItem[]
  className?: string
  onItemClick?: (item: NewsItem) => void
  displayMode?: 'mixed' | 'uniform' | 'grid'  // 混合显示、统一显示、网格显示
  uniformLayout?: 'default' | 'featured' | 'list' | 'magazine' | 'compact'  // 统一显示时的布局
  gridColumns?: number  // 网格显示时的列数
}

const NewsList: React.FC<NewsListProps> = ({
  newsItems,
  className = '',
  onItemClick,
  displayMode = 'mixed',
  uniformLayout = 'default',
  gridColumns = 3
}) => {
  // 生成智能布局策略
  const generateSmartLayout = (items: NewsItem[]): Array<{item: NewsItem, layout: string, gridSize?: number}> => {
    const result: Array<{item: NewsItem, layout: string, gridSize?: number}> = []

    items.forEach((item, index) => {
      // 如果已有指定布局，使用指定布局
      if (item.cardLayout) {
        result.push({ item, layout: item.cardLayout })
        return
      }

      // 智能布局策略
      if (displayMode === 'mixed') {
        // 置顶和重要资讯使用特色大图布局
        if (item.priority === 'high' || item.isExclusive) {
          result.push({ item, layout: 'featured' })
        }
        // 有特色图片或视频的资讯使用杂志布局
        else if (item.featuredImage || item.videoUrl) {
          result.push({ item, layout: 'magazine' })
        }
        // 有多个图片的资讯使用网格布局
        else if (item.images && item.images.length > 1) {
          result.push({ item, layout: 'grid', gridSize: 1 })  // 占1列
        }
        // 有价格、折扣等商业信息的资讯使用紧凑布局
        else if (item.price || item.discount || item.rating) {
          result.push({ item, layout: 'compact' })
        }
        // 有引用语句的资讯使用列表布局
        else if (item.quote) {
          result.push({ item, layout: 'list' })
        }
        // 有活动信息的资讯使用网格布局
        else if (item.eventDate || item.location) {
          result.push({ item, layout: 'grid', gridSize: 1 })
        }
        // 默认使用标准布局
        else {
          result.push({ item, layout: 'default' })
        }
      } else if (displayMode === 'uniform') {
        // 统一布局模式
        result.push({ item, layout: uniformLayout })
      } else if (displayMode === 'grid') {
        // 网格布局模式
        if (item.priority === 'high' || item.isExclusive) {
          // 重要资讯占2列
          result.push({ item, layout: 'featured', gridSize: 2 })
        } else {
          // 普通资讯占1列
          result.push({ item, layout: 'grid', gridSize: 1 })
        }
      }
    })

    return result
  }

  const layoutItems = generateSmartLayout(newsItems)

  // 渲染混合布局
  const renderMixedLayout = () => {
    return (
      <div className={`${styles.mixedLayout} ${className}`}>
        {layoutItems.map(({ item, layout }, index) => (
          <NewsCard
            key={item.id}
            item={item}
            layout={layout}
            onItemClick={onItemClick}
          />
        ))}
      </div>
    )
  }

  // 渲染统一布局
  const renderUniformLayout = () => {
    return (
      <div className={`${styles.uniformLayout} ${className}`}>
        {layoutItems.map(({ item, layout }) => (
          <NewsCard
            key={item.id}
            item={item}
            layout={layout}
            onItemClick={onItemClick}
          />
        ))}
      </div>
    )
  }

  // 渲染网格布局
  const renderGridLayout = () => {
    const gridStyle = {
      display: 'grid',
      gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
      gap: 'var(--spacing-lg)',
      width: '100%'
    }

    return (
      <div className={`${styles.gridLayout} ${className}`} style={gridStyle}>
        {layoutItems.map(({ item, layout, gridSize }) => (
          <div
            key={item.id}
            style={{
              gridColumn: gridSize ? `span ${gridSize}` : 'span 1'
            }}
          >
            <NewsCard
              item={item}
              layout={layout}
              onItemClick={onItemClick}
            />
          </div>
        ))}
      </div>
    )
  }

  // 空状态组件
  const EmptyState = () => (
    <div className={styles.emptyState}>
      <span className={styles.emptyIcon}>📭</span>
      <p className={styles.emptyText}>暂无相关资讯</p>
      <p className={styles.emptySubtext}>请稍后再来查看</p>
    </div>
  )

  if (newsItems.length === 0) {
    return <EmptyState />
  }

  // 根据显示模式渲染不同的布局
  switch (displayMode) {
    case 'uniform':
      return renderUniformLayout()
    case 'grid':
      return renderGridLayout()
    case 'mixed':
    default:
      return renderMixedLayout()
  }
}

export default NewsList