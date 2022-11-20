import React from 'react';
import useLoading from 'common/hooks/useLoading';
import { useRouter } from 'next/router';

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string | undefined;
  ref?: React.Ref<HTMLAnchorElement> | undefined;
};

const Link: React.FC<Props> = ({ href, children, className, ref }) => {
  const router = useRouter();
  const { setLoading, setNextPage } = useLoading();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    setLoading(true);
    setNextPage(href);

    setTimeout(async () => {
      await router.push(href);
      setLoading(false);
    }, 500);
  };

  let classes = 'cursor-pointer';
  if (className) classes += ` ${className}`;

  return (
    <a className={classes} onClick={handleClick} ref={ref}>
      {children}
    </a>
  );
};

export default Link;
