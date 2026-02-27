'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Caveat } from 'next/font/google'
import homedashOne from 'public/work/homedash/1.webp'
import homedashTwo from 'public/work/homedash/2.webp'
import homedashThree from 'public/work/homedash/3.webp'
import homedashFour from 'public/work/homedash/4.webp'
import homedashFive from 'public/work/homedash/5.webp'
import homedashSix from 'public/work/homedash/6.webp'
import homedashSeven from 'public/work/homedash/7.webp'
import homedashEight from 'public/work/homedash/8.webp'
import homedashNine from 'public/work/homedash/9.webp'
import homedashTen from 'public/work/homedash/10.webp'
import homedashEleven from 'public/work/homedash/11.webp'
import homedashTwelve from 'public/work/homedash/12.webp'
import homedashThirteen from 'public/work/homedash/13.webp'
import homedashFourteen from 'public/work/homedash/14.webp'
import homedashFifteen from 'public/work/homedash/15.webp'
import homedashSixteen from 'public/work/homedash/16.webp'
import homedashSeventeen from 'public/work/homedash/17.webp'
import homedashEighteen from 'public/work/homedash/18.webp'
import homedashNineteen from 'public/work/homedash/19.webp'
import homedashTwenty from 'public/work/homedash/20.webp'
import homedashTwentyOne from 'public/work/homedash/21.webp'
import homedashTwentyTwo from 'public/work/homedash/22.webp'
import { BackIcon } from '../../../components/Icon'
import { useState, useRef, useEffect } from 'react'

const caveat = Caveat({ subsets: ['latin'] })

interface PolaroidPhotoProps {
  src: any
  alt: string
  caption: string
  index: number
  totalPhotos: number
  isContainerHovered: boolean
  onPhotoClick: (photo: { src: any; caption: string }) => void
}

