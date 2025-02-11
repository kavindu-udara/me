import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';
import Link from 'next/link'

export default function Home() {

  const files = fs.readdirSync(path.join(process.cwd(), 'public/assets/readmes'));

  const readmes = files.map(filename => {
    const fileContent = fs.readFileSync(
      path.join(process.cwd(), 'public/assets/readmes', filename), 'utf-8'
    )

    const {title} = matter(fileContent).data

    if(!title){
      return null
    }

    return{
      slug: encodeURIComponent(title),
      title
    }

  }).filter(readme => readme !== null)

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Available READMEs</h1>
      <div className="space-y-4">
        {readmes.map((readme, index) => (
          <div key={index} className="p-4 border rounded hover:bg-gray-50">
            <Link href={`/${readme.slug}`} className="text-xl text-blue-600 hover:underline">
              {readme.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}