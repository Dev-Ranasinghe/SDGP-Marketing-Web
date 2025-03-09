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
        style={{ width: "auto", height: "auto" }}
        quality={100}
        className="w-12 h-12"
      />
    </Link>
  );
};

export default Logo;
