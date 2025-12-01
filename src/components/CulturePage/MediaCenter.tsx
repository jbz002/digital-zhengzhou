import React, { useState } from 'react'
import { ImageSizes } from '@utils/randomImage'
import styles from '@styles/components/CulturePage/MediaCenter.module.css'

interface MediaItem {
  id: string
  title: string
  description: string
  category: string
  publishDate: string
}

const MediaCenter: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const mediaItems: MediaItem[] = [
    {
      id: 'media-1',
      title: '郑州文化纪录片系列',
      description: '深入探索郑州三千年历史文化，从商都到现代都市的变迁之路',
      category: '纪录片',
      publishDate: '2024-11-28'
    },
    {
      id: 'media-2',
      title: '非遗传承人访谈',
      description: '对话郑州非物质文化遗产传承人，聆听匠心故事',
      category: '访谈',
      publishDate: '2024-11-27'
    },
    {
      id: 'media-3',
      title: '郑州音乐之声',
      description: '汇集郑州本土音乐人作品，展现城市音乐文化魅力',
      category: '音乐',
      publishDate: '2024-11-26'
    },
    {
      id: 'media-4',
      title: '城市影像志',
      description: '用镜头记录郑州城市发展变迁，留存珍贵历史瞬间',
      category: '影像',
      publishDate: '2024-11-25'
    }
  ]

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className={styles.mediaCenter}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>融媒中心</h3>
        <p className={styles.sectionSubtitle}>精选媒体内容，展现郑州文化魅力</p>
      </div>

      <div className={styles.carouselContainer}>
        <div className={styles.mainCarousel}>
          <div className={styles.mainSlide}>
            <div className={styles.mainImage}>
              <img
                src={ImageSizes.featured(mediaItems[activeIndex].id, 'media-center')}
                alt={mediaItems[activeIndex].title}
                className={styles.carouselImage}
              />
              <div className={styles.imageOverlay}>
                <div className={styles.overlayContent}>
                  <span className={styles.categoryBadge}>{mediaItems[activeIndex].category}</span>
                  <h4 className={styles.mediaTitle}>{mediaItems[activeIndex].title}</h4>
                  <p className={styles.mediaDescription}>{mediaItems[activeIndex].description}</p>
                  <span className={styles.publishDate}>{mediaItems[activeIndex].publishDate}</span>
                </div>
              </div>
            </div>
          </div>

          <button className={styles.carouselBtn + ' ' + styles.prevBtn} onClick={handlePrev}>
            ‹
          </button>
          <button className={styles.carouselBtn + ' ' + styles.nextBtn} onClick={handleNext}>
            ›
          </button>
        </div>

        <div className={styles.thumbnails}>
          {mediaItems.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.thumbnail} ${index === activeIndex ? styles.active : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={ImageSizes.grid(item.id, 'media-center-thumb')}
                alt={item.title}
                className={styles.thumbImage}
              />
              <div className={styles.thumbContent}>
                <span className={styles.thumbCategory}>{item.category}</span>
                <span className={styles.thumbTitle}>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.mediaGrid}>
        <h4 className={styles.gridTitle}>更多精彩内容</h4>
        <div className={styles.gridContainer}>
          {mediaItems.slice(1, 5).map((item) => (
            <div key={item.id} className={styles.mediaCard}>
              <div className={styles.cardImage}>
                <img
                  src={ImageSizes.medium(item.id, 'media-center-card')}
                  alt={item.title}
                  className={styles.cardImageImg}
                />
                <div className={styles.playButton}>▶</div>
              </div>
              <div className={styles.cardContent}>
                <span className={styles.cardCategory}>{item.category}</span>
                <h5 className={styles.cardTitle}>{item.title}</h5>
                <p className={styles.cardDescription}>{item.description}</p>
                <span className={styles.cardDate}>{item.publishDate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MediaCenter