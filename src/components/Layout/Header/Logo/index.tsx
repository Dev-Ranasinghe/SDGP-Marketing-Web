import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo/logo.svg"
        alt="logo"
        width={50}
        height={50}
        style={{ width: "10rem", height: "3rem" }}
        quality={100}
      />
    </Link>
  );
};

export default Logo;
