#!/usr/bin/env node
import { put } from '@vercel/blob'
import fs from 'fs'
import path from 'path'

const videosDir = './public/videos'

async function uploadVideos() {
  try {
    console.log('🎬 Starting video upload to Vercel Blob...\n')

    const videoFiles = fs.readdirSync(videosDir).filter((f) => f.endsWith('.mp4'))

    if (videoFiles.length === 0) {
      console.log('❌ No MP4 files found in ./public/videos/')
      process.exit(1)
    }

    console.log(`Found ${videoFiles.length} video(s) to upload:\n`)

    const uploadedFiles = {}

    for (const file of videoFiles) {
      const filePath = path.join(videosDir, file)
      const fileSize = (fs.statSync(filePath).size / 1024 / 1024).toFixed(2)
      const fileContent = fs.readFileSync(filePath)

      console.log(`📤 Uploading ${file} (${fileSize}MB)...`)

      const blob = await put(`videos/${file}`, fileContent, {
        access: 'public',
        contentType: 'video/mp4',
      })

      uploadedFiles[file] = blob.url
      console.log(`✅ Success! URL: ${blob.url}\n`)
    }

    // Create a config file with the URLs
    const configContent = `// Auto-generated video URLs from Vercel Blob
export const VIDEO_URLS = {
${Object.entries(uploadedFiles)
  .map(([name, url]) => `  '${name}': '${url}',`)
  .join('\n')}
}
`

    fs.writeFileSync('./lib/video-urls.ts', configContent)
    console.log('📝 Created lib/video-urls.ts with video URLs\n')

    console.log('✨ All videos uploaded successfully!')
    console.log('\nNext steps:')
    console.log('1. Import VIDEO_URLS from @/lib/video-urls')
    console.log('2. Use the URLs in your components instead of local paths')
    console.log('3. Commit the generated file: git add lib/video-urls.ts\n')
  } catch (error) {
    console.error('❌ Upload failed:', error)
    process.exit(1)
  }
}

uploadVideos()
