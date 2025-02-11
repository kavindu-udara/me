import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function getReadmes() {
  const files = fs.readdirSync(path.join(process.cwd(), 'public/assets/readmes'));

  const readmes = files.map(filename => {
    const fileContent = fs.readFileSync(
      path.join(process.cwd(), 'public/assets/readmes', filename), 'utf-8'
    )

    const { title } = matter(fileContent).data

    if (!title) {
      return null
    }

    return {
      slug: encodeURIComponent(title),
      // slug:  title.toLowerCase().replace(/ /g, '-'),
      title
    }

  }).filter(readme => readme !== null)

  return readmes;
}

export function getReadmeBySlug(slug) {
  const files = fs.readdirSync(path.join(process.cwd(), 'public/assets/readmes'));

  const filename = files.find(filename => {
    const fileContent = fs.readFileSync(
      path.join(process.cwd(), 'public/assets/readmes', filename), 'utf-8'
    )
    const { title } = matter(fileContent).data
    return slug === encodeURIComponent(title)
  })

  if (!filename) {
    return null;
  }

  const fileContent = fs.readFileSync(
    path.join(process.cwd(), 'public/assets/readmes', filename), 'utf-8'
  )

  const { content, data } = matter(fileContent)

  return { content, data }
}