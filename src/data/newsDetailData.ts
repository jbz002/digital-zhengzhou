import { NewsItem } from '../types/news'
import { getNewsByTab, newsData } from './newsData'

// 生成模拟的文章内容
const generateArticleContent = (_title: string, summary: string, category: string): string => {
  const contentTemplates = {
    FOLLOW: `
      <h2>项目背景</h2>
      <p>${summary}</p>

      <h2>核心亮点</h2>
      <p>郑州市作为国家中心城市，一直以来都在不断推进城市现代化建设。此次项目充分体现了郑州市对民生的重视，以及对提升城市品质的决心。</p>

      <h2>实施细节</h2>
      <p>项目采用了最先进的技术和管理理念，确保每一个环节都达到最高标准。相关部门表示，这将为市民带来前所未有的便利和体验。</p>

      <h2>社会影响</h2>
      <p>专家认为，这一举措不仅能够提升市民的生活质量，更将为郑州的整体发展注入新的活力。市民们对此纷纷表示期待和支持。</p>

      <h2>未来展望</h2>
      <p>随着项目的深入推进，郑州将在更多领域推出类似的便民服务，为打造现代化、国际化城市奠定坚实基础。</p>
    `,

    RECOMMEND: `
      <h2>政策解读</h2>
      <p>${summary}</p>

      <h2>实施细则</h2>
      <p>此次推出的服务优化措施，涵盖了多个领域的具体改进。相关部门表示，这些措施将分阶段实施，确保平稳过渡和高效运行。</p>

      <h2>用户体验</h2>
      <p>通过系统性的优化升级，用户将享受到更加便捷、高效的服务体验。无论是线上办理还是线下服务，都将有显著的提升。</p>

      <h2>技术支撑</h2>
      <p>背后强大的技术系统为这些服务的顺利运行提供了有力保障。先进的数字化平台和智能化系统让服务更加精准和个性化。</p>

      <h2>专家观点</h2>
      <p>业内专家认为，这标志着郑州在智慧城市建设方面迈出了重要一步，为全国其他城市提供了可借鉴的经验。</p>
    `,

    COMMUNITY: `
      <h2>活动概述</h2>
      <p>${summary}</p>

      <h2>精彩瞬间</h2>
      <p>活动现场气氛热烈，居民们积极参与各项互动环节。通过这样的社区活动，邻里关系更加和谐，社区凝聚力显著增强。</p>

      <h2>居民反馈</h2>
      <p>参与活动的居民纷纷表示，这样的活动让他们感受到了社区的温暖，也增进了对邻里的了解和友谊。</p>

      <h2>组织者心声</h2>
      <p>社区工作人员表示，未来将举办更多类似的活动，让社区成为居民们真正的家园，让每个人都感受到归属感和幸福感。</p>
    `,

    MEDIA: `
      <h2>节目介绍</h2>
      <p>${summary}</p>

      <h2>制作亮点</h2>
      <p>此次节目改版采用了最新的制作技术和表现形式，为观众带来全新的观看体验。制作团队在内容策划和视觉呈现上都下足了功夫。</p>

      <h2>观众反馈</h2>
      <p>节目播出后，观众反响热烈，纷纷表示新版本的节目更加贴近生活，内容更加丰富有趣。</p>

      <h2>未来规划</h2>
      <p>制作方表示，将继续创新节目形式，推出更多贴近市民生活的优质内容，为郑州的文化建设贡献力量。</p>
    `,

    GOVERNMENT: `
      <h2>政策发布</h2>
      <p>${summary}</p>

      <h2>政策解读</h2>
      <p>相关部门负责人表示，这一政策的出台经过了深入调研和充分论证，体现了政府对民生的重视和对城市发展的长远规划。</p>

      <h2>实施路径</h2>
      <p>政策将按照既定的时间表和路线图稳步推进，确保各项措施落到实处，真正惠及广大市民。</p>

      <h2>专家分析</h2>
      <p>政策专家认为，这一举措具有重要的战略意义，将为郑州的高质量发展提供有力支撑，也将为其他城市提供宝贵经验。</p>

      <h2>市民期待</h2>
      <p>广大市民对这一政策充满期待，相信政策的实施将为生活带来更多便利和福祉。</p>
    `,

    SCIENCE: `
      <h2>科研成果</h2>
      <p>${summary}</p>

      <h2>研究背景</h2>
      <p>这一科研成果的取得，凝聚了科研团队多年的心血和智慧。研究的意义不仅在于学术价值，更在于实际应用前景。</p>

      <h2>技术突破</h2>
      <p>在研究过程中，团队克服了诸多技术难题，在关键领域实现了重要突破，为相关领域的发展奠定了坚实基础。</p>

      <h2>应用前景</h2>
      <p>专家认为，这一成果具有广阔的应用前景，将在多个领域产生重要影响，为经济社会发展提供新的动力。</p>

      <h2>后续研究</h2>
      <p>研究团队表示，将继续深化相关研究，推动成果转化和应用，为社会创造更大价值。</p>
    `,

    HEALTH: `
      <h2>医疗动态</h2>
      <p>${summary}</p>

      <h2>健康服务</h2>
      <p>医疗服务的不断提升，体现了郑州市对市民健康的高度重视。通过优化服务流程和提升医疗质量，让市民享受到更好的医疗保障。</p>

      <h2>专家建议</h2>
      <p>医疗专家提醒市民，要养成良好的健康习惯，定期体检，及时发现和预防健康问题，享受健康美好的生活。</p>

      <h2>服务改进</h2>
      <p>相关部门表示，将继续完善医疗服务体系，提升医疗技术水平，为市民提供更加优质、便捷的医疗服务。</p>
    `,

    FAMILY: `
      <h2>家庭服务</h2>
      <p>${summary}</p>

      <h2>服务特色</h2>
      <p>专业的家庭服务团队为每个家庭提供个性化的解决方案，帮助解决生活中的各种问题，让家庭生活更加和谐美好。</p>

      <h2>专家指导</h2>
      <p>资深家庭教育专家和心理咨询师提供专业指导，帮助家庭成员建立良好的沟通机制，营造温馨的家庭氛围。</p>

      <h2>成功案例</h2>
      <p>通过专业服务，许多家庭解决了长期困扰的问题，家庭关系得到明显改善，生活质量显著提升。</p>
    `
  }

  return contentTemplates[category as keyof typeof contentTemplates] || `
    <h2>详细内容</h2>
    <p>${summary}</p>

    <h2>深入分析</h2>
    <p>这一重要举措体现了郑州市在相关领域的深度思考和前瞻规划。通过系统性的设计和实施，将为市民带来实实在在的便利。</p>

    <h2>具体措施</h2>
    <p>相关部门制定了详细的实施方案，确保各项措施能够精准落地，真正解决市民关心的问题。</p>

    <h2>未来展望</h2>
    <p>随着各项措施的深入推进，郑州将在相关领域达到新的高度，为市民创造更加美好的生活环境。</p>
  `
}

