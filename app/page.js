import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';
import Link from 'next/link'
import ReactMarkdown from 'react-markdown';
import truncatedContent from '../controllers/readmeController';
import formatDateString from '../controllers/dateController';

export default function Home() {

  const files = fs.readdirSync(path.join(process.cwd(), 'public/assets/readmes'));

  const readmes = files.map(filename => {
    const fileContent = fs.readFileSync(
      path.join(process.cwd(), 'public/assets/readmes', filename), 'utf-8'
    )

    const { content, data} = matter(fileContent)

    if(!data){
      return null
    }

    return{
      slug: encodeURIComponent(data.title.toLowerCase().replace(/ /g, '-')),
      title: data.title,
      date: data.date,
      content
    }

  }).filter(readme => readme !== null)

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Available Blogs</h1>
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