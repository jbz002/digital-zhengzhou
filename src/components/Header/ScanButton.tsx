import React from 'react'
import styles from '@styles/components/ScanButton.module.css'

interface ScanButtonProps {
  className?: string
  onClick?: () => void
}

const ScanButton: React.FC<ScanButtonProps> = ({
  className = '',
  onClick
}) => {
  return (
    <button
      className={`${styles.scanButton} ${className}`}
      onClick={onClick}
      title="扫码功能"
    >
      <div className={styles.scanIcon}>
        <span className={styles.scanEmoji}>📱</span>
      </div>
      <div className={styles.scanText}>扫码</div>
      <div className={styles.scanCornerTopLeft}></div>
      <div className={styles.scanCornerTopRight}></div>
      <div className={styles.scanCornerBottomLeft}></div>
      <div className={styles.scanCornerBottomRight}></div>
    </button>
  )
}

export default ScanButton