import Link from "next/link";
import { useRouter } from "next/router";
import { GameConfig } from "../siteConfig/gameConfig";

export default function NavBar() {
  const router = useRouter();
  const activeLinkStyles = "pointer-events-none cursor-default";
  const inactiveLinkStyles = "underline";

  return (
    <nav className="flex h-11 place-content-end align-middle mr-5">
      <div className="flex my-auto gap-x-5">
        <a href="/"

          className={
            router.pathname == "/"
              ? activeLinkStyles
              : inactiveLinkStyles + " inline"
          }
        >
          Home

        </a>
        <a href={GameConfig.showrunner.internalPage}

          className={
            router.pathname == GameConfig.showrunner.internalPage
              ? activeLinkStyles
              : inactiveLinkStyles
          }
        >
          {GameConfig.showrunner.name}

        </a>
        <a href={GameConfig.thisMerchantLife.internalPage}

          className={
            router.pathname == GameConfig.thisMerchantLife.internalPage
              ? activeLinkStyles
              : inactiveLinkStyles
          }
        >
          {GameConfig.thisMerchantLife.name}

        </a>
        <a href="/presskit"

          className={
            router.pathname == "/presskit"
              ? activeLinkStyles
              : inactiveLinkStyles
          }
        >
          Press Kit
        </a>

      </div>
    </nav>
  );
}
