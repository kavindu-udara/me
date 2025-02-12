'use client';

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineContentCopy, MdDone } from "react-icons/md";
import { useRouter } from 'next/navigation';
import formatDateString from '../../controllers/dateController';

export default function ReadmeClient({ content, data }) {
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
                }, 3000);
            })
            .catch(err => {
                setIsUrlCopied(false);
            });
    }

    return (
        <div className="max-w-4xl mx-auto p-8">
            <div className='markdown-container'>
                <div className='flex flex-wrap items-center justify-start gap-4 mb-5'>
                    <button onClick={handleGoBack} className="p-4 rounded-lg cursor-pointer ">
                        <FaArrowLeft />
                    </button>
                    <h1 className="text-4xl font-bold ">{data.title}</h1>
                </div>
                <blockquote className='underline font-semibold'>{formatDateString(data.date)}</blockquote>
                <hr />
                <ReactMarkdown remarkPlugins={[remarkGfm]} className="prose">{content}</ReactMarkdown>
            </div>
            <div className='flex justify-between mt-8'>
                <button onClick={handleGoBack} className="px-4 py-2 rounded-lg cursor-pointer ">
                    <FaArrowLeft />
                </button>
                <button onClick={() => { !isUrlCopied ? handleCopyUrl() : null }} className='px-4 py-2 rounded-lg cursor-pointer'>
                    {isUrlCopied ? <MdDone className='text-emerald-700' /> : <MdOutlineContentCopy />}
                </button>
            </div>
        </div>
    );
}