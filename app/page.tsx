import { allPosts } from 'contentlayer/generated'

const PostCard = ({ date, title, published }) => {
  return (
    <article className="flex max-w-xl flex-col items-start justify-between">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime="2020-03-16" className="text-gray-500">
          {date}
        </time>
        <a
          href="#"
          className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
        >
          {published ? 'Published' : 'Draft'}
        </a>
      </div>
      <h3 className="mt-3 font-heading text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
        <a href="#">
          <span className="absolute inset-0" />
          {title}
        </a>
      </h3>
    </article>
  )
}
export default function Home() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
          <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
            {allPosts.map((post, i) => (
              <PostCard key={post.date} date={post.date} title={post.title} published={post.published ?? undefined} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
