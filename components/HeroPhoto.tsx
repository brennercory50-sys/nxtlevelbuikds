import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  aspect?: string;
};

// Framed photo beside the hero copy, shown near native size so it stays sharp.
export default function HeroPhoto({ src, alt, aspect = 'aspect-[4/3]' }: Props) {
  return (
    <div className="relative mt-12 lg:mt-0 max-w-md lg:max-w-none">
      <div aria-hidden="true" className="absolute -inset-3 rounded-[28px] bg-accent/25 blur-2xl" />
      <div className={`relative ${aspect} rounded-2xl overflow-hidden border border-white/15 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]`}>
        <Image fill src={src} alt={alt} className="object-cover" sizes="(min-width: 1024px) 460px, 100vw" priority />
      </div>
    </div>
  );
}
