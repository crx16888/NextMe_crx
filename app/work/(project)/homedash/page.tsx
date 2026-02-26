'use client'

import Link from 'next/link'
import Image from 'next/image'
import homedashOne from 'public/work/homedash/1.webp'
import homedashTwo from 'public/work/homedash/2.webp'
import homedashThree from 'public/work/homedash/3.webp'
import homedashFour from 'public/work/homedash/4.webp'
import homedashFive from 'public/work/homedash/5.webp'
import homedashSix from 'public/work/homedash/6.webp'
import homedashSeven from 'public/work/homedash/7.webp'
import homedashEight from 'public/work/homedash/8.webp'
import homedashNine from 'public/work/homedash/9.webp'
import { BackIcon } from '../../../components/Icon'
import { useState } from 'react'

interface PolaroidPhotoProps {
  src: any
  alt: string
  caption: string
  index: number
}

function PolaroidPhoto({ src, alt, caption, index }: PolaroidPhotoProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  // 生成伪随机的旋转角度和位置偏移
  const rotation = ((index * 37) % 7) - 3 // -3 到 3 度之间
  const offsetX = ((index * 13) % 8) - 4 // -4 到 4 像素
  const offsetY = ((index * 23) % 8) - 4 // -4 到 4 像素

  return (
    <div
      className="relative group"
      style={{
        transform: `translate(${offsetX}px, ${offsetY}px) rotate(${rotation}deg)`,
        transition: 'all 0.3s ease-out',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="bg-white rounded-sm p-3 shadow-sm hover:shadow-xl transition-all duration-300"
        style={{
          transform: isHovered ? 'scale(1.08) rotate(0deg) translateY(-12px)' : 'scale(1) rotate(0deg)',
          zIndex: isHovered ? 50 : 10,
        }}
      >
        <div className="relative w-full overflow-hidden rounded-xs bg-gradient-to-br from-white to-gray-50">
          <Image
            placeholder="blur"
            alt={alt}
            src={src}
            width={280}
            height={220}
            className="w-full h-auto object-cover"
            priority={false}
          />
        </div>
        <p className="mt-2 text-center text-xs font-light tracking-tight" style={{ color: '#86868B' }}>
          {caption}
        </p>
      </div>
    </div>
  )
}

interface Section {
  title: string
  description: string
  photos: Array<{
    src: any
    alt: string
    caption: string
  }>
}

const sections: Section[] = [
  {
    title: 'FluxVerse南客松',
    description: '江苏省首场AI黑客松，2025.6',
    photos: [
      {
        src: homedashOne,
        alt: 'FLuxVerse南京松活动1',
        caption: '2025.6 江苏省首场AI黑客松',
      },
      {
        src: homedashSix,
        alt: '南客松合影',
        caption: '南客松合影',
      },
      {
        src: homedashSeven,
        alt: '南客松S1海报',
        caption: '南客松S1海报',
      },
      {
        src: homedashEight,
        alt: '南客松S1获奖项目',
        caption: '南客松S1获奖项目',
      },
      {
        src: homedashNine,
        alt: '南客松合作伙伴',
        caption: '南客松合作伙伴',
      },
    ],
  },
  {
    title: '企业社区合作',
    description: '与字节跳动、抖音等头部企业的深度合作，为社群成员提供实战学习机会。',
    photos: [
      {
        src: homedashThree,
        alt: '字节跳动Trae on Campus',
        caption: '字节跳动 Trae on Campus',
      },
      {
        src: homedashFour,
        alt: '字节跳动Trae on Campus活动',
        caption: '字节跳动校园合作',
      },
      {
        src: homedashFive,
        alt: '抖音AI创变者计划',
        caption: '抖音 AI 创变者计划',
      },
    ],
  },
  {
    title: '政府合作',
    description: '与南京市政府及团中央携手，推动青年创新生态的高质量发展。',
    photos: [
      {
        src: homedashTwo,
        alt: '向团中央书记处汇报',
        caption: '2025.11 向团中央做专题汇报',
      },
    ],
  },
  {
    title: '高校合作',
    description: '与南京大学、东南大学等院校深度合作，培养下一代创新者。',
    photos: [
      {
        src: homedashOne,
        alt: '高校交流活动',
        caption: '校园创新交流',
      },
    ],
  },
]

export default function Page() {
  return (
    <div style={{ backgroundColor: '#F5F5F7', minHeight: '100vh' }} className="dark:bg-neutral-950">
      {/* Header Section */}
      <section className="sm:px-28 sm:pt-12 px-4 pt-8">
        <h1 className="mb-2 text-2xl font-medium tracking-tighter transition-opacity hover:opacity-50" style={{ color: '#1D1D1F' }}>
          <Link href="/work" className="flex items-center justify-start gap-2">
            <BackIcon />
            Founder@FluxVerse南京
          </Link>
        </h1>
        <p className="mb-6 text-sm font-light" style={{ color: '#86868B' }}>
          活动经历
        </p>
        <p className="leading-relaxed mb-12 md:mb-16 max-w-2xl" style={{ color: '#1D1D1F' }}>
          2025年4月，刚从深圳创业回来的我在南京创办了南大创客俱乐部，后更名为FluxVerse南京。当时的我在想：为什么南京不能像深圳一样，拥有如此浓厚的AI创新活动氛围？在这里的许多年轻人该有多压抑啊。所以我决定改变这一切。
        </p>
      </section>

      {/* Sections */}
      {sections.map((section, sectionIndex) => (
        <section key={sectionIndex} className="px-4 sm:px-28 mb-16 md:mb-24">
          {/* Section Title */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3 tracking-tight" style={{ color: '#1D1D1F' }}>
              {section.title}
            </h2>
            <p className="text-sm font-light max-w-xl" style={{ color: '#86868B' }}>
              {section.description}
            </p>
          </div>

          {/* Photo Grid with Polaroid Effect */}
          <div
            className="relative w-full"
            style={{
              minHeight: '320px',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem 3rem',
              padding: '1rem',
            }}
          >
            {section.photos.map((photo, photoIndex) => (
              <PolaroidPhoto
                key={photoIndex}
                src={photo.src}
                alt={photo.alt}
                caption={photo.caption}
                index={sectionIndex * 10 + photoIndex}
              />
            ))}
          </div>
        </section>
      ))}

      {/* Footer Spacing */}
      <div className="h-12 md:h-24" />
    </div>
  )
}
