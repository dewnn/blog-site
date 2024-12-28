import Link from 'next/link';
import { formatDate } from '@/utils/date';
import Header from '@/components/Header';
import { getAllPosts } from '@/utils/mdx';

export default function Home() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <Header />
      <div className="space-y-8">
        {posts.map(post => (
          <article key={post.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
            <Link href={`/post/${post.id}`} className="block">
              <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400">{post.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{post.author}</span>
                <time>{formatDate(post.date)}</time>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
