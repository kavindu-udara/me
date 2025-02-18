import Link from 'next/link'
import ReactMarkdown from 'react-markdown';
import truncatedContent, { fetchReadmes } from '../../controllers/readmeController';
import formatDateString from '../../controllers/dateController';
import Image from 'next/image';
import ProjectCard from '../_components/ProjectCard';

const page = () => {
    const readmes = fetchReadmes('public/assets/blogs/readmes');
    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className=" gradient-text mb-5 text-center">My Projects</h1>
            <div className='grid grid-cols-2 gap-8'>
                {readmes.map((readme, index) => (
                    <ProjectCard readme={readme} key={index} />
                ))}
            </div>
        </div>
    )
}

export default page