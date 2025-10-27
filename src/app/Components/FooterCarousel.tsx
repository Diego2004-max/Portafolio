'use client'
import Image from 'next/image';
import { useState } from 'react';

export default function FooterCarousel({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);

  return (
    <footer className="px-4 pb-8">
      {/* Vista previa grande */}
      <div className="relative w-full aspect-[16/9] bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden mb-4">
        <Image src={images[active] || '/carousel/1.jpg'} alt="" fill className="object-cover" />
      </div>

      {/* Thumbs deslizable (mobile) */}
      <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory">
        {images.map((src, i) => (
          <button key={src}
            onClick={() => setActive(i)}
            className={`relative min-w-[9rem] h-24 rounded-lg overflow-hidden snap-start border ${i === active ? 'border-blue-500' : 'border-transparent'}`}
            aria-label={`Ver imagen ${i+1}`}
          >
            <Image src={src} alt="" fill className="object-cover" />
          </button>
        ))}
      </div>
    </footer>
  );
}
