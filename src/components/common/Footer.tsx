import React from 'react'
import styles from '@styles/components/Footer.module.css'

interface FooterLink {
  label: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

const Footer: React.FC = () => {
  // Footer章节数据
  const footerSections: FooterSection[] = [
    {
      title: '政务服务',
      links: [
        { label: '办事指南', href: '#' },
        { label: '政策法规', href: '#' },
        { label: '政民互动', href: '#' },
        { label: '数据开放', href: '#' }
      ]
    },
    {
      title: '民生服务',
      links: [
        { label: '教育医疗', href: '#' },
        { label: '社保就业', href: '#' },
        { label: '住房交通', href: '#' },
        { label: '环境环保', href: '#' }
      ]
    },
    {
      title: '城市文化',
      links: [
        { label: '文化遗产', href: '#' },
        { label: '旅游景点', href: '#' },
        { label: '特色美食', href: '#' },
        { label: '城市活动', href: '#' }
      ]
    },
    {
      title: '快速链接',
      links: [
        { label: '市民服务热线', href: 'tel:12345' },
        { label: '意见反馈', href: '#' },
        { label: '网站地图', href: '#' },
        { label: '帮助中心', href: '#' }
      ]
    }
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          {/* 公司简介部分 */}
          <div className={styles.companyInfo}>
            <div className={styles.companyLogo}>
              <span className={styles.logoText}>数字郑州</span>
            </div>
            <div className={styles.companyDescription}>
              <p>
                数字郑州是郑州市政府官方数字服务平台，致力于为市民提供便捷、高效、智能的政务服务。
                平台整合了政务、民生、文化等多个领域的服务资源，打造一站式数字生活体验。
              </p>
            </div>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <span>河南省郑州市郑东新区</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <span>服务热线：12345</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>⏰</span>
                <span>工作时间：周一至周五 9:00-17:00</span>
              </div>
            </div>
          </div>

          {/* 快速链接部分 */}
          <div className={styles.linksSection}>
            {footerSections.map((section, index) => (
              <div key={index} className={styles.linkGroup}>
                <h4 className={styles.linkTitle}>{section.title}</h4>
                <ul className={styles.linkList}>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.href} className={styles.link}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 底部版权信息 */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>© 2024 数字郑州 版权所有</p>
            <p>主办单位：郑州市人民政府 承办单位：郑州市大数据管理局</p>
          </div>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>隐私政策</a>
            <span className={styles.separator}>|</span>
            <a href="#" className={styles.bottomLink}>使用条款</a>
            <span className={styles.separator}>|</span>
            <a href="#" className={styles.bottomLink}>网站无障碍</a>
            <span className={styles.separator}>|</span>
            <a href="#" className={styles.bottomLink}>友情链接</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer