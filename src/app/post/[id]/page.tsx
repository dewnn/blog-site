import Link from 'next/link';
import { notFound } from 'next/navigation';
import { formatDate } from '@/utils/date';
import Header from '@/components/Header';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getPostById } from '@/utils/mdx';

interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Page({ params }: PageProps) {
  const post = getPostById(params.id);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <Header />
      <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline mb-8 block">
        ← Ana Sayfaya Dön
      </Link>
      
      <article className="prose prose-slate dark:prose-invert lg:prose-xl max-w-none">
        <div className="flex justify-between text-gray-600 dark:text-gray-400 mb-8 not-prose">
          <span>{post.author}</span>
          <time>{formatDate(post.date)}</time>
        </div>
        
        <ReactMarkdown
          className="text-gray-800 dark:text-gray-200"
          components={{
            code({inline, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  style={atomDark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            }
          }}
        >
          {post.content}
        </ReactMarkdown>
      </article>
    </main>
  );
} 