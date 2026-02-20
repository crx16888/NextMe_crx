import Link from 'next/link'
import { BackIcon } from '../../../components/Icon'

export default function Page() {
  return (
    <section>
      <section className="sm:px-28 sm:pt-12">
        <h1 className="mb-2 text-2xl font-medium tracking-tighter transition-opacity hover:opacity-50">
          <Link href="/work" className="flex items-center justify-start">
            <BackIcon />
            过往经历
          </Link>
        </h1>
        <p className="prose prose-neutral mb-6 text-sm dark:prose-invert">
          从学生到创业者的成长故事。
        </p>
        <p className="prose prose-neutral dark:prose-invert leading-relaxed mb-8 md:mb-12">
          【经历介绍 - 请修改】
        </p>
      </section>
    </section>
  )
}