// 根据ID获取文章详情（包含完整内容）
export const getNewsDetail = async (articleId: string): Promise<NewsItem> => {
  // 从所有分类中查找对应的文章
  const allTabs = Object.keys(newsData)
  let targetArticle: NewsItem | null = null

  for (const tab of allTabs) {
    const articles = getNewsByTab(tab as any)
    const found = articles.find(article => article.id === articleId)
    if (found) {
      targetArticle = { ...found }
      break
    }
  }

  if (!targetArticle) {
    throw new Error(`文章 ${articleId} 不存在`)
  }

  // 生成完整的文章内容
  if (!targetArticle.content) {
    targetArticle.content = generateArticleContent(
      targetArticle.title,
      targetArticle.summary,
      targetArticle.category
    )
  }

  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 300))

  return targetArticle
}

// 获取相关文章推荐
export const getRelatedArticles = (currentArticle: NewsItem, limit: number = 5): NewsItem[] => {
  const allArticles = getNewsByTab(currentArticle.category)

  // 过滤掉当前文章，返回相关文章
  return allArticles
    .filter(article => article.id !== currentArticle.id)
    .slice(0, limit)
}

// 搜索文章
export const searchArticles = (keyword: string): NewsItem[] => {
  const allArticles: NewsItem[] = []

  // 从所有分类中搜索
  Object.keys(newsData).forEach(tab => {
    const articles = getNewsByTab(tab as any)
    allArticles.push(...articles)
  })

  // 按标题和内容搜索
  return allArticles.filter(article =>
    article.title.includes(keyword) ||
    article.summary.includes(keyword) ||
    article.tags?.some(tag => tag.includes(keyword))
  )
}