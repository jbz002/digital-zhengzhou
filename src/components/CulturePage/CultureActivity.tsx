import React, { useState } from 'react'
import { ImageSizes } from '@utils/randomImage'
import styles from '@styles/components/CulturePage/CultureActivity.module.css'

interface Activity {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  organizer: string
  category: string
  image: string
  price: string
  status: 'upcoming' | 'ongoing' | 'completed'
  participants: number
  maxParticipants: number
  tags: string[]
}

const CultureActivity: React.FC = () => {
  const [activeStatus, setActiveStatus] = useState('all')
  const [selectedMonth, setSelectedMonth] = useState('2024-12')

  const activities: Activity[] = [
    {
      id: 'activity-1',
      title: '郑州读书节开幕式',
      description: '全市范围的读书推广活动，邀请知名作家进行读书分享，现场还会有图书展览和文化表演。',
      date: '2024-12-15',
      time: '09:00-17:00',
      location: '郑州国际会展中心',
      organizer: '郑州市文广旅局',
      category: '文化节日',
      image: 'reading-festival',
      price: '免费',
      status: 'upcoming',
      participants: 2340,
      maxParticipants: 5000,
      tags: ['读书推广', '作家见面', '文化表演']
    },
    {
      id: 'activity-2',
      title: '非遗文化展演周',
      description: '展示郑州非物质文化遗产，包括传统技艺表演、手工艺品展览和非遗文化讲座。',
      date: '2024-12-20-2024-12-27',
      time: '10:00-20:00',
      location: '郑州文化馆',
      organizer: '郑州市非遗保护中心',
      category: '非遗文化',
      image: 'heritage-show',
      price: '免费',
      status: 'upcoming',
      participants: 1567,
      maxParticipants: 3000,
      tags: ['非物质文化遗产', '传统技艺', '文化传承']
    },
    {
      id: 'activity-3',
      title: '郑州青年艺术展',
      description: '展示郑州青年艺术家的创作成果，包括绘画、雕塑、摄影等多种艺术形式。',
      date: '2024-12-10-2024-12-25',
      time: '09:00-18:00',
      location: '郑州美术馆',
      organizer: '郑州市美术家协会',
      category: '艺术展览',
      image: 'youth-art-exhibition',
      price: '30元',
      status: 'ongoing',
      participants: 892,
      maxParticipants: 2000,
      tags: ['青年艺术', '美术展览', '文化交流']
    },
    {
      id: 'activity-4',
      title: '古典音乐会',
      description: '著名交响乐团演奏古典音乐名作，为市民带来高品质的音乐享受。',
      date: '2024-12-22',
      time: '19:30-21:30',
      location: '郑州大剧院',
      organizer: '郑州大剧院',
      category: '音乐表演',
      image: 'classical-concert',
      price: '120-580元',
      status: 'upcoming',
      participants: 678,
      maxParticipants: 1200,
      tags: ['古典音乐', '交响乐团', '高雅艺术']
    },
    {
      id: 'activity-5',
      title: '传统文化讲座',
      description: '知名学者讲授中原文化的精髓，深入了解郑州的历史文化底蕴。',
      date: '2024-12-18',
      time: '14:00-16:00',
      location: '郑州图书馆报告厅',
      organizer: '郑州图书馆',
      category: '文化讲座',
      image: 'culture-lecture',
      price: '免费',
      status: 'upcoming',
      participants: 234,
      maxParticipants: 300,
      tags: ['文化讲座', '中原文化', '学术交流']
    },
    {
      id: 'activity-6',
      title: '摄影艺术工作坊',
      description: '专业摄影师现场指导，学习摄影技巧，进行实践拍摄活动。',
      date: '2024-12-05',
      time: '09:00-17:00',
      location: '黄河风景名胜区',
      organizer: '郑州市摄影家协会',
      category: '艺术工作坊',
      image: 'photography-workshop',
      price: '280元',
      status: 'completed',
      participants: 45,
      maxParticipants: 50,
      tags: ['摄影艺术', '户外拍摄', '技巧学习']
    }
  ]

  const statusFilters = [
    { id: 'all', name: '全部活动', count: activities.length },
    { id: 'upcoming', name: '即将开始', count: activities.filter(a => a.status === 'upcoming').length },
    { id: 'ongoing', name: '进行中', count: activities.filter(a => a.status === 'ongoing').length },
    { id: 'completed', name: '已结束', count: activities.filter(a => a.status === 'completed').length }
  ]

  const months = [
    { id: '2024-12', name: '2024年12月' },
    { id: '2025-01', name: '2025年1月' }
  ]

  const filteredActivities = activities.filter(activity => {
    const statusMatch = activeStatus === 'all' || activity.status === activeStatus
    const monthMatch = activity.date.startsWith(selectedMonth)
    return statusMatch && monthMatch
  })

  const getStatusText = (status: string) => {
    switch (status) {
      case 'upcoming': return '即将开始'
      case 'ongoing': return '进行中'
      case 'completed': return '已结束'
      default: return '未知'
    }
  }

  const getStatusClass = (status: string) => {
    return styles[status] || ''
  }

  return (
    <div className={styles.cultureActivity}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>文化活动</h3>
        <p className={styles.sectionSubtitle}>丰富多彩的文化活动，丰富市民精神文化生活</p>
      </div>

      {/* 筛选器 */}
      <div className={styles.filters}>
        <div className={styles.statusFilter}>
          {statusFilters.map(filter => (
            <button
              key={filter.id}
              className={`${styles.filterBtn} ${activeStatus === filter.id ? styles.active : ''}`}
              onClick={() => setActiveStatus(filter.id)}
            >
              {filter.name}
              <span className={styles.filterCount}>{filter.count}</span>
            </button>
          ))}
        </div>
        <div className={styles.monthFilter}>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className={styles.monthSelect}
          >
            {months.map(month => (
              <option key={month.id} value={month.id}>
                {month.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 活动时间轴 */}
      <div className={styles.activitiesTimeline}>
        <div className={styles.timelineHeader}>
          <h4 className={styles.timelineTitle}>活动安排</h4>
          <div className={styles.timelineLegend}>
            <div className={styles.legendItem}>
              <span className={`${styles.legendDot} ${styles.upcoming}`}></span>
              <span>即将开始</span>
            </div>
            <div className={styles.legendItem}>
              <span className={`${styles.legendDot} ${styles.ongoing}`}></span>
              <span>进行中</span>
            </div>
            <div className={styles.legendItem}>
              <span className={`${styles.legendDot} ${styles.completed}`}></span>
              <span>已结束</span>
            </div>
          </div>
        </div>

        <div className={styles.timeline}>
          {filteredActivities.map((activity, index) => (
            <div key={activity.id} className={styles.timelineItem}>
              <div className={`${styles.timelineDot} ${getStatusClass(activity.status)}`}></div>
              <div className={styles.timelineContent}>
                <div className={styles.activityCard}>
                  <div className={styles.activityImage}>
                    <img
                      src={ImageSizes.medium(activity.image, 'culture-activity')}
                      alt={activity.title}
                      className={styles.activityImg}
                    />
                    <span className={`${styles.statusBadge} ${getStatusClass(activity.status)}`}>
                      {getStatusText(activity.status)}
                    </span>
                  </div>
                  <div className={styles.activityContent}>
                    <div className={styles.activityHeader}>
                      <h5 className={styles.activityTitle}>{activity.title}</h5>
                      <span className={styles.activityCategory}>{activity.category}</span>
                    </div>
                    <p className={styles.activityDescription}>{activity.description}</p>
                    <div className={styles.activityDetails}>
                      <div className={styles.detailItem}>
                        <span className={styles.detailIcon}>📅</span>
                        <span className={styles.detailText}>{activity.date}</span>
                      </div>
                      <div className={styles.detailItem}>
                        <span className={styles.detailIcon}>🕐</span>
                        <span className={styles.detailText}>{activity.time}</span>
                      </div>
                      <div className={styles.detailItem}>
                        <span className={styles.detailIcon}>📍</span>
                        <span className={styles.detailText}>{activity.location}</span>
                      </div>
                      <div className={styles.detailItem}>
                        <span className={styles.detailIcon}>💰</span>
                        <span className={styles.detailText}>{activity.price}</span>
                      </div>
                    </div>
                    <div className={styles.activityFooter}>
                      <div className={styles.participants}>
                        <span className={styles.participantsIcon}>👥</span>
                        <span className={styles.participantsText}>
                          {activity.participants}/{activity.maxParticipants}人
                        </span>
                      </div>
                      <div className={styles.activityTags}>
                        {activity.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span key={tagIndex} className={styles.tag}>{tag}</span>
                        ))}
                      </div>
                      <button className={styles.registerBtn}>
                        {activity.status === 'completed' ? '查看详情' : '立即报名'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 活动统计 */}
      <div className={styles.activityStats}>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>156</span>
          <span className={styles.statLabel}>年度活动</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>28.5K</span>
          <span className={styles.statLabel}>参与人次</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>45</span>
          <span className={styles.statLabel}>合作机构</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>95%</span>
          <span className={styles.statLabel}>满意度</span>
        </div>
      </div>
    </div>
  )
}

export default CultureActivity