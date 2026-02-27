'use client'

import Link from 'next/link'
import Image from 'next/image'
import portfolioOne from 'public/work/boce/1.webp'
import portfolioTwo from 'public/work/boce/2.webp'
import portfolioThree from 'public/work/boce/3.webp'
import { BackIcon } from '../../../components/Icon'
import { useState } from 'react'

export default function Page() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div style={{ backgroundColor: '#F5F5F7' }} className="dark:bg-neutral-950 min-h-screen">
      {/* Header Section - Apple Minimal Style */}
      <section className="px-4 pt-8 sm:px-8 md:pt-12 lg:px-12 max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="mb-4 text-3xl font-semibold tracking-tight transition-opacity hover:opacity-60" style={{ color: '#1D1D1F' }}>
          <Link href="/work" className="flex items-center justify-start gap-2">
            <BackIcon />
            转点 AIFlux
          </Link>
        </h1>

        {/* Subtitle */}
        <p className="mb-4 text-base font-bold tracking-widest" style={{ color: '#1D1D1F' }}>
          全中国最酷的AI活动，尽在这里。
        </p>

        {/* Action Buttons - Compact & Minimal */}
        <div className="flex flex-wrap gap-2 pb-6 border-b" style={{ borderBottomColor: '#E5E5EA' }}>
          <a
            href="https://zd-campus.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border transition-all hover:border-gray-400 active:scale-95 text-xs"
            style={{
              borderColor: '#D1D1D6',
              backgroundColor: '#FFFFFF',
              borderWidth: '0.5px',
            }}
          >
            <span className="text-sm leading-none">🔗</span>
            <span className="font-medium" style={{ color: '#1D1D1F' }}>Links</span>
          </a>
          <a
            href="https://www.xiaohongshu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border transition-all hover:border-gray-400 active:scale-95 text-xs"
            style={{
              borderColor: '#D1D1D6',
              backgroundColor: '#FFFFFF',
              borderWidth: '0.5px',
            }}
          >
            <span className="text-sm leading-none">🎨</span>
            <span className="font-medium" style={{ color: '#1D1D1F' }}>小红书</span>
          </a>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 pt-8 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        <div className="w-full overflow-hidden rounded-2xl bg-white">
          <Image
            placeholder="blur"
            alt="转点AIFlux 主视觉"
            src={portfolioOne}
            width={1000}
            height={600}
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </div>
        <p className="text-center text-xs mt-3 font-light" style={{ color: '#86868B' }}>
          转点AIFlux - 全中国最好的AI类活动信息汇聚平台
        </p>
      </section>

      {/* Introduction Section */}
      <section className="px-4 pt-8 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold mb-4" style={{ color: '#1D1D1F' }}>
          关于转点AIFlux
        </h2>
        <p className="leading-relaxed mb-4 max-w-3xl text-sm" style={{ color: '#1D1D1F', lineHeight: '1.7' }}>
          在过去，大家了解到AI类高质量活动信息是通过小红书、微信群、朋友圈，但是从来没有一个系统性的地方对他们去做汇总。同时对于发布活动的人更是缺少一个统一AI活动发布的渠道。所以我们做了这样的一个产品，对于C端参与活动的人可以去很好地找到全中国现有的AI活动和高质量的活动信息筛选，对于B端和G端的赞助者也能更好地了解不同活动的信息和质量，对于发布活动的人可以有统一好的让活动流量得到曝光的地方。
        </p>
        <p className="leading-relaxed max-w-3xl text-sm" style={{ color: '#1D1D1F', lineHeight: '1.7' }}>
          关于活动，这是我们的第一个期待。我们未来将会在此基础上做更多延伸——本质我们认为在AI时代信息焦虑是很严重的，我们希望尽可能让一切更简单，减少大家对于此的情绪焦虑，过更简单轻松的人生。
        </p>
      </section>

      {/* Gallery Section */}
      <section className="px-4 pt-8 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-base font-semibold mb-3" style={{ color: '#1D1D1F' }}>
              活动影像
            </h3>
            <div className="w-full overflow-hidden rounded-xl bg-white">
              <Image
                placeholder="blur"
                alt="活动现场"
                src={portfolioTwo}
                width={500}
                height={400}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <p className="text-center text-xs mt-2" style={{ color: '#86868B' }}>
              FluxVerse南京组织的行业活动现场
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-3" style={{ color: '#1D1D1F' }}>
              社群建设
            </h3>
            <div className="w-full overflow-hidden rounded-xl bg-white">
              <Image
                placeholder="blur"
                alt="社群活动"
                src={portfolioThree}
                width={500}
                height={400}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <p className="text-center text-xs mt-2" style={{ color: '#86868B' }}>
              5000+成员的活力社区
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 pt-8 sm:px-8 lg:px-12 max-w-6xl mx-auto pb-24">
        <div
          className="rounded-xl p-8 text-center"
          style={{
            background: 'linear-gradient(135deg, #1D1D1F 0%, #404040 100%)',
          }}
        >
          <h2 className="text-xl font-semibold mb-3 text-white">
            加入转点AIFlux社区
          </h2>
          <p className="text-sm mb-6 text-white/80">
            与全中国的AI同好，一起探索AI时代的无限可能
          </p>
          <a
            href="https://fluxverse.events"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 rounded-full bg-white font-medium text-sm transition-transform hover:scale-105"
            style={{ color: '#1D1D1F' }}
          >
            立即访问 →
          </a>
        </div>
      </section>
    </div>
  )
}
