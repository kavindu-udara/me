import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextResponse } from 'next/server';

export const dynamic = 'force-static';
export const revalidate = 60; // Revalidate every 60 seconds

export const GET = async (req) => {
    try {
        const files = fs.readdirSync(path.join(process.cwd(), 'public/assets/readmes'));

        const readmes = files.map(filename => {
            const fileContent = fs.readFileSync(
                path.join(process.cwd(), 'public/assets/readmes', filename), 'utf-8'
            )

            const { title } = matter(fileContent).data

            if (!title) {
                return null
            }

            return {
                slug: encodeURIComponent(title),
                title
            }

        }).filter(readme => readme !== null)

        return NextResponse.json({ blogs: readmes, message: "Blogs found" }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}