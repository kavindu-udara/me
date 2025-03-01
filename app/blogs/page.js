import Link from 'next/link'
import ReactMarkdown from 'react-markdown';
import truncatedContent, { fetchReadmes } from '../../controllers/readmeController';
import formatDateString from '../../controllers/dateController';

export default function Home() {

const readmes = fetchReadmes('public/assets/blogs/readmes');

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl gradient-text mb-8">Available Blogs</h1>
      <div className="space-y-4">
        {readmes.map((readme, index) => (
          <div key={index}>
            <h2 className='dark:text-[#cfda5a] text-[#f3701e]'>{readme.title}</h2>
            <blockquote>{formatDateString(readme.date)}</blockquote>
            <ReactMarkdown className="prose my-5">
              {truncatedContent(readme.content)}
            </ReactMarkdown>
            <Link href={`/blogs/${readme.slug}`} >Learn More</Link>
            <hr/>
          </div>
        ))}
      </div>

        {/* paginations */}
        <div className="flex justify-between mt-8">
          <Link href="/blogs/page/1">1</Link>
          <Link href="/blogs/page/2">2</Link>
          <Link href="/blogs/page/3">3</Link>
        </div>

    </div>
  );

}
