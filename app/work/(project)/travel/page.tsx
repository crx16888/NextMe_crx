import Link from 'next/link'
import { BackIcon } from '../../../components/Icon'

export default function Page() {
  return (
    <section>
      <section className="sm:px-28 sm:pt-12">
        <h1 className="mb-2 text-2xl font-medium tracking-tighter transition-opacity hover:opacity-50">
          <Link href="/work" className="flex items-center justify-start">
            <BackIcon />
            我的旅行日记
          </Link>
        </h1>
        <p className="prose prose-neutral mb-6 text-sm dark:prose-invert">
          走过的每一座城，都是独特的记忆。
        </p>
        <p className="prose prose-neutral dark:prose-invert leading-relaxed mb-8 md:mb-12">
          【旅行日记 - 请修改】
        </p>
      </section>
    </section>
  )
}
