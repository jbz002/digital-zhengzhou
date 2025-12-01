/**
 * 随机图片工具函数
 * 使用 https://picsum.photos 服务生成随机图片
 */

/**
 * 生成随机种子
 * @returns 唯一的随机种子
 */
export const generateRandomSeed = (): string => {
  // 使用时间戳 + 随机数确保唯一性
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * 生成随机图片 URL
 * @param width 图片宽度
 * @param height 图片高度
 * @param seed 可选的种子值，如果不提供则自动生成
 * @returns 图片 URL
 */
export const getRandomImageUrl = (
  width: number,
  height: number,
  seed?: string
): string => {
  const imageSeed = seed || generateRandomSeed()
  return `https://picsum.photos/seed/${imageSeed}/${width}/${height}`
}

/**
 * 根据组件名称和ID生成固定的随机图片URL
 * 这样同一个组件实例在多次渲染时会使用相同的图片
 * @param componentName 组件名称
 * @param id 唯一标识
 * @param width 图片宽度
 * @param height 图片高度
 * @returns 图片 URL
 */
export const getStableRandomImageUrl = (
  componentName: string,
  id: string,
  width: number,
  height: number
): string => {
  const seed = `${componentName}-${id}`
  return `https://picsum.photos/seed/${seed}/${width}/${height}`
}

/**
 * 预定义的常用尺寸图片URL生成器
 */
export const ImageSizes = {
  // 缩略图尺寸
  thumbnail: (id: string, componentName = 'default') =>
    getStableRandomImageUrl(componentName, id, 60, 60),

  // 小图尺寸
  small: (id: string, componentName = 'default') =>
    getStableRandomImageUrl(componentName, id, 120, 90),

  // 中等尺寸
  medium: (id: string, componentName = 'default') =>
    getStableRandomImageUrl(componentName, id, 300, 200),

  // 大图尺寸
  large: (id: string, componentName = 'default') =>
    getStableRandomImageUrl(componentName, id, 600, 400),

  // 特色大图
  featured: (id: string, componentName = 'default') =>
    getStableRandomImageUrl(componentName, id, 800, 400),

  // 网格卡片
  grid: (id: string, componentName = 'default') =>
    getStableRandomImageUrl(componentName, id, 400, 300),

  // 正方形
  square: (id: string, componentName = 'default', size = 200) =>
    getStableRandomImageUrl(componentName, id, size, size)
}

/**
 * 图片加载错误处理
 * @param event 图片加载错误事件
 * @param fallbackUrl 备用图片URL
 */
export const handleImageError = (
  event: React.SyntheticEvent<HTMLImageElement, Event>,
  fallbackUrl?: string
): void => {
  const target = event.target as HTMLImageElement

  if (fallbackUrl) {
    target.src = fallbackUrl
  } else {
    // 使用一个默认的占位图片
    target.src = getRandomImageUrl(200, 200, 'placeholder')
  }
}

/**
 * 图片样式属性
 */
export const imageStyles = {
  objectFit: 'cover' as const,
  width: '100%',
  height: '100%'
}