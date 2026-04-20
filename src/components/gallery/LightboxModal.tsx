'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';

type Artwork = {
  id: string;
  title: string;
  titleEn: string;
  year: number;
  size: string;
  medium: string;
  description: string;
  image: string;
  imageThumb: string;
  featured: boolean;
  category: string;
};

type Props = {
  artwork: Artwork;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
};

export default function LightboxModal({
  artwork,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: Props) {
  // キーボード操作
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    },
    [onClose, onPrev, onNext, hasPrev, hasNext]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  return (
    <div
      className="lightbox-overlay fixed inset-0 z-50 bg-forest-900/95 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row gap-0 md:gap-8 items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 画像エリア */}
        <div className="relative flex-1 w-full">
          <div className="relative max-h-[60vh] md:max-h-[80vh] aspect-[4/3] w-full overflow-hidden">
            <Image
              src={artwork.image}
              alt={artwork.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 70vw"
              priority
            />
          </div>
        </div>

        {/* 作品情報 */}
        <div className="w-full md:w-64 flex-shrink-0 text-canvas bg-forest-800/80 p-6 md:h-full md:max-h-[80vh] overflow-y-auto">
          <p className="font-sans text-xs tracking-[0.25em] text-earth-400 uppercase mb-1">
            {artwork.category}
          </p>
          <h2 className="font-serif text-2xl md:text-3xl tracking-wider mb-1">
            {artwork.title}
          </h2>
          <p className="font-sans text-xs text-forest-300 tracking-wide mb-4">
            {artwork.titleEn}
          </p>
          <div className="w-8 h-px bg-earth-500 mb-4" />
          <dl className="space-y-2 mb-6">
            <div>
              <dt className="font-sans text-[10px] tracking-[0.2em] text-earth-500 uppercase">Year</dt>
              <dd className="font-sans text-sm text-forest-100">{artwork.year}年</dd>
            </div>
            <div>
              <dt className="font-sans text-[10px] tracking-[0.2em] text-earth-500 uppercase">Medium</dt>
              <dd className="font-sans text-sm text-forest-100">{artwork.medium}</dd>
            </div>
            <div>
              <dt className="font-sans text-[10px] tracking-[0.2em] text-earth-500 uppercase">Size</dt>
              <dd className="font-sans text-sm text-forest-100">{artwork.size}</dd>
            </div>
          </dl>
          <p className="font-serif text-sm leading-relaxed text-forest-200">
            {artwork.description}
          </p>
        </div>

        {/* 閉じるボタン */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center text-canvas/70 hover:text-canvas transition-colors bg-forest-900/60 rounded-full"
          aria-label="閉じる"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* 前後ナビゲーション */}
        {hasPrev && (
          <button
            onClick={onPrev}
            className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-canvas/70 hover:text-canvas transition-colors bg-forest-900/60 rounded-full"
            aria-label="前の作品"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 3L5 9l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
        {hasNext && (
          <button
            onClick={onNext}
            className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-canvas/70 hover:text-canvas transition-colors bg-forest-900/60 rounded-full"
            aria-label="次の作品"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M7 3l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
