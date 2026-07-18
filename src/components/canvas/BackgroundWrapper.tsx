'use client'
import dynamic from 'next/dynamic'

const BackgroundMesh = dynamic(() => import('./BackgroundMesh'), { ssr: false })

export function BackgroundWrapper() {
  return <BackgroundMesh />
}
