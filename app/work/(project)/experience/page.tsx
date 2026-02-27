'use client'

import Link from 'next/link'
import { BackIcon } from '../../../components/Icon'
import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

interface TimelineEvent {
  year: string
  title: string
  description: string
  location: string
  details: string[]
}

const timelineData: TimelineEvent[] = [
  {
    year: '2020',
    title: '大连理工大学渝工创业团队',
    description: '市场负责',
    location: '大连',
    details: ['校园产品自研-售卖全流程闭环', '市场负责年流水100W+'],
  },
  {
    year: '2022',
    title: 'Robotmaster & 北京三星机器人算法实习',
    description: '研发',
    location: '大连&北京',
    details: ['电控组负责嵌入式开发，团队机甲大师赛国赛16强', '基于ROS和Frank Panda机械臂的抓取算法研究'],
  },
  {
    year: '2024～2025',
    title: '创投孵化器',
    description: '创投',
    location: '宁波 深圳 南京 北京',
    details: ['宁波Xbotpark、深圳科创学院孵化器校友', '奇绩创坛25S路演高校参访'],
  },
  {
    year: '2025～2026',
    title: 'FluxVerse南京',
    description: '20+人团队独立运营',
    location: '南京',
    details: ['南京市首场AI黑客松【南客松】', '南京市团市委合作NewBorn孵化器', '大小活动50余场', '产品【转点 AIFlux】'],
  },
]

interface TimelineItemProps {
  event: TimelineEvent
  index: number
  isEven: boolean
}

const TimelineItem = ({ event, index, isEven }: TimelineItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.23, 1, 0.82, 1],
      },
    },
  }

  const cardVariants = {
    default: { scale: 1, rotate: 0 },
    expanded: { scale: 1.02, rotate: 0 },
  }

  const offsetDirection = isEven ? 'left' : 'right'
  const offsetValue = isEven ? '-15%' : '15%'

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`relative mb-6 flex w-full ${isEven ? 'justify-start pl-8' : 'justify-end pr-8'} md:${isEven ? 'pl-0' : 'pr-0'}`}
    >
      {/* Timeline dot */}
      <motion.div
        className="absolute left-1/2 top-8 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-gray-200 bg-white"
        style={{ backgroundColor: '#FBFBFD', borderColor: '#86868B' }}
      />

      {/* Card Container */}
      <motion.div
        ref={cardRef}
        className="relative w-full max-w-md md:max-w-lg"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <motion.div
          variants={cardVariants}
          animate={isExpanded ? 'expanded' : 'default'}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="rounded-3xl border border-black/5 bg-white p-8 shadow-md transition-shadow"
          style={{
            backgroundColor: '#FBFBFD',
            boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
            borderColor: '#00000008',
          }}
        >
          {/* Year Badge */}
          <div className="mb-4 inline-block rounded-full px-4 py-1 text-sm font-medium" style={{ backgroundColor: '#F5F5F7', color: '#86868B' }}>
            {event.year}
          </div>

          {/* Title */}
          <h3 className="mb-2 text-2xl font-semibold tracking-tight" style={{ color: '#1D1D1F' }}>
            {event.title}
          </h3>

          {/* Subtitle */}
          <p className="mb-3 text-sm" style={{ color: '#86868B', letterSpacing: '0.02em' }}>
            {event.description} • {event.location}
          </p>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={isExpanded ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 space-y-2 overflow-hidden"
          >
            {event.details.map((detail, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: '#86868B' }} />
                <p className="text-sm leading-relaxed" style={{ color: '#1D1D1F' }}>
                  {detail}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function Page() {
  return (
    <div style={{ backgroundColor: '#FBFBFD', minHeight: '100vh' }} className="dark:bg-neutral-950">
      {/* Header Section */}
      <section className="px-4 pt-8 sm:px-8 md:pt-12 lg:px-12 max-w-6xl mx-auto">
        <h1 className="mb-4 text-2xl font-medium tracking-tighter transition-opacity hover:opacity-50" style={{ color: '#1D1D1F' }}>
          <Link href="/work" className="flex items-center justify-start gap-2">
            <BackIcon />
            过往经历
          </Link>
        </h1>
        <p className="mb-8 text-base font-light max-w-2xl leading-relaxed" style={{ color: '#86868B' }}>
          从20年到26年我的一些经历缩影
        </p>
      </section>

      {/* Timeline Section */}
      <section className="relative px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto pb-32">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2" style={{ backgroundColor: '#F0F0F0' }} />

        {/* Timeline items */}
        <div className="relative">
          {timelineData.map((event, index) => (
            <TimelineItem key={index} event={event} index={index} isEven={index % 2 === 0} />
          ))}
        </div>
      </section>

      {/* Footer spacing */}
      <div className="h-24" />
    </div>
  )
}
