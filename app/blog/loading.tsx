import { Loader } from '../components/loader-spin'

export default function Loading() {
  return (
    <section className="sm:px-14 sm:pt-6">
      <h1 className="mb-2 text-2xl font-medium tracking-tighter">Blog</h1>
      <p className="prose prose-neutral mb-8 text-sm dark:prose-invert">
        Some blog posts. (施工ing...)
      </p>
      <Loader visible={true} />
    </section>
  )
}
