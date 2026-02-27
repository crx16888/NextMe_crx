'use client'

import { motion } from 'framer-motion'
import WorkCard from './work-card'
import bangboo from 'public/work/homedash.webp'
import artrack from 'public/work/boce.webp'
import lambda from 'public/work/letter.webp'
import cara from 'public/work/order.webp'

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { filter: 'blur(20px)', opacity: 0 },
  visible: {
    filter: 'blur(0px)',
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Page() {
  return (
    <section>
      <section className="sm:px-14 sm:pt-6">
        <h1 className="mb-2 text-2xl font-medium tracking-tighter">
          施工中...
        </h1>
        <p className="prose prose-neutral mb-6 text-sm dark:prose-invert">
          Some projects that might be interesting.
        </p>
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.section className={'grid grid-cols-1 gap-4 sm:grid-cols-2'}>
            <motion.div variants={item}>
              <WorkCard
                title={'FluxVerse南京'}
                description={'创办了全南京最好的创新创业生态组织'}
                image={bangboo}
                link={'/work/homedash'}
              />
            </motion.div>
            <motion.div variants={item}>
              <WorkCard
                title={'转点 AIFlux'}
                description={'全中国最酷的AI活动，尽在这里。'}
                image={artrack}
                link={'/work/portfolio'}
              />
            </motion.div>
            <motion.div variants={item}>
              <WorkCard
                title={'过往经历'}
                description={'从20年到26年我的一些经历缩影'}
                image={lambda}
                link={'/work/experience'}
              />
            </motion.div>
            <motion.div variants={item}>
              <WorkCard
                title={'我的旅行日记'}
                description={'一些摄影和随笔记录'}
                image={cara}
                link={'/work/travel'}
              />
            </motion.div>
          </motion.section>
        </motion.div>
      </section>
    </section>
  )
}
