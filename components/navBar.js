
import { useRouter } from "next/router";
import { GameConfig } from "../siteConfig/gameConfig";

export default function NavBar() {
  const router = useRouter();
  const currentPath = (router === null) ? "/" : router.pathname
  const activeLinkStyles = "pointer-events-none cursor-default";
  const inactiveLinkStyles = "underline";

  const navBarLinks = [
    { path: "/", label: "Home" },
    { path: GameConfig.showrunner.internalPage, label: GameConfig.showrunner.name },
    { path: GameConfig.thisMerchantLife.internalPage, label: GameConfig.thisMerchantLife.name },
    { path: "/presskit", label: "Press Kit" }
  ]

  return (
    <nav className="flex h-11 place-content-end align-middle mr-5" data-testid="navbar">
      <div className="flex my-auto gap-x-5">
        {navBarLinks.map((l, i) => {
          return (
            <a key={i} href={l.path} data-testid={`navbar-link-${l.label}`} className={currentPath == l.path
              ? activeLinkStyles
              : inactiveLinkStyles + " inline"}>{l.label}</a>
          )
        })}
      </div>
    </nav>
  );
}
