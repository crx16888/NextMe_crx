import Link from 'next/link'
import Image from 'next/image'
import homedashOne from 'public/work/homedash/1.webp'
import homedashTwo from 'public/work/homedash/2.webp'
import homedashThree from 'public/work/homedash/3.webp'
import homedashFour from 'public/work/homedash/4.webp'
import homedashFive from 'public/work/homedash/5.webp'
import { BackIcon } from '../../../components/Icon'

export default function Page() {
  return (
    <section>
      <section className="sm:px-28 sm:pt-12">
        <h1 className="mb-2 text-2xl font-medium tracking-tighter transition-opacity hover:opacity-50">
          <Link href="/work" className="flex items-center justify-start">
            <BackIcon />
            过往活动合集
          </Link>
        </h1>
        <p className="prose prose-neutral mb-6 text-sm dark:prose-invert">
          全中国最好玩的AI活动尽在这里。
        </p>
        <p className="prose prose-neutral dark:prose-invert leading-relaxed mb-8 md:mb-12">
          2025.4月，刚从深圳创业回来的我在南京创办了南大创客俱乐部（后更名FLuxVerse南京）。当时的我在想：为什么南京，不能像深圳一样，拥有这么多好玩AI创新类活动的氛围。在这里的许多年轻人该有多压抑啊。所以我就做了。
        </p>
      </section>
      <div className="sm:px-28 w-full">
        <Image
          placeholder="blur"
          alt={'活动1'}
          src={homedashOne}
          width={800}
          height={600}
          style={{ width: '100%', height: 'auto' }}
        />
        <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 mt-3">
          2025.6 发起江苏省首场AI黑客松
        </p>
      </div>
      <div className="sm:px-28 mt-5 md:mt-12 w-full">
        <Image
          placeholder="blur"
          alt={'活动2'}
          src={homedashTwo}
          width={800}
          height={600}
          style={{ width: '100%', height: 'auto' }}
        />
        <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 mt-3">
          2025.11 代表南京市向团中央书记处第一书记阿东书记做专题汇报
        </p>
      </div>
      <div className="sm:px-28 mt-5 md:mt-12 w-full">
        <Image
          placeholder="blur"
          alt={'活动3'}
          src={homedashThree}
          width={800}
          height={600}
          style={{ width: '100%', height: 'auto' }}
        />
        <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 mt-3">
          字节跳动Trae on Campus活动1
        </p>
      </div>
      <div className="sm:px-28 mt-5 md:mt-12 w-full">
        <Image
          placeholder="blur"
          alt={'活动4'}
          src={homedashFour}
          width={800}
          height={600}
          style={{ width: '100%', height: 'auto' }}
        />
        <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 mt-3">
          字节跳动Trae on Campus活动2
        </p>
      </div>
      <div className="sm:px-28 mt-5 md:mt-12 md:mb-24 w-full">
        <Image
          placeholder="blur"
          alt={'活动5'}
          src={homedashFive}
          width={800}
          height={600}
          style={{ width: '100%', height: 'auto' }}
        />
        <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 mt-3">
          抖音AI创变者计划
        </p>
      </div>
    </section>
  )
}
