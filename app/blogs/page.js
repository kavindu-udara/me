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
            <h2>{readme.title}</h2>
            <blockquote>{formatDateString(readme.date)}</blockquote>
            <ReactMarkdown className="prose my-5">
              {truncatedContent(readme.content)}
            </ReactMarkdown>
            <Link href={`/${readme.slug}`} >Learn More</Link>
            <hr/>
          </div>
        ))}
      </div>
    </div>
  );

}
