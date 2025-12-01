import React, { useState } from 'react'
import { ImageSizes } from '@utils/randomImage'
import styles from '@styles/components/CulturePage/NationReading.module.css'

interface ArticleItem {
  id: string
  title: string
  excerpt: string
  author: string
  category: string
  publishDate: string
  readTime: string
  tags: string[]
  image: string
  featured?: boolean
  likes: number
  views: number
}

const NationReading: React.FC = () => {
  const [activeTab, setActiveTab] = useState('featured')

  const articles: ArticleItem[] = [
    {
      id: 'article-1',
      title: '黄河文明与郑州城市精神的深度对话',
      excerpt: '郑州作为黄河文明的重要发祥地，其城市精神深深植根于黄河文化的沃土之中。从古代商都到现代都市，郑州始终保持着包容、创新、坚韧的城市品格...',
      author: '李文博',
      category: '文化研究',
      publishDate: '2024-11-30',
      readTime: '8分钟',
      tags: ['黄河文明', '城市精神', '文化传承'],
      image: 'yellow-river-culture',
      featured: true,
      likes: 342,
      views: 5680
    },
    {
      id: 'article-2',
      title: '数字时代的全民阅读新生态',
      excerpt: '随着数字化浪潮的席卷，传统阅读方式正在发生深刻变革。如何构建适应新时代需求的全民阅读生态，成为文化工作者面临的重要课题...',
      author: '张明华',
      category: '数字文化',
      publishDate: '2024-11-29',
      readTime: '6分钟',
      tags: ['数字阅读', '文化生态', '创新模式'],
      image: 'digital-reading',
      featured: true,
      likes: 256,
      views: 4230
    },
    {
      id: 'article-3',
      title: '古都郑州的历史文脉保护与传承',
      excerpt: '郑州拥有三千多年的建城史，是中国八大古都之一。在城市现代化进程中，如何保护好历史文脉，传承文化基因，成为城市发展的重要议题...',
      author: '王建国',
      category: '历史保护',
      publishDate: '2024-11-28',
      readTime: '10分钟',
      tags: ['古都保护', '文脉传承', '城市发展'],
      image: 'ancient-capital',
      likes: 189,
      views: 3120
    },
    {
      id: 'article-4',
      title: '社区图书馆：城市文化的新据点',
      excerpt: '社区图书馆作为全民阅读的重要阵地，正在成为城市文化建设的新亮点。通过创新服务模式，社区图书馆正在为市民提供更加便捷的文化服务...',
      author: '赵美玲',
      category: '公共文化',
      publishDate: '2024-11-27',
      readTime: '5分钟',
      tags: ['社区图书馆', '公共文化', '服务创新'],
      image: 'community-library',
      likes: 145,
      views: 2380
    },
    {
      id: 'article-5',
      title: '青少年阅读习惯培养策略研究',
      excerpt: '培养青少年良好的阅读习惯，是提升全民文化素养的重要基础。通过家庭、学校、社会的多方协作，构建青少年阅读的良好环境...',
      author: '陈晓明',
      category: '教育文化',
      publishDate: '2024-11-26',
      readTime: '7分钟',
      tags: ['青少年教育', '阅读习惯', '家校合作'],
      image: 'youth-reading',
      likes: 198,
      views: 3560
    },
    {
      id: 'article-6',
      title: '乡村振兴背景下的农家书屋建设',
      excerpt: '农家书屋作为农村文化建设的重要载体，在乡村振兴战略中发挥着重要作用。通过数字化改造和服务升级，农家书屋正在焕发新的活力...',
      author: '刘志强',
      category: '乡村文化',
      publishDate: '2024-11-25',
      readTime: '6分钟',
      tags: ['乡村振兴', '农家书屋', '文化服务'],
      image: 'rural-library',
      likes: 134,
      views: 2180
    }
  ]

  const tabs = [
    { id: 'featured', name: '精选推荐', count: 3 },
    { id: 'research', name: '文化研究', count: 2 },
    { id: 'education', name: '阅读教育', count: 3 },
    { id: 'digital', name: '数字阅读', count: 1 }
  ]

  const getFilteredArticles = () => {
    const featuredArticles = articles.filter(article => article.featured)
    switch (activeTab) {
      case 'featured':
        return featuredArticles
      case 'research':
        return articles.filter(article => article.category === '文化研究' || article.category === '历史保护')
      case 'education':
        return articles.filter(article => article.category === '教育文化' || article.category === '公共文化')
      case 'digital':
        return articles.filter(article => article.category === '数字文化')
      default:
        return featuredArticles
    }
  }

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k'
    }
    return num.toString()
  }

  return (
    <div className={styles.nationReading}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>全民阅读</h3>
        <p className={styles.sectionSubtitle}>推广全民阅读，建设书香郑州</p>
      </div>

      <div className={styles.contentLayout}>
        {/* 左侧主要内容 */}
        <div className={styles.mainContent}>
          {/* 标签页切换 */}
          <div className={styles.tabNavigation}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`${styles.tabBtn} ${activeTab === tab.id ? styles.active : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.name}
                <span className={styles.tabCount}>{tab.count}</span>
              </button>
            ))}
          </div>

          {/* 文章列表 */}
          <div className={styles.articlesList}>
            {getFilteredArticles().map((article, index) => (
              <div key={article.id} className={styles.articleCard}>
                <div className={styles.articleImage}>
                  <img
                    src={ImageSizes.medium(article.image, 'nation-reading')}
                    alt={article.title}
                    className={styles.articleImg}
                  />
                  <div className={styles.imageOverlay}>
                    <span className={styles.readTime}>{article.readTime}</span>
                  </div>
                </div>
                <div className={styles.articleContent}>
                  <div className={styles.articleMeta}>
                    <span className={styles.category}>{article.category}</span>
                    <span className={styles.publishDate}>{article.publishDate}</span>
                    <span className={styles.author}>作者：{article.author}</span>
                  </div>
                  <h4 className={styles.articleTitle}>{article.title}</h4>
                  <p className={styles.articleExcerpt}>{article.excerpt}</p>
                  <div className={styles.articleTags}>
                    {article.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className={styles.tag}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className={styles.articleStats}>
                    <div className={styles.stat}>
                      <span className={styles.statIcon}>👁</span>
                      <span className={styles.statValue}>{formatNumber(article.views)}</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statIcon}>❤️</span>
                      <span className={styles.statValue}>{formatNumber(article.likes)}</span>
                    </div>
                    <button className={styles.readMoreBtn}>
                      阅读全文 →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 右侧边栏 */}
        <div className={styles.sidebar}>
          {/* 热门文章 */}
          <div className={styles.sidebarSection}>
            <h4 className={styles.sidebarTitle}>热门文章</h4>
            <div className={styles.hotArticles}>
              {articles.slice(0, 4).map((article, index) => (
                <div key={article.id} className={styles.hotArticle}>
                  <span className={styles.hotRank}>{index + 1}</span>
                  <div className={styles.hotContent}>
                    <h5 className={styles.hotTitle}>{article.title}</h5>
                    <span className={styles.hotMeta}>{article.views} 阅读</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 阅读统计 */}
          <div className={styles.sidebarSection}>
            <h4 className={styles.sidebarTitle}>本月阅读统计</h4>
            <div className={styles.readingStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>12.5K</span>
                <span className={styles.statLabel}>总阅读量</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>856</span>
                <span className={styles.statLabel}>活跃读者</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>23</span>
                <span className={styles.statLabel}>推荐文章</span>
              </div>
            </div>
          </div>

          {/* 阅读活动 */}
          <div className={styles.sidebarSection}>
            <h4 className={styles.sidebarTitle}>近期活动</h4>
            <div className={styles.activities}>
              <div className={styles.activity}>
                <div className={styles.activityDate}>
                  <span className={styles.activityDay}>15</span>
                  <span className={styles.activityMonth}>12月</span>
                </div>
                <div className={styles.activityInfo}>
                  <h5 className={styles.activityTitle}>郑州读书节</h5>
                  <p className={styles.activityDesc}>全市范围阅读推广活动</p>
                </div>
              </div>
              <div className={styles.activity}>
                <div className={styles.activityDate}>
                  <span className={styles.activityDay}>20</span>
                  <span className={styles.activityMonth}>12月</span>
                </div>
                <div className={styles.activityInfo}>
                  <h5 className={styles.activityTitle}>作家见面会</h5>
                  <p className={styles.activityDesc}>与知名作家面对面交流</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NationReading