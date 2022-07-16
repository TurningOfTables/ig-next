import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  const activeLinkStyles = "pointer-events-none cursor-default";
  const inactiveLinkStyles = "underline";

  return (
    <nav className="flex gap-x-5 place-content-end mr-5 mt-1">
      <Link href="/">
        <a
          className={
            router.pathname == "/" ? activeLinkStyles : inactiveLinkStyles
          }
        >
          Home
        </a>
      </Link>
      <Link href="/showrunner">
        <a
          className={
            router.pathname == "/showrunner"
              ? activeLinkStyles
              : inactiveLinkStyles
          }
        >
          Showrunner
        </a>
      </Link>
      <Link href="/this-merchant-life">
        <a
          className={
            router.pathname == "/this-merchant-life"
              ? activeLinkStyles
              : inactiveLinkStyles
          }
        >
          This Merchant Life
        </a>
      </Link>
      <Link href="/presskit">
        <a
          className={
            router.pathname == "/presskit"
              ? activeLinkStyles
              : inactiveLinkStyles
          }
        >
          Presskit
        </a>
      </Link>
    </nav>
  );
}
