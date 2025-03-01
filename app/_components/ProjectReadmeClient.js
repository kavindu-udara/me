'use client';

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineContentCopy, MdDone } from "react-icons/md";
import { useRouter } from 'next/navigation';
import formatDateString from '../../controllers/dateController';
import SmallButton from './SmallButton';
import '../../public/styles/prism.js';
import Image from 'next/image';

export default function ProjectReadmeClient({ content, data }) {
    const router = useRouter();

    const [isUrlCopied, setIsUrlCopied] = useState(false);

    const handleGoBack = () => {
        router.push('/');
    };

    const handleCopyUrl = () => {
        navigator.clipboard.writeText(window.location.href)
            .then(() => {
                setIsUrlCopied(true);
                setTimeout(() => {
                    setIsUrlCopied(false);
                }, 1500);
            })
            .catch(err => {
                setIsUrlCopied(false);
            });
    }

    return (
        <div className="max-w-4xl mx-auto p-8 z-10">
            <div className='markdown-container'>
                <div className='flex flex-wrap items-center justify-center gap-4 mb-5'>
                    <h1 className="text-4xl topic-text text-center">{data.title}</h1>
                </div>

                <Image src={"../assets/projects/images/a379357e-b18b-4571-91fb-5b4add184f05.jpeg"} className="w-full h-[350px] object-cover bg-center bg-no-repeat overflow-hidden rounded-lg" alt={data.title} width={800} height={400} />

                <blockquote className='underline font-semibold'>{formatDateString(data.date)}</blockquote>
                <hr />
                <ReactMarkdown remarkPlugins={[remarkGfm]} className="prose">{content}</ReactMarkdown>
            </div>
            <div className='flex justify-between mt-8'>
                <SmallButton onClick={handleGoBack} text={<FaArrowLeft />} />
                <SmallButton onClick={() => { !isUrlCopied ? handleCopyUrl() : null }} text={isUrlCopied ? <MdDone className='text-emerald-500' /> : <MdOutlineContentCopy />} />
            </div>
        </div>
    );
}
