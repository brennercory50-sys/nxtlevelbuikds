import Image from 'next/image';

type LogoProps = {
  variant?: 'dark' | 'light' | 'blue';
  size?: 'sm' | 'md' | 'lg';
};

const dims = {
  sm: { width: 90, height: 60 },
  md: { width: 120, height: 80 },
  lg: { width: 180, height: 120 },
};

export default function Logo({ size = 'md' }: LogoProps) {
  const { width, height } = dims[size];

  return (
    <Image
      src="/images/logo.png"
      alt="NXT Level Builds"
      width={width}
      height={height}
      className="object-contain"
    />
  );
}
