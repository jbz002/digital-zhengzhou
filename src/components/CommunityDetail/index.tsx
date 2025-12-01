import React, { useState } from 'react'
import { CommunityInfo } from '../../types/community'
import styles from '../../styles/components/CommunityDetail.module.css'

interface CommunityDetailProps {
  community?: CommunityInfo
  onBack?: () => void
}

// 公告数据类型
interface Announcement {
  id: string
  title: string
  content: string
  date: string
  category: '通知' | '活动' | '政策' | '公告'
}

// AI对话消息类型
interface AIMessage {
  id: string
  type: 'user' | 'ai'
  content: string
  timestamp: string
}

const CommunityDetail: React.FC<CommunityDetailProps> = ({
  community,
  onBack
}) => {
  const [activeTab, setActiveTab] = useState<'services' | 'shops' | 'convenience' | 'affairs'>('services')
  const [aiMessages, setAiMessages] = useState<AIMessage[]>([
    {
      id: '1',
      type: 'ai',
      content: '您好！我是社区AI百事通，有什么问题尽管问我。',
      timestamp: new Date().toLocaleString()
    }
  ])
  const [aiInput, setAiInput] = useState('')

  // 示例公告数据
  const announcements: Announcement[] = [
    {
      id: '1',
      title: '社区文化活动通知',
      content: '为丰富社区居民文化生活，本周六将在社区广场举办文艺演出活动，欢迎各位居民参加。',
      date: '2024-11-28',
      category: '活动'
    },
    {
      id: '2',
      title: '物业服务升级公告',
      content: '为进一步提升服务质量，物业将对小区门禁系统进行升级改造，施工期间请各位居民配合。',
      date: '2024-11-27',
      category: '通知'
    },
    {
      id: '3',
      title: '垃圾分类政策宣传',
      content: '根据市政府统一安排，社区将全面推行垃圾分类制度，请各位居民按要求分类投放垃圾。',
      date: '2024-11-26',
      category: '政策'
    },
    {
      id: '4',
      title: '社区停车管理新规定',
      content: '为规范小区停车秩序，社区将实施新的停车管理规定，请各位车主及时办理停车登记。',
      date: '2024-11-25',
      category: '公告'
    }
  ]

  // 功能按钮配置
  const functionButtons = [
    { id: 'committee', name: '居委会', icon: '🏛️', description: '社区居委会服务' },
    { id: 'property', name: '物业', icon: '🏘️', description: '物业管理服务' },
    { id: 'reading', name: '读书会', icon: '📚', description: '社区读书活动' },
    { id: 'ai', name: 'AI百事通', icon: '🤖', description: '智能问答服务' }
  ]

  // 标签页配置
  const tabs = [
    { id: 'services', name: '服务', icon: '🛠️' },
    { id: 'shops', name: '门店', icon: '🏪' },
    { id: 'convenience', name: '便民', icon: '🏪' },
    { id: 'affairs', name: '办事', icon: '📋' }
  ]

  // 示例服务数据
  const servicesData = {
    services: [
      { id: '1', name: '社区医疗服务', description: '基础医疗咨询和健康检查', phone: '0371-12345678' },
      { id: '2', name: '养老服务', description: '老年人日间照料和送餐服务', phone: '0371-87654321' },
      { id: '3', name: '儿童托管', description: '学龄前儿童看护和教育', phone: '0371-11223344' }
    ],
    shops: [
      { id: '1', name: '社区便利店', description: '日用品销售和代收快递', phone: '0371-55556666' },
      { id: '2', name: '社区药店', description: '药品销售和健康咨询', phone: '0371-77778888' },
      { id: '3', name: '社区生鲜店', description: '新鲜蔬菜水果和粮油销售', phone: '0371-99990000' }
    ],
    convenience: [
      { id: '1', name: '家政服务', description: '家庭清洁和保姆介绍', phone: '0371-33334444' },
      { id: '2', name: '维修服务', description: '水电维修和家电保养', phone: '0371-66667777' },
      { id: '3', name: '洗衣服务', description: '专业洗衣和烘干服务', phone: '0371-88889999' }
    ],
    affairs: [
      { id: '1', name: '户籍办理', description: '户籍相关业务咨询和办理', phone: '0371-22223333' },
      { id: '2', name: '社保服务', description: '社保查询和业务办理', phone: '0371-44445555' },
      { id: '3', name: '证照办理', description: '各类证明和证件办理', phone: '0371-66668888' }
    ]
  }

  const handleFunctionClick = (functionId: string) => {
    console.log('点击功能:', functionId)
    // 可以根据功能ID实现具体的跳转逻辑
  }

  const handleTabChange = (tabId: typeof activeTab) => {
    setActiveTab(tabId)
  }

  const handleSendMessage = () => {
    if (!aiInput.trim()) return

    const userMessage: AIMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: aiInput,
      timestamp: new Date().toLocaleString()
    }

    setAiMessages(prev => [...prev, userMessage])

    // 模拟AI回复
    setTimeout(() => {
      const aiResponse: AIMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: '收到您的问题，我会尽快为您解答。如需紧急帮助，请联系社区服务中心。',
        timestamp: new Date().toLocaleString()
      }
      setAiMessages(prev => [...prev, aiResponse])
    }, 1000)

    setAiInput('')
  }

  const getCategoryColor = (category: Announcement['category']) => {
    switch (category) {
      case '通知': return 'var(--primary-color)'
      case '活动': return 'var(--secondary-color)'
      case '政策': return 'var(--accent-color)'
      case '公告': return 'var(--text-secondary)'
      default: return 'var(--text-secondary)'
    }
  }

  const currentTabData = servicesData[activeTab] || []

  return (
    <div className={styles.communityDetail}>
      {/* 页面头部 */}
      <div className={styles.pageHeader}>
        <button className={styles.backButton} onClick={onBack}>
          ← 返回
        </button>
        <div className={styles.communityInfo}>
          <h1 className={styles.communityName}>
            {community?.name || '社区详情'}
          </h1>
          {community?.address && (
            <p className={styles.communityAddress}>
              📍 {community.address}
            </p>
          )}
          {community?.phone && (
            <p className={styles.communityPhone}>
              📞 {community.phone}
            </p>
          )}
          {community?.description && (
            <p className={styles.communityDescription}>
              {community.description}
            </p>
          )}
        </div>
      </div>

      {/* 功能按钮区域 */}
      <div className={styles.functionArea}>
        <div className={styles.functionGrid}>
          {functionButtons.map((button) => (
            <button
              key={button.id}
              className={styles.functionButton}
              onClick={() => handleFunctionClick(button.id)}
            >
              <div className={styles.functionIcon}>{button.icon}</div>
              <div className={styles.functionName}>{button.name}</div>
              <div className={styles.functionDescription}>{button.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* AI百事通对话窗口 */}
      <div className={styles.aiChatSection}>
        <div className={styles.aiChatHeader}>
          <h3 className={styles.aiChatTitle}>
            <span className={styles.aiIcon}>🤖</span>
            AI百事通
          </h3>
          <p className={styles.aiChatSubtitle}>有什么问题尽管问我</p>
        </div>

        <div className={styles.aiChatMessages}>
          {aiMessages.map((message) => (
            <div
              key={message.id}
              className={`${styles.message} ${styles[message.type]}`}
            >
              <div className={styles.messageContent}>{message.content}</div>
              <div className={styles.messageTime}>{message.timestamp}</div>
            </div>
          ))}
        </div>

        <div className={styles.aiChatInput}>
          <input
            type="text"
            className={styles.aiInput}
            placeholder="请输入您的问题..."
            value={aiInput}
            onChange={(e) => setAiInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button className={styles.sendButton} onClick={handleSendMessage}>
            发送
          </button>
        </div>
      </div>

      {/* 社区公告 */}
      <div className={styles.announcementSection}>
        <div className={styles.announcementHeader}>
          <h3 className={styles.announcementTitle}>
            <span className={styles.announcementIcon}>📢</span>
            社区公告
          </h3>
        </div>

        <div className={styles.announcementList}>
          {announcements.map((announcement) => (
            <div key={announcement.id} className={styles.announcementItem}>
              <div className={styles.announcementContent}>
                <div className={styles.announcementMeta}>
                  <span
                    className={styles.announcementCategory}
                    style={{ color: getCategoryColor(announcement.category) }}
                  >
                    {announcement.category}
                  </span>
                  <span className={styles.announcementDate}>
                    {announcement.date}
                  </span>
                </div>
                <h4 className={styles.announcementItemTitle}>
                  {announcement.title}
                </h4>
                <p className={styles.announcementText}>
                  {announcement.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 底部标签页 */}
      <div className={styles.tabsSection}>
        <div className={styles.tabsHeader}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
              onClick={() => handleTabChange(tab.id as typeof activeTab)}
            >
              <span className={styles.tabIcon}>{tab.icon}</span>
              <span className={styles.tabName}>{tab.name}</span>
            </button>
          ))}
        </div>

        <div className={styles.tabContent}>
          <div className={styles.serviceList}>
            {currentTabData.map((item) => (
              <div key={item.id} className={styles.serviceCard}>
                <div className={styles.serviceHeader}>
                  <h4 className={styles.serviceName}>{item.name}</h4>
                  {item.phone && (
                    <span className={styles.servicePhone}>📞 {item.phone}</span>
                  )}
                </div>
                <p className={styles.serviceDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommunityDetail