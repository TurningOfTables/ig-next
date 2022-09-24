import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  const activeLinkStyles = "pointer-events-none cursor-default";
  const inactiveLinkStyles = "underline";

  return (
    <nav className="flex h-11 place-content-end align-middle mr-5">
      <div className="flex my-auto gap-x-5">
        <Link href="/">
          <a
            className={
              router.pathname == "/"
                ? activeLinkStyles
                : inactiveLinkStyles + " inline"
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
            Press Kit
          </a>
        </Link>
      </div>
    </nav>
  );
}
