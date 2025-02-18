import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import '../../public/styles/prism.css';

import ReadmeClient from '../_components/ReadmeClient';
import { fetchReadme } from '../../controllers/readmeController';

const FILE_PATH = 'public/assets/blogs/readmes';

export async function generateStaticParams() {

  const files = fs.readdirSync(path.join(process.cwd(), FILE_PATH));
  return files.map(filename => {
    const fileContent = fs.readFileSync(
      path.join(process.cwd(), FILE_PATH, filename),
      'utf8'
    );
    const { title } = matter(fileContent).data;
    return { slug: encodeURIComponent(title.toLowerCase().replace(/ /g, '-')) };
  });
}

export default async function ReadmePage({ params }) {
  const { slug } = await params;

  const { content, data } = fetchReadme(FILE_PATH, slug);

  return <ReadmeClient content={content} data={data} />

}
