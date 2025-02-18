import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';

const truncatedReadmeContent = (content) => {
    const truncatedContent = content
        .split("\n") // Split into lines
        .slice(0, 2) // Take the first three lines
        .join("\n") + " ..."; // Join back and add "..."
    return truncatedContent;
}

export const fetchReadmes = (filesPath) => {
    const files = fs.readdirSync(path.join(process.cwd(), filesPath));

    const readmes = files.map(filename => {
        const fileContent = fs.readFileSync(
            path.join(process.cwd(), filesPath, filename), 'utf-8'
        )

        const { content, data } = matter(fileContent)

        if (!data) {
            return null
        }

        return {
            slug: encodeURIComponent(data.title.toLowerCase().replace(/ /g, '-')),
            title: data.title,
            date: data.date,
            content
        }

    }).filter(readme => readme !== null)

    return readmes;
}

export const fetchReadme = (filesPath, slug) => {
    const file = fs.readdirSync(path.join(process.cwd(), filesPath)).find(filename => {
        const fileContent = fs.readFileSync(
            path.join(process.cwd(), filesPath, filename),
            'utf8'
        );
        const { title } = matter(fileContent).data;
        return slug === encodeURIComponent(title.toLowerCase().replace(/ /g, '-'));
    });

    if (!file) {
        return (
            <div className="max-w-4xl mx-auto p-8">
                <h1 className="text-4xl font-bold mb-4">File not found</h1>
                <p>The requested file could not be found.</p>
            </div>
        );
    }

    const { content, data } = matter(fs.readFileSync(
        path.join(process.cwd(), filesPath, file),
        'utf8'
    ));

    return { content, data };
}

export default truncatedReadmeContent;
