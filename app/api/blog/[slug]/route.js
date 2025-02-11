import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextResponse } from 'next/server';

export const dynamic = 'force-static';
export const revalidate = 60; // Revalidate every 60 seconds

export async function generateStaticParams() {
    const files = fs.readdirSync(path.join(process.cwd(), 'public/assets/readmes'))

    return files.map(filename => {
        const fileContent = fs.readFileSync(
            path.join(process.cwd(), 'public/assets/readmes', filename),
            'utf8'
        )
        const { title } = matter(fileContent).data
        return { slug: encodeURIComponent(title) }
    })
}

export const GET = async (req, context) => {
    try {
        const { slug } = await context.params;

        console.log({slug})

        // Find the file that matches the slug
        const file = fs.readdirSync(path.join(process.cwd(), 'public/assets/readmes')).find(filename => {
            const fileContent = fs.readFileSync(
                path.join(process.cwd(), 'public/assets/readmes', filename),
                'utf8'
            )
            const { title } = matter(fileContent).data
            return slug === title
        })

        // If no file is found, return a 404 response
        if (!file) {
            return NextResponse.json({ message: "Blog not found" }, { status: 404 });
        }

        // Read the content of the found file
        const { content, data } = matter(fs.readFileSync(
            path.join(process.cwd(), 'public/assets/readmes', file),
            'utf8'
        ))

        return NextResponse.json({ message: "Blog found", blog: { content, data } });

    } catch (err) {
        return NextResponse.json({ message: "Something went wrong", err }, { status: 500 });
    }
}