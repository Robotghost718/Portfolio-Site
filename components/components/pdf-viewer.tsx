'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { createPortal } from 'react-dom'

interface PDFViewerProps {
  filePath: string
  fileName?: string
}

export function PDFViewer({ filePath, fileName = 'Document' }: PDFViewerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-700"
      >
        View PDF
      </button>
    )
  }

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4">
      <div className="relative flex h-[90vh] w-full max-w-4xl flex-col rounded-lg bg-white dark:bg-zinc-950">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-200 p-4 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            {fileName}
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            aria-label="Close PDF"
          >
            <X className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
          </button>
        </div>

        {/* PDF Iframe */}
        <div className="flex-1 overflow-hidden">
          <iframe
            src={`${filePath}#toolbar=1&navpanes=0&scrollbar=1`}
            className="h-full w-full"
            title={fileName}
          />
        </div>
      </div>
    </div>
  )

  if (!mounted) return null

  return createPortal(modalContent, document.body)
}
