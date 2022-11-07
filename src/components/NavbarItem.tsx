import Link from 'next/link';
import React from 'react';

type AProps = React.HTMLProps<HTMLAnchorElement>;

const NavbarItem = React.forwardRef<HTMLAnchorElement, AProps>(function Item(props, ref) {
  const { href = '#', children, ...rest } = props;
  return (
    <Link href={href}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  );
});

export default NavbarItem;
