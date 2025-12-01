#!/usr/bin/env node

// Cloudflare Pages构建脚本
const { build } = require('vite')
const { resolve } = require('path')

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
          '@': './src',
          '@components': './src/components',
          '@styles': './src/styles',
          '@types': './src/types',
          '@assets': './src/assets',
          '@data': './src/data',
          '@utils': './src/utils',
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