import React, { useState } from 'react'
import { UserInfo } from '@types/common'
import styles from '@styles/components/UserCenter.module.css'

interface UserCenterProps {
  userInfo?: UserInfo
  className?: string
  onScanClick?: () => void
}

// 默认用户信息（示例）
const defaultUserInfo: UserInfo = {
  id: '001',
  name: '郑州用户',
  isVip: true
}

const UserCenter: React.FC<UserCenterProps> = ({
  userInfo = defaultUserInfo,
  className = '',
  onScanClick
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleUserClick = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleMenuClick = (action: string) => {
    setIsDropdownOpen(false)
    switch (action) {
      case 'personal':
        console.log('个人设置')
        break
      case 'scan':
        if (onScanClick) {
          onScanClick()
        }
        break
      case 'help':
        console.log('帮助中心')
        break
      case 'about':
        console.log('关于我们')
        break
      case 'logout':
        console.log('退出登录')
        break
      default:
        break
    }
  }

  // 点击外部关闭下拉菜单
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest(`.${styles.userCenter}`)) {
        setIsDropdownOpen(false)
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isDropdownOpen])

  return (
    <div className={`${styles.userCenter} ${className}`}>
      <div
        className={styles.userAvatar}
        onClick={handleUserClick}
      >
        <span className={styles.avatarEmoji}>👤</span>
      </div>

      {isDropdownOpen && (
        <div className={styles.dropdownMenu}>
          <div
            className={styles.dropdownItem}
            onClick={() => handleMenuClick('personal')}
          >
            <span className={styles.menuIcon}>⚙️</span>
            <span className={styles.menuText}>个人设置</span>
          </div>
          <div
            className={styles.dropdownItem}
            onClick={() => handleMenuClick('scan')}
          >
            <span className={styles.menuIcon}>📷</span>
            <span className={styles.menuText}>扫码功能</span>
          </div>
          <div
            className={styles.dropdownItem}
            onClick={() => handleMenuClick('help')}
          >
            <span className={styles.menuIcon}>❓</span>
            <span className={styles.menuText}>帮助中心</span>
          </div>
          <div
            className={styles.dropdownItem}
            onClick={() => handleMenuClick('about')}
          >
            <span className={styles.menuIcon}>ℹ️</span>
            <span className={styles.menuText}>关于我们</span>
          </div>
          <div className={styles.dropdownDivider}></div>
          <div
            className={styles.dropdownItem}
            onClick={() => handleMenuClick('logout')}
          >
            <span className={styles.menuIcon}>🚪</span>
            <span className={styles.menuText}>退出登录</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserCenter