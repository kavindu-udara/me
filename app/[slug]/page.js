'use client'

import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function ReadmePage({ params }) {
  const { slug } = React.use(params);

  const [blogNotFound, setBlogNotFound] = useState(false);
  const [blog, setBlog] = useState(null);

  const getBlog = async () => {
    try {
      const res = await fetch(`/me/api/blog/${slug}`, {
        method: "GET"
      });
      const data = await res.json();
      if (data.message === "Blog found") {
        setBlog(data.blog);
      } else if (data.message = "Blog not found") {
        setBlogNotFound(true);
      }
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    getBlog();
  }, [slug]);

  return (
    <div className="readme-view max-w-4xl mx-auto p-8">
      {blog && (
        <div>
          <h1 className="text-4xl font-bold text-[#ff757f] mb-4">{blog.data.title}</h1>
          <div className='markdown-container'>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{blog.content}</ReactMarkdown>
          </div>
        </div>
      )}
      {
        blogNotFound && (
          <div>Blog not found.</div>
        )
      }
    </div>
  )
}
