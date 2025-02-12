export default function truncatedReadmeContent(content) {
    const truncatedContent = content
        .split("\n") // Split into lines
        .slice(0, 2) // Take the first three lines
        .join("\n") + " ..."; // Join back and add "..."
    return truncatedContent;
}
