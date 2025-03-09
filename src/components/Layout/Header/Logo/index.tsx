import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <img
        src="/images/logo/logo_skillify.svg"
        className="w-[300px]"
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
