import GalleryGrid from '@/components/gallery/GalleryGrid';
import type { Metadata } from 'next';
import artworks from '@/data/artworks.json';

export const metadata: Metadata = {
  title: 'ギャラリー',
};

export default function GalleryPage() {
  return <GalleryGrid works={artworks} />;
}
