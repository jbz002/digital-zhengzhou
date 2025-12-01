import React, { useState } from 'react'
import { ImageSizes } from '@utils/randomImage'
import styles from '@styles/components/CulturePage/ReadingClub.module.css'

interface BookItem {
  id: string
  title: string
  author: string
  cover: string
  category: string
  rating: number
  participants: number
  description: string
  meetingDate: string
  meetingLocation: string
}

const ReadingClub: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const books: BookItem[] = [
    {
      id: 'book-1',
      title: '郑州历史漫谈',
      author: '张文博',
      cover: 'zhengzhou-history',
      category: '历史',
      rating: 4.8,
      participants: 156,
      description: '深入了解郑州三千年历史变迁，从商都到现代都市的发展历程',
      meetingDate: '2024-12-15',
      meetingLocation: '郑州图书馆'
    },
    {
      id: 'book-2',
      title: '黄河文明之光',
      author: '李明华',
      cover: 'yellow-river-civilization',
      category: '文化',
      rating: 4.9,
      participants: 203,
      description: '探索黄河文明的起源与发展，感受母亲河的文化魅力',
      meetingDate: '2024-12-20',
      meetingLocation: '河南省博物院'
    },
    {
      id: 'book-3',
      title: '当代诗歌赏析',
      author: '王晓雯',
      cover: 'modern-poetry',
      category: '文学',
      rating: 4.7,
      participants: 89,
      description: '品读当代优秀诗歌作品，提升文学鉴赏能力',
      meetingDate: '2024-12-18',
      meetingLocation: '城市书房'
    },
    {
      id: 'book-4',
      title: '科技创新与城市发展',
      author: '陈建国',
      cover: 'tech-innovation',
      category: '科技',
      rating: 4.6,
      participants: 134,
      description: '探讨科技创新对城市发展的推动作用',
      meetingDate: '2024-12-22',
      meetingLocation: '科技馆咖啡厅'
    },
    {
      id: 'book-5',
      title: '中原美食文化',
      author: '赵美玲',
      cover: 'central-plains-cuisine',
      category: '美食',
      rating: 4.9,
      participants: 267,
      description: '品味中原美食文化，了解传统菜肴的历史典故',
      meetingDate: '2024-12-25',
      meetingLocation: '美食文化中心'
    },
    {
      id: 'book-6',
      title: '摄影艺术入门',
      author: '刘晓明',
      cover: 'photography-basics',
      category: '艺术',
      rating: 4.5,
      participants: 112,
      description: '学习摄影基础技巧，记录美好瞬间',
      meetingDate: '2024-12-28',
      meetingLocation: '艺术中心'
    }
  ]

  const categories = [
    { id: 'all', name: '全部', count: books.length },
    { id: '历史', name: '历史', count: 1 },
    { id: '文化', name: '文化', count: 1 },
    { id: '文学', name: '文学', count: 1 },
    { id: '科技', name: '科技', count: 1 },
    { id: '美食', name: '美食', count: 1 },
    { id: '艺术', name: '艺术', count: 1 }
  ]

  const filteredBooks = activeCategory === 'all'
    ? books
    : books.filter(book => book.category === activeCategory)

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    const emptyStars = 5 - Math.ceil(rating)

    return (
      <div className={styles.rating}>
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className={styles.star}>★</span>
        ))}
        {hasHalfStar && <span className={styles.starHalf}>★</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className={styles.starEmpty}>★</span>
        ))}
        <span className={styles.ratingValue}>{rating}</span>
      </div>
    )
  }

  return (
    <div className={styles.readingClub}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>同城读书会</h3>
        <p className={styles.sectionSubtitle}>与书友分享阅读心得，共同成长进步</p>
      </div>

      <div className={styles.categoryFilter}>
        <div className={styles.categories}>
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
      </div>

      <div className={styles.booksGrid}>
        {filteredBooks.map(book => (
          <div key={book.id} className={styles.bookCard}>
            <div className={styles.bookCover}>
              <img
                src={ImageSizes.medium(book.cover, 'reading-club')}
                alt={book.title}
                className={styles.coverImage}
              />
              <div className={styles.coverOverlay}>
                <button className={styles.joinBtn}>加入阅读</button>
              </div>
            </div>
            <div className={styles.bookInfo}>
              <div className={styles.bookHeader}>
                <h4 className={styles.bookTitle}>{book.title}</h4>
                <span className={styles.bookCategory}>{book.category}</span>
              </div>
              <p className={styles.bookAuthor}>作者：{book.author}</p>
              {renderStars(book.rating)}
              <p className={styles.bookDescription}>{book.description}</p>
              <div className={styles.meetingInfo}>
                <div className={styles.meetingItem}>
                  <span className={styles.meetingIcon}>📅</span>
                  <span className={styles.meetingText}>{book.meetingDate}</span>
                </div>
                <div className={styles.meetingItem}>
                  <span className={styles.meetingIcon}>📍</span>
                  <span className={styles.meetingText}>{book.meetingLocation}</span>
                </div>
              </div>
              <div className={styles.participants}>
                <span className={styles.participantsIcon}>👥</span>
                <span className={styles.participantsCount}>{book.participants}人参与</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.clubStats}>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>1,234</span>
          <span className={styles.statLabel}>活跃书友</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>89</span>
          <span className={styles.statLabel}>本月读书会</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>456</span>
          <span className={styles.statLabel}>精选图书</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>98%</span>
          <span className={styles.statLabel}>好评率</span>
        </div>
      </div>
    </div>
  )
}

export default ReadingClub