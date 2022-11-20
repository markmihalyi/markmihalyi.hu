import Link from './Link';
import React from 'react';

// import Link from 'next/link';

type AProps = React.HTMLProps<HTMLAnchorElement>;

const NavbarItem = React.forwardRef<HTMLAnchorElement, AProps>(function Item(props, ref) {
  const { className, href = '#', children } = props;
  return (
    <Link className={className} href={href} ref={ref}>
      {children}
    </Link>
  );
});

export default NavbarItem;
