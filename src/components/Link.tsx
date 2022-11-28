import React from 'react';
import useLoading from '../common/hooks/useLoading';
import { useRouter } from 'next/router';

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string | undefined;
  ref?: React.Ref<HTMLAnchorElement> | undefined;
};

let activeTimeout: NodeJS.Timeout | null = null;

const Link: React.FC<Props> = ({ href, children, className, ref }) => {
  const router = useRouter();
  const { setLoading, setNextPage } = useLoading();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    setLoading(true);
    setNextPage(href);

    if (activeTimeout !== null) {
      clearTimeout(activeTimeout);
      activeTimeout = null;
    }

    activeTimeout = setTimeout(async () => {
      if (activeTimeout === null) return;
      await router.push(href);
      setLoading(false);
      clearTimeout(activeTimeout);
      activeTimeout = null;
    }, 500);
  };

  return (
    <a className={className} href={href} onClick={handleClick} ref={ref}>
      {children}
    </a>
  );
};

export default Link;
