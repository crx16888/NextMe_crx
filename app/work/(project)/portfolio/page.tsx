import Link from 'next/link'
import Image from 'next/image'
import portfolioOne from 'public/work/boce/1.webp'
import portfolioTwo from 'public/work/boce/2.webp'
import portfolioThree from 'public/work/boce/3.webp'
import { BackIcon } from '../../../components/Icon'

export default function Page() {
  return (
    <section>
      <section className="sm:px-28 sm:pt-12">
        <h1 className="mb-2 text-2xl font-medium tracking-tighter transition-opacity hover:opacity-50">
          <Link href="/work" className="flex items-center justify-start">
            <BackIcon />
            个人作品集
          </Link>
        </h1>
        <p className="prose prose-neutral mb-6 text-sm dark:prose-invert">
          代表我能力的项目和代码作品。
        </p>
        <p className="prose prose-neutral dark:prose-invert leading-relaxed mb-8 md:mb-12">
          【你的作品集介绍文字】
        </p>
      </section>
      <a href="https://www.zd-campus.com/" target="_blank" rel="noopener noreferrer" className="sm:px-28 w-full block">
        <Image
          placeholder="blur"
          alt={'作品1'}
          src={portfolioOne}
          width={800}
          height={600}
          style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
        />
      </a>
        <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 mt-3">
          全中国最好玩的AI创新类活动汇聚平台
        </p>
      <div className="sm:px-28 mt-5 md:mt-12 w-full">
        <Image
          placeholder="blur"
          alt={'作品2'}
          src={portfolioTwo}
          width={800}
          height={600}
          style={{ width: '100%', height: 'auto' }}
        />
        <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 mt-3">
          【作品2描述 - 请修改】
        </p>
      </div>
      <div className="sm:px-28 mt-5 md:mt-12 md:mb-24 w-full">
        <Image
          placeholder="blur"
          alt={'作品3'}
          src={portfolioThree}
          width={800}
          height={600}
          style={{ width: '100%', height: 'auto' }}
        />
        <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 mt-3">
          【作品3描述 - 请修改】
        </p>
      </div>
    </section>
  )
}
