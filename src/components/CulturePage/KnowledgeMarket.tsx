import React, { useState } from 'react'
import { ImageSizes } from '@utils/randomImage'
import styles from '@styles/components/CulturePage/KnowledgeMarket.module.css'

interface KnowledgeProduct {
  id: string
  title: string
  description: string
  price: number
  originalPrice?: number
  instructor: string
  rating: number
  students: number
  duration: string
  level: string
  category: string
  tags: string[]
  image: string
  hot?: boolean
  new?: boolean
}

const KnowledgeMarket: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [sortBy, setSortBy] = useState('popular')

  const products: KnowledgeProduct[] = [
    {
      id: 'course-1',
      title: '郑州历史文化深度解读',
      description: '系统学习郑州三千年的历史文化，从商都到现代都市的完整脉络',
      price: 199,
      originalPrice: 299,
      instructor: '李文博教授',
      rating: 4.9,
      students: 3456,
      duration: '12课时',
      level: '入门级',
      category: '历史文化',
      tags: ['郑州历史', '商都文化', '中原文明'],
      image: 'zhengzhou-history-course',
      hot: true
    },
    {
      id: 'course-2',
      title: '数字摄影实战技巧',
      description: '从构图到后期，全面掌握数字摄影的核心技术和艺术表现',
      price: 299,
      originalPrice: 399,
      instructor: '张明华摄影师',
      rating: 4.8,
      students: 2189,
      duration: '20课时',
      level: '进阶级',
      category: '艺术技能',
      tags: ['摄影技巧', '后期处理', '艺术创作'],
      image: 'photography-course',
      hot: true
    },
    {
      id: 'course-3',
      title: '中原美食制作工艺',
      description: '学习正宗中原美食的制作方法，传承传统烹饪技艺',
      price: 159,
      originalPrice: 199,
      instructor: '王大厨',
      rating: 4.9,
      students: 1876,
      duration: '8课时',
      level: '入门级',
      category: '生活技能',
      tags: ['中原美食', '烹饪技巧', '传统文化'],
      image: 'cooking-course',
      new: true
    },
    {
      id: 'course-4',
      title: '创新创业思维训练',
      description: '培养创新思维，掌握创业方法论，在实践中提升创业能力',
      price: 399,
      originalPrice: 599,
      instructor: '陈创业导师',
      rating: 4.7,
      students: 1234,
      duration: '16课时',
      level: '进阶级',
      category: '商业管理',
      tags: ['创新思维', '创业方法', '商业策划'],
      image: 'innovation-course'
    },
    {
      id: 'course-5',
      title: '古典诗词鉴赏与创作',
      description: '深入理解古典诗词的艺术魅力，学习诗词创作的基本技巧',
      price: 179,
      originalPrice: 259,
      instructor: '赵诗人',
      rating: 4.8,
      students: 987,
      duration: '10课时',
      level: '进阶级',
      category: '文学艺术',
      tags: ['古典诗词', '文学鉴赏', '创作技巧'],
      image: 'poetry-course'
    },
    {
      id: 'course-6',
      title: '心理健康与情绪管理',
      description: '学习科学的心理学知识，掌握情绪管理和压力调节的有效方法',
      price: 229,
      originalPrice: 329,
      instructor: '孙心理咨询师',
      rating: 4.9,
      students: 2567,
      duration: '14课时',
      level: '入门级',
      category: '身心健康',
      tags: ['心理健康', '情绪管理', '压力调节'],
      image: 'psychology-course'
    }
  ]

  const categories = [
    { id: 'all', name: '全部课程', count: products.length },
    { id: '历史文化', name: '历史文化', count: 1 },
    { id: '艺术技能', name: '艺术技能', count: 1 },
    { id: '生活技能', name: '生活技能', count: 1 },
    { id: '商业管理', name: '商业管理', count: 1 },
    { id: '文学艺术', name: '文学艺术', count: 1 },
    { id: '身心健康', name: '身心健康', count: 1 }
  ]

  const sortOptions = [
    { id: 'popular', name: '最受欢迎' },
    { id: 'rating', name: '评分最高' },
    { id: 'price-low', name: '价格最低' },
    { id: 'price-high', name: '价格最高' },
    { id: 'newest', name: '最新上架' }
  ]

  const getFilteredAndSortedProducts = () => {
    let filtered = activeCategory === 'all'
      ? products
      : products.filter(product => product.category === activeCategory)

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'popular':
          return b.students - a.students
        case 'newest':
          return b.new ? 1 : -1
        default:
          return 0
      }
    })
  }

  const renderStars = (rating: number) => {
    return (
      <div className={styles.rating}>
        <span className={styles.starRating}>{rating.toFixed(1)}</span>
        <div className={styles.stars}>
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`${styles.star} ${i < Math.floor(rating) ? styles.filled : ''}`}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    )
  }

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k'
    }
    return num.toString()
  }

  return (
    <div className={styles.knowledgeMarket}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>知识超市</h3>
        <p className={styles.sectionSubtitle}>精选优质课程，助力个人成长</p>
      </div>

      {/* 筛选和排序 */}
      <div className={styles.filters}>
        <div className={styles.categoryFilter}>
          {categories.map(category => (
            <button
              key={category.id}
              className={`${styles.categoryBtn} ${activeCategory === category.id ? styles.active : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
              <span className={styles.categoryCount}>{category.count}</span>
            </button>
          ))}
        </div>
        <div className={styles.sortFilter}>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className={styles.sortSelect}
          >
            {sortOptions.map(option => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 课程网格 */}
      <div className={styles.productsGrid}>
        {getFilteredAndSortedProducts().map(product => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.productImage}>
              <img
                src={ImageSizes.grid(product.image, 'knowledge-market')}
                alt={product.title}
                className={styles.courseImage}
              />
              {product.hot && <span className={styles.hotBadge}>🔥 热门</span>}
              {product.new && <span className={styles.newBadge}>🆕 新课</span>}
              <div className={styles.levelBadge}>{product.level}</div>
            </div>
            <div className={styles.productContent}>
              <h4 className={styles.productTitle}>{product.title}</h4>
              <p className={styles.productDescription}>{product.description}</p>
              <div className={styles.productMeta}>
                <span className={styles.instructor}>讲师：{product.instructor}</span>
                <span className={styles.duration}>{product.duration}</span>
              </div>
              {renderStars(product.rating)}
              <div className={styles.productTags}>
                {product.tags.slice(0, 2).map((tag, index) => (
                  <span key={index} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <div className={styles.productFooter}>
                <div className={styles.priceSection}>
                  <span className={styles.currentPrice}>¥{product.price}</span>
                  {product.originalPrice && (
                    <span className={styles.originalPrice}>¥{product.originalPrice}</span>
                  )}
                </div>
                <div className={styles.studentsInfo}>
                  <span className={styles.studentsCount}>{formatNumber(product.students)}人学习</span>
                </div>
              </div>
              <button className={styles.enrollBtn}>立即报名</button>
            </div>
          </div>
        ))}
      </div>

      {/* 市场统计 */}
      <div className={styles.marketStats}>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>15,234</span>
          <span className={styles.statLabel}>累计学员</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>89</span>
          <span className={styles.statLabel}>精品课程</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>4.8</span>
          <span className={styles.statLabel}>平均评分</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>98%</span>
          <span className={styles.statLabel}>满意度</span>
        </div>
      </div>
    </div>
  )
}

export default KnowledgeMarket