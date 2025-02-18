export default function formatDateString (originalDateString) {
    const date = new Date(originalDateString);
    const options = { day: '2-digit', month: 'long', year: 'numeric' };

    return date.toLocaleDateString('en-GB', options);
}
