import React from 'react'
import styles from '@styles/components/Logo.module.css'

interface LogoProps {
  className?: string
  onClick?: () => void
}

const Logo: React.FC<LogoProps> = ({
  className = '',
  onClick
}) => {
  return (
    <div
      className={`${styles.logo} ${className}`}
      onClick={onClick}
    >
      <div className={styles.logoIcon}>
        <img
          src="/images/logo.jpg"
          alt="数字郑州"
          className={styles.logoImage}
        />
      </div>
      <div className={styles.logoText}>
        <h1 className={styles.title}>数字郑州</h1>
        <div className={styles.subtitle}>智慧城市服务平台</div>
      </div>
    </div>
  )
}

export default Logo