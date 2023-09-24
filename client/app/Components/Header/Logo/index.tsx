import Link from 'next/link';
import * as Icons from 'react-icons/si';
const Logo = () => {
  return (
    <Link href={'/'}>
      <Icons.SiSololearn size="2rem" color="purple" />
    </Link>
  );
};

export default Logo;