function PolaroidPhoto({ src, alt, caption, index, totalPhotos, isContainerHovered, onPhotoClick }: PolaroidPhotoProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isPhotoHovered, setIsPhotoHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // 黄金比例扇形散开布局
  const angleStep = (Math.PI * 1.4) / Math.max(2, totalPhotos - 1)
  const baseAngle = -Math.PI * 0.35
  const angle = baseAngle + angleStep * index
  
  // 默认状态：紧凑堆叠在中间，完全在容器内
  const defaultRadius = 25 + index * 20
  const defaultOffsetX = Math.cos(angle) * defaultRadius
  const defaultOffsetY = Math.sin(angle) * defaultRadius
  
  // Hover 状态：适度展开，在屏幕范围内
  const expandRadius = 110 + index * 70
  const expandOffsetX = Math.cos(angle) * expandRadius
  const expandOffsetY = Math.sin(angle) * expandRadius
  
  // 旋转角度：-5 到 5 度
  const rotation = ((index * 17) % 11) - 5

  return (
    <div
      ref={ref}
      className="absolute transition-all duration-700 ease-out cursor-pointer"
      style={{
        transform: isContainerHovered
          ? `translate(calc(-50% + ${expandOffsetX}px), calc(-50% + ${expandOffsetY}px)) rotate(0deg) scale(1)`
          : `translate(calc(-50% + ${defaultOffsetX}px), calc(-50% + ${defaultOffsetY}px)) rotate(${rotation}deg) scale(0.95)`,
        left: '50%',
        top: '40%',
        width: '340px',
        height: '420px',
        opacity: isVisible ? 1 : 0.5,
        zIndex: isPhotoHovered && isContainerHovered ? 300 : isContainerHovered ? totalPhotos - index + 50 : totalPhotos - index,
      }}
      onClick={() => onPhotoClick({ src, caption })}
      onMouseEnter={() => setIsPhotoHovered(true)}
      onMouseLeave={() => setIsPhotoHovered(false)}
    >
      {/* Apple风格卡片 */}
      <div
        className="bg-white rounded-xl p-5 transition-all duration-700 h-full flex flex-col hover:shadow-2xl"
        style={{
          boxShadow: isPhotoHovered && isContainerHovered
            ? '0 50px 100px rgba(0,0,0,0.25), 0 20px 40px rgba(0,0,0,0.15), inset 0 0 0 1px rgba(255,255,255,0.8)'
            : isContainerHovered
            ? '0 30px 60px rgba(0,0,0,0.15), 0 10px 25px rgba(0,0,0,0.1)'
            : '0 12px 28px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
          border: '1px solid rgba(0,0,0,0.03)',
          transform: isPhotoHovered && isContainerHovered ? 'scale(1.02)' : 'scale(1)',
        }}
      >
        {/* 图片容器 */}
        <div className="relative w-full h-1/2 overflow-hidden rounded-lg bg-gradient-to-br from-white via-slate-50 to-slate-100">
          <Image
            placeholder="blur"
            alt={alt}
            src={src}
            width={400}
            height={300}
            className="w-full h-full object-cover"
            priority={false}
          />
        </div>
        
        {/* 标题文字区域 */}
        <div className="mt-4 flex-1 flex items-center justify-center">
          <p className="text-center text-xs font-light tracking-wide" style={{ color: '#86868B' }}>
            {caption}
          </p>
        </div>
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
    description: '合作单位包含：字节跳动、阿里巴巴、帆软、Insta360、小红书科技、真格基金、奇绩创坛、深路创学院、AdventureX、Bonjour等',
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
      {
        src: homedashTen,
        alt: '阿里合作',
        caption: '阿里合作',
      },
      {
        src: homedashEleven,
        alt: '深圳科创学院 demo day',
        caption: '深圳科创学院 demo day',
      },
      {
        src: homedashTwelve,
        alt: '奇绩创坛路演日',
        caption: 'Bonjour! 提供了南客松S1的社交支持',
      },
      {
        src: homedashThirteen,
        alt: '南创俱在AdventureX 2025',
        caption: '奇绩创坛路演日',
      },
      {
        src: homedashFourteen,
        alt: 'Bonjour! 提供了南客松S1的社交支持',
        caption: '南创俱在AdventureX 2025',
      },
    ],
  },
  {
    title: '政府合作',
    description: '南京市建邺区人民政府、南京市鼓楼高新区人民政府、南京市团市委合作',
    photos: [
      {
        src: homedashTwo,
        alt: '向团中央书记处汇报',
        caption: '2025.11 代表南京地区和团中央书记处第一书记阿东书记做专题汇报',
      },
      {
        src: homedashFifteen,
        alt: '和工程院院士',
        caption: '和工程院院士、京东事务部副总裁同台发言',
      },
      {
        src: homedashSixteen,
        alt: '京东集团事务部副总裁同台发言',
        caption: '出席河西中央科创区发布仪式',
      },
      {
        src: homedashSeventeen,
        alt: '出席河西中央科创区发布会',
        caption: '南京大学新科技校友会',
      },
      {
        src: homedashEighteen,
        alt: '南京大学新科技校友会',
        caption: '南京市团市委合作孵化器',
      },
    ],
  },
  {
    title: '高校合作',
    description: '合作方包括全中国100+所重点高校，其中包含北京大学、清华大学、南京大学、上海交通大学、浙江大学、复旦大学、中国科学技术大学、东南大学等顶尖名校，联办活动超过30场',
    photos: [
      {
        src: homedashTwentyTwo,
        alt: '浙江大学XLab',
        caption: '浙江大学XLab',
      },
      {
        src: homedashNineteen,
        alt: '东南大学创协',
        caption: '东南大学创协',
      },
      {
        src: homedashTwenty,
        alt: '南京大学年度创业产品集市',
        caption: '南京大学年度创业产品集市',
      },
      {
        src: homedashTwentyOne,
        alt: '上海交通大学创协',
        caption: '上海交通大学创协',
      },
    ],
  },
]

