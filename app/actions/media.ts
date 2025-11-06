'use server'

import { put } from '@vercel/blob'

export async function uploadMedia(
  fileName: string,
  file: Blob,
  contentType: string
) {
  try {
    const blob = await put(fileName, file, {
      access: 'public',
      contentType,
    })
    return { url: blob.url, success: true }
  } catch (error) {
    console.error('Upload failed:', error)
    return { success: false, error: String(error) }
  }
}
