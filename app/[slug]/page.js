'use server'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import ReadmeClient from '../_components/ReadmeClient';

export async function generateStaticParams() {

  const files = fs.readdirSync(path.join(process.cwd(), 'public/assets/readmes'));

  return files.map(filename => {
    const fileContent = fs.readFileSync(
      path.join(process.cwd(), 'public/assets/readmes', filename),
      'utf8'
    );
    const { title } = matter(fileContent).data;
    return { slug: encodeURIComponent(title.toLowerCase().replace(/ /g, '-')) };
  });
}

export default async function ReadmePage({ params }) {
  const { slug } = await params;

  const file = fs.readdirSync(path.join(process.cwd(), 'public/assets/readmes')).find(filename => {
    const fileContent = fs.readFileSync(
      path.join(process.cwd(), 'public/assets/readmes', filename),
      'utf8'
    );
    const { title } = matter(fileContent).data;
    return slug === encodeURIComponent(title.toLowerCase().replace(/ /g, '-'));
  });

  if (!file) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">File not found</h1>
        <p>The requested file could not be found.</p>
      </div>
    );
  }

  const { content, data } = matter(fs.readFileSync(
    path.join(process.cwd(), 'public/assets/readmes', file),
    'utf8'
  ));

  return <ReadmeClient content={content} data={data} />

}