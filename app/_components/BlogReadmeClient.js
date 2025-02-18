'use client';

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineContentCopy, MdDone } from "react-icons/md";
import { useRouter } from 'next/navigation';
import formatDateString from '../../controllers/dateController';
import Button from './Button';
import SmallButton from './SmallButton';
import '../../public/styles/prism.js';

export default function BlogReadmeClient({ content, data }) {
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
        <div className="max-w-4xl mx-auto p-8">
            <div className='markdown-container'>
                <div className='flex flex-wrap items-center justify-start gap-4 mb-5'>
                    <Button onClick={handleGoBack} text={<FaArrowLeft />} />
                    <h1 className="text-4xl gradient-text ">{data.title}</h1>
                </div>
                <blockquote className='underline font-semibold'>{formatDateString(data.date)}</blockquote>
                <hr />
                <ReactMarkdown remarkPlugins={[remarkGfm]} className="prose">{content}</ReactMarkdown>
            </div>
            <div className='flex justify-between mt-8'>
                <SmallButton  onClick={handleGoBack} text={<FaArrowLeft />} />
                <SmallButton  onClick={() => { !isUrlCopied ? handleCopyUrl() : null }} text={isUrlCopied ? <MdDone className='text-emerald-500' /> : <MdOutlineContentCopy />} />
            </div>
        </div>
    );
}