export default function Page() {
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: any; caption: string } | null>(null)

  const handlePhotoClick = (photo: { src: any; caption: string }) => {
    setSelectedPhoto(photo)
  }

  return (
    <div style={{ backgroundColor: '#F5F5F7', minHeight: '100vh' }} className="dark:bg-neutral-950">
      {/* 图片放大模态窗口 */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[200] bg-black/80 flex items-center justify-center p-4 transition-opacity duration-300"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 关闭按钮 */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full transition-all"
              style={{ color: 'white' }}
            >
              ✕
            </button>

            {/* 图片展示 */}
            <div className="relative w-full h-full flex flex-col items-center justify-center bg-black/5">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.caption}
                width={1200}
                height={900}
                className="w-full h-full object-contain"
              />
            </div>

            {/* 底部描述 */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <p className="text-lg font-light tracking-wide">{selectedPhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
      {/* Header Section */}
      <section className="px-4 pt-8 sm:px-8 md:pt-12 lg:px-12 max-w-6xl mx-auto">
        <h1 className="mb-4 text-2xl font-medium tracking-tighter transition-opacity hover:opacity-50" style={{ color: '#1D1D1F' }}>
          <Link href="/work" className="flex items-center justify-start gap-2">
            <BackIcon />
            FluxVerse南京
          </Link>
        </h1>
        <p className="mb-8 text-base font-bold tracking-widest" style={{ color: '#1D1D1F' }}>
          活动经历
        </p>
        <p className={`mb-16 max-w-3xl ${caveat.className}`} style={{ color: '#1D1D1F', fontSize: '0.95rem', lineHeight: '1.8', letterSpacing: '0.01em' }}>
          2025.2月，刚从深圳创业回来的我在南京倍感无聊。我在想：为什么南京不能像深圳一样拥有如此浓厚的创新创业氛围，大家的idea上似乎总是一潭死水。一个很好的契机，同年4月，我和我的好伙伴们在南京大学创办了南大创客俱乐部，这是南京大学首个真正具有调性、做点实事的民间创新创业生态组织，后更名FluxVerse南京。截止2026.2月，团队现已组织有完善的运营团队22名，承办协办活动超过100+场，社区总人数突破5000人。是南京地区和长三角地区最具有生态活动的创新创业生态组织。
          <br />
          <br />
          回顾从最初走来，一点点梦想在这不到一年的时间里由情怀成了真。
        </p>
      </section>

      {/* Sections */}
      {sections.map((section, sectionIndex) => {
        const [isContainerHovered, setIsContainerHovered] = useState(false)
        
        return (
        <section key={sectionIndex} className="px-4 sm:px-8 lg:px-12 mb-8 max-w-6xl mx-auto">
          {/* Section Title with Enhanced Typography */}
          <div className="mb-0">
            <h2 className="text-3xl font-semibold mb-4 tracking-wide" style={{ color: '#1D1D1F' }}>
              {section.title}
            </h2>
            <p className="text-sm font-light max-w-2xl tracking-wider leading-relaxed mb-10" style={{ color: '#86868B', letterSpacing: '0.05em' }}>
              {section.description}
            </p>
          </div>

          {/* Photo Grid with Dynamic Stacking - Fan Layout */}
          <div
            className="relative w-full transition-all duration-700 rounded-xl mt-0"
            style={{
              height: `${330 + section.photos.length * 45}px`,
              background: 'radial-gradient(circle, #ffffff 0%, #f5f5f7 100%)',
              overflow: 'visible',
              marginTop: '0',
            }}
            onMouseEnter={() => setIsContainerHovered(true)}
            onMouseLeave={() => setIsContainerHovered(false)}
          >
            {section.photos.map((photo, photoIndex) => (
              <PolaroidPhoto
                key={photoIndex}
                src={photo.src}
                alt={photo.alt}
                caption={photo.caption}
                index={photoIndex}
                totalPhotos={section.photos.length}
                isContainerHovered={isContainerHovered}
                onPhotoClick={handlePhotoClick}
              />
            ))}
          </div>
        </section>
        )
      })}

      {/* Footer Spacing */}
      <div className="h-24" />
    </div>
  )
}
