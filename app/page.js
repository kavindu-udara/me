'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react';

export default function Home() {

  const [blogs, setBlogs] = useState([]);

  const getReadmes = async () => {
    await fetch("/me/api/blog", {
      method: "GET"
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Blogs found") {
          setBlogs(data.blogs);
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  useEffect(() => {
    getReadmes();
  }, [])

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Available READMEs</h1>
      <div className="space-y-4">
        {blogs.map((readme, index) => (
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
