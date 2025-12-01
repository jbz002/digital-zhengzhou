import React, { useState } from 'react'
import { ImageSizes } from '@utils/randomImage'
import styles from '@styles/components/CulturePage/CityCard.module.css'

interface CityInfo {
  id: string
  title: string
  description: string
  image: string
  category: string
  facts: string[]
}

const CityCard: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  const cityInfos: CityInfo[] = [
    {
      id: 'city-info-1',
      title: '商都郑州 · 三千年古都',
      description: '郑州作为中国八大古都之一，拥有三千多年的建城史。从商代都城到现代都市，郑州见证了中国历史的变迁与发展。',
      image: 'ancient-capital-zhengzhou',
      category: '古都印象',
      facts: [
        '建城历史：3600余年',
        '商都遗址：世界文化遗产',
        '人口规模：超1200万',
        'GDP总量：超1.3万亿元'
      ]
    },
    {
      id: 'city-info-2',
      title: '交通枢纽 · 九州腹地',
      description: '郑州位于中国地理中心，是全国重要的综合交通枢纽。米字形高铁网、航空港、国际陆港构筑了现代化的立体交通体系。',
      image: 'transportation-hub',
      category: '交通优势',
      facts: [
        '高铁枢纽：米字形网络',
        '航空港：4F级国际机场',
        '高速公路：十纵十横',
        '地铁网络：9条线路运营'
      ]
    },
    {
      id: 'city-info-3',
      title: '黄河文明 · 母亲河畔',
      description: '郑州地处黄河之滨，是黄河文明的重要发祥地。黄河文化的深厚底蕴孕育了郑州独特的城市品格和文化魅力。',
      image: 'yellow-river-civilization',
      category: '黄河文化',
      facts: [
        '黄河长度：5464公里',
        '文化遗址：多处世界遗产',
        '生态保护：黄河流域治理',
        '旅游发展：黄河文化带'
      ]
    }
  ]

  const cityFeatures = [
    {
      icon: '🏛️',
      title: '历史文化',
      description: '3600年建城史，商都文化发源地',
      count: '15处'
    },
    {
      icon: '🚄',
      title: '交通便利',
      description: '米字形高铁，航空港国际枢纽',
      count: '8方向'
    },
    {
      icon: '🏭',
      title: '经济实力',
      description: '国家中心城市，万亿GDP俱乐部',
      count: '1.3万亿+'
    },
    {
      icon: '🎓',
      title: '教育资源',
      description: '多所高等院校，人才聚集地',
      count: '60+所'
    },
    {
      icon: '🌸',
      title: '生态环境',
      description: '国家森林城市，绿化覆盖率40%',
      count: '40%+'
    },
    {
      icon: '🍜',
      title: '美食文化',
      description: '中原美食代表，豫菜发源地',
      count: '100+种'
    }
  ]

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? cityInfos.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveSlide((prev) => (prev === cityInfos.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className={styles.cityCard}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>城市名片</h3>
        <p className={styles.sectionSubtitle}>展示郑州城市形象，传播中原文化魅力</p>
      </div>

      {/* 主要展示区 */}
      <div className={styles.mainShowcase}>
        <div className={styles.showcaseCarousel}>
          <div className={styles.mainSlide}>
            <div className={styles.slideImage}>
              <img
                src={ImageSizes.featured(cityInfos[activeSlide].image, 'city-card')}
                alt={cityInfos[activeSlide].title}
                className={styles.carouselImage}
              />
              <div className={styles.imageOverlay}>
                <div className={styles.overlayContent}>
                  <span className={styles.categoryBadge}>{cityInfos[activeSlide].category}</span>
                  <h4 className={styles.slideTitle}>{cityInfos[activeSlide].title}</h4>
                  <p className={styles.slideDescription}>{cityInfos[activeSlide].description}</p>
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

        {/* 轮播指示器 */}
        <div className={styles.carouselIndicators}>
          {cityInfos.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === activeSlide ? styles.active : ''}`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* 城市数据 */}
      <div className={styles.cityFacts}>
        <h4 className={styles.factsTitle}>郑州概况</h4>
        <div className={styles.factsGrid}>
          {cityInfos[activeSlide].facts.map((fact, index) => (
            <div key={index} className={styles.factItem}>
              <span className={styles.factText}>{fact}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 城市特色 */}
      <div className={styles.cityFeatures}>
        <h4 className={styles.featuresTitle}>城市特色</h4>
        <div className={styles.featuresGrid}>
          {cityFeatures.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <span className={styles.iconEmoji}>{feature.icon}</span>
              </div>
              <h5 className={styles.featureTitle}>{feature.title}</h5>
              <p className={styles.featureDescription}>{feature.description}</p>
              <span className={styles.featureCount}>{feature.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 城市荣誉 */}
      <div className={styles.cityHonors}>
        <h4 className={styles.honorsTitle}>城市荣誉</h4>
        <div className={styles.honorsList}>
          {[
            '国家中心城市',
            '中国历史文化名城',
            '国家森林城市',
            '中国优秀旅游城市',
            '国家卫生城市',
            '全国文明城市'
          ].map((honor, index) => (
            <div key={index} className={styles.honorBadge}>
              🏆 {honor}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CityCard