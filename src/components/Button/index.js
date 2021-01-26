import Link from 'next/link';
import styled from 'styled-components';

const Button = ({ href, children }) => {
  return (
    <Link href={href}>
      <a
        style={{
          color: 'white',
          textDecoration: 'none',
          background: 'black',
        }}
      >
        {children}
      </a>
    </Link>
  );
};

export default Button;
