'use server'
import { getReadmes } from '../controllers/readmeController'

export async function generateStaticParams() {
  const readmes = getReadmes();
  return readmes.map(readme => ({ slug: readme.slug }));
}