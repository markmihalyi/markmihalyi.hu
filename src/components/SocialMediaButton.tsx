import Image, { StaticImageData } from 'next/image';

import React from 'react';

export type SCButtonProps = {
  className?: string;
  href: string;
  image: StaticImageData;
  alt: string;
};

const SocialMediaButton: React.FC<SCButtonProps> = ({ className, href, image, alt }) => {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      <Image
        className="opacity-100 transition-opacity duration-300 hover:opacity-70"
        src={image}
        alt={alt}
        draggable={false}
        priority={true}
        width={32}
        height={32}
        layout="fixed"
      />
    </a>
  );
};

export default SocialMediaButton;
