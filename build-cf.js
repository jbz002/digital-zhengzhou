#!/usr/bin/env node

// Cloudflare Pages构建脚本
import { build } from 'vite'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

// 获取当前目录的ES模块等价物
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

async function buildForCloudflare() {
  console.log('🚀 开始为Cloudflare Pages构建项目...')

  try {
    const result = await build({
      configFile: false,
      root: process.cwd(),
      mode: 'production',
      build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
          input: resolve(__dirname, 'index.html')
        }
      },
      resolve: {
        alias: {
          '@': resolve(process.cwd(), './src'),
          '@components': resolve(process.cwd(), './src/components'),
          '@styles': resolve(process.cwd(), './src/styles'),
          '@types': resolve(process.cwd(), './src/types'),
          '@assets': resolve(process.cwd(), './src/assets'),
          '@data': resolve(process.cwd(), './src/data'),
          '@utils': resolve(process.cwd(), './src/utils'),
        }
      },
      logLevel: 'info'
    })

    console.log('✅ 构建成功！')
    console.log('📦 构建文件位置: ./dist')
    return result

  } catch (error) {
    console.error('❌ 构建失败:', error)
    process.exit(1)
  }
}

buildForCloudflare()