import React, { useState } from 'react'
import { OrganizationCategory, Organization } from '@types/organization'
import styles from '@styles/components/OrganizationPage.module.css'

const OrganizationPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<OrganizationCategory | null>(OrganizationCategory.LIBRARY)

  // 机构分类配置
  const categories = [
    { id: OrganizationCategory.LIBRARY, name: '图书馆', icon: '📚' },
    { id: OrganizationCategory.SCHOOL, name: '学校', icon: '🏫' },
    { id: OrganizationCategory.BOOKSTORE, name: '书店', icon: '📖' },
    { id: OrganizationCategory.GOVERNMENT, name: '党政机关', icon: '🏛️' },
    { id: OrganizationCategory.HOSPITAL, name: '医院', icon: '🏥' },
    { id: OrganizationCategory.BANK, name: '银行', icon: '🏦' },
    { id: OrganizationCategory.POST_OFFICE, name: '邮局', icon: '📮' },
    { id: OrganizationCategory.COMMUNITY_CENTER, name: '社区中心', icon: '🏘️' }
  ]

  // 示例机构数据
  const organizations: Record<OrganizationCategory, Organization[]> = {
    [OrganizationCategory.LIBRARY]: [
      { id: '1', name: '郑州图书馆', category: OrganizationCategory.LIBRARY, address: '郑州市金水区优胜南路1号', phone: '0371-12345678' },
      { id: '2', name: '河南省图书馆', category: OrganizationCategory.LIBRARY, address: '郑州市金水区嵩山南路150号', phone: '0371-87654321' }
    ],
    [OrganizationCategory.SCHOOL]: [
      { id: '3', name: '郑州大学', category: OrganizationCategory.SCHOOL, address: '郑州市科学大道100号', phone: '0371-67781234' },
      { id: '4', name: '郑州市第一中学', category: OrganizationCategory.SCHOOL, address: '郑州市中原区中原西路40号', phone: '0371-67987654' }
    ],
    [OrganizationCategory.BOOKSTORE]: [
      { id: '5', name: '郑州市新华书店', category: OrganizationCategory.BOOKSTORE, address: '郑州市二七区解放路1号', phone: '0371-66688888' }
    ],
    [OrganizationCategory.GOVERNMENT]: [
      { id: '6', name: '郑州市人民政府', category: OrganizationCategory.GOVERNMENT, address: '郑州市中原区中原西路233号', phone: '0371-67181234' }
    ],
    [OrganizationCategory.HOSPITAL]: [
      { id: '7', name: '郑州大学第一附属医院', category: OrganizationCategory.HOSPITAL, address: '郑州市建设东路1号', phone: '0371-66913114' }
    ],
    [OrganizationCategory.BANK]: [
      { id: '8', name: '中国工商银行郑州分行', category: OrganizationCategory.BANK, address: '郑州市金水区花园路39号', phone: '0371-65791234' }
    ],
    [OrganizationCategory.POST_OFFICE]: [
      { id: '9', name: '郑州市邮政局', category: OrganizationCategory.POST_OFFICE, address: '郑州市金水区花园路59号', phone: '0371-65734567' }
    ],
    [OrganizationCategory.COMMUNITY_CENTER]: [
      { id: '10', name: '金水区社区服务中心', category: OrganizationCategory.COMMUNITY_CENTER, address: '郑州市金水区经一路8号', phone: '0371-61234567' }
    ]
  }

  const handleCategoryClick = (categoryId: OrganizationCategory) => {
    setSelectedCategory(categoryId)
  }

  const currentOrganizations = selectedCategory ? organizations[selectedCategory] : []

  return (
    <div className={styles.organizationPage}>
      <div className={styles.pageHeader}>
        <h2 className={styles.pageTitle}>城市机构</h2>
        <p className={styles.pageSubtitle}>查找郑州市各类机构和单位</p>
      </div>

      <div className={styles.contentLayout}>
        {/* 左侧分类树 */}
        <aside className={styles.categoryTree}>
          <h3 className={styles.categoryTitle}>机构分类</h3>
          <div className={styles.categoryList}>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`${styles.categoryItem} ${selectedCategory === category.id ? styles.active : ''}`}
                onClick={() => handleCategoryClick(category.id)}
              >
                <span className={styles.categoryIcon}>{category.icon}</span>
                <span className={styles.categoryName}>{category.name}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* 右侧机构列表 */}
        <main className={styles.organizationList}>
          <div className={styles.listHeader}>
            <h3 className={styles.listTitle}>
              {selectedCategory ? categories.find(c => c.id === selectedCategory)?.name : '全部机构'}
            </h3>
            <p className={styles.listSubtitle}>共找到 {currentOrganizations.length} 个机构</p>
          </div>

          <div className={styles.organizationGrid}>
            {currentOrganizations.map((organization) => (
              <div key={organization.id} className={styles.organizationCard}>
                <div className={styles.cardHeader}>
                  <h4 className={styles.organizationName}>{organization.name}</h4>
                </div>
                <div className={styles.cardContent}>
                  <p className={styles.organizationAddress}>
                    <span className={styles.addressIcon}>📍</span>
                    {organization.address}
                  </p>
                  {organization.phone && (
                    <p className={styles.organizationPhone}>
                      <span className={styles.phoneIcon}>📞</span>
                      {organization.phone}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {currentOrganizations.length === 0 && (
            <div className={styles.emptyState}>
              <span className={styles.emptyIcon}>🔍</span>
              <p>该分类下暂无机构信息</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default OrganizationPage