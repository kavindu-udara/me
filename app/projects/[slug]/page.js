import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import '../../../public/styles/prism.css';

import ProjectReadmeClient from '../../_components/ProjectReadmeClient';
import { fetchReadme } from '../../../controllers/readmeController';

const FILE_PATH = 'public/assets/projects/readmes';

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

    return <ProjectReadmeClient content={content} data={data} />

}
