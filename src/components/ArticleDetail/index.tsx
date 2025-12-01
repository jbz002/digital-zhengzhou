import React, { useState, useEffect } from 'react'
import { NewsItem } from '../../types/news'
import { getNewsDetail } from '../../data/newsDetailData'
import { getRandomImageUrl, handleImageError, imageStyles } from '../../utils/randomImage'
import styles from '../../styles/components/ArticleDetail.module.css'

interface ArticleDetailProps {
  articleId: string
  onBack: () => void
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ articleId, onBack }) => {
  const [article, setArticle] = useState<NewsItem | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true)
        const articleData = await getNewsDetail(articleId)
        setArticle(articleData)
        setError(null)
      } catch (err) {
        setError('文章详情加载失败')
        console.error('Failed to load article:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchArticle()
  }, [articleId])

  const handleLike = () => {
    if (article) {
      setArticle({
        ...article,
        likeCount: (article.likeCount || 0) + 1
      })
    }
  }

  const handleShare = () => {
    if (article) {
      // 复制链接到剪贴板
      const url = `${window.location.origin}/article/${article.id}`
      if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
          alert('链接已复制到剪贴板')
        }).catch(() => {
          alert('复制失败，请手动复制链接')
        })
      } else {
        // 兼容旧浏览器
        const textArea = document.createElement('textarea')
        textArea.value = url
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        try {
          document.execCommand('copy')
          alert('链接已复制到剪贴板')
        } catch (err) {
          alert('复制失败，请手动复制链接')
        }
        document.body.removeChild(textArea)
      }
    }
  }

  if (loading) {
    return (
      <div className={styles.articleDetail}>
        <div className={styles.loadingContainer}>
          <div className={styles.loadingSpinner}></div>
          <p>正在加载文章详情...</p>
        </div>
      </div>
    )
  }

  if (error || !article) {
    return (
      <div className={styles.articleDetail}>
        <div className={styles.errorContainer}>
          <p>{error || '文章不存在'}</p>
          <button className={styles.backButton} onClick={onBack}>
            返回上一页
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.articleDetail}>
      {/* 顶部导航栏 */}
      <div className={styles.articleHeader}>
        <button className={styles.backButton} onClick={onBack}>
          ← 返回
        </button>
        <div className={styles.articleActions}>
          <button className={styles.actionButton} onClick={handleLike}>
            ❤️ {article.likeCount || 0}
          </button>
          <button className={styles.actionButton} onClick={handleShare}>
            📤 分享
          </button>
        </div>
      </div>

      {/* 文章内容 */}
      <article className={styles.articleContent}>
        {/* 头图 */}
        {article.featuredImage && (
          <div className={styles.featuredImage}>
            <img
              src={getRandomImageUrl(800, 400, article.id)}
              alt={article.title}
              style={imageStyles}
              onError={handleImageError}
            />
          </div>
        )}

        {/* 文章标题 */}
        <h1 className={styles.articleTitle}>{article.title}</h1>

        {/* 文章元信息 */}
        <div className={styles.articleMeta}>
          <div className={styles.metaLeft}>
            {article.author && (
              <span className={styles.author}>{article.author}</span>
            )}
            <span className={styles.publishTime}>{article.publishTime}</span>
            {article.location && (
              <span className={styles.location}>📍 {article.location}</span>
            )}
            {article.eventDate && (
              <span className={styles.eventDate}>📅 {article.eventDate}</span>
            )}
          </div>
          <div className={styles.metaRight}>
            <span className={styles.readCount}>👁 {article.readCount} 阅读</span>
          </div>
        </div>

        {/* 标签 */}
        {article.tags && article.tags.length > 0 && (
          <div className={styles.tags}>
            {article.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* 特殊信息展示 */}
        <div className={styles.specialInfo}>
          {article.price && (
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>💰 价格：</span>
              <span className={styles.infoValue}>{article.price}</span>
            </div>
          )}
          {article.discount && (
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>🎫 优惠：</span>
              <span className={styles.infoValue}>{article.discount}</span>
            </div>
          )}
          {article.rating && (
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>⭐ 评分：</span>
              <span className={styles.infoValue}>{article.rating}分</span>
            </div>
          )}
          {article.difficulty && (
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>📚 难度：</span>
              <span className={styles.infoValue}>
                {article.difficulty === 'easy' ? '入门级' :
                 article.difficulty === 'medium' ? '进阶级' : '专业级'}
              </span>
            </div>
          )}
          {article.duration && (
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>⏱️ 时长：</span>
              <span className={styles.infoValue}>{article.duration}</span>
            </div>
          )}
          {article.quote && (
            <div className={styles.quote}>
              💬 <em>{article.quote}</em>
            </div>
          )}
        </div>

        {/* 文章正文 */}
        <div className={styles.articleBody}>
          <div className={styles.summary}>
            <h3>内容摘要</h3>
            <p>{article.summary}</p>
          </div>

          {article.content && (
            <div className={styles.content}>
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>
          )}

          {/* 多图展示 */}
          {article.images && article.images.length > 0 && (
            <div className={styles.imageGallery}>
              <h3>相关图片</h3>
              <div className={styles.imageGrid}>
                {article.images.map((image, index) => (
                  <div key={index} className={styles.imageItem}>
                    <img
                      src={getRandomImageUrl(300, 200, `${article.id}-gallery-${index}`)}
                      alt={`相关图片 ${index + 1}`}
                      style={imageStyles}
                      onError={handleImageError}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 视频内容 */}
          {article.videoUrl && (
            <div className={styles.videoSection}>
              <h3>视频内容</h3>
              <div className={styles.videoContainer}>
                <video controls width="100%">
                  <source src={article.videoUrl} type="video/mp4" />
                  您的浏览器不支持视频播放
                </video>
              </div>
            </div>
          )}

          {/* 音频内容 */}
          {article.audioUrl && (
            <div className={styles.audioSection}>
              <h3>音频内容</h3>
              <div className={styles.audioContainer}>
                <audio controls>
                  <source src={article.audioUrl} type="audio/mpeg" />
                  您的浏览器不支持音频播放
                </audio>
              </div>
            </div>
          )}
        </div>

        {/* 文章底部信息 */}
        <div className={styles.articleFooter}>
          <div className={styles.footerMeta}>
            {article.isHot && <span className={`${styles.badge} ${styles.hot}`}>🔥 热门</span>}
            {article.isNew && <span className={`${styles.badge} ${styles.new}`}>🆕 新品</span>}
            {article.isExclusive && <span className={`${styles.badge} ${styles.exclusive}`}>⭐ 独家</span>}
          </div>
        </div>
      </article>
    </div>
  )
}

export default ArticleDetail