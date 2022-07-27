import Image from "next/image";
import Footer from "../components/footer";
import headerImage from "../public/header.png";
import SharedHead from "../components/sharedHead";
import GameCards from "../components/gameCards";
import NavBar from "../components/navBar";

export default function Home() {
  return (
    <div>
      <SharedHead />
      <NavBar />

      <main className="m-10 text-center subpixel-antialiased">
        <Image
          data-testid="header-image"
          src={headerImage}
          alt="Inexplicable Games Logo"
        ></Image>
        <p className="my-10 text-2xl" data-testid="intro-text-primary">
          A one man games company based in the UK, working with talented
          freelancers from around the world.
        </p>
        <p
          className="max-w-md mx-auto text-xl italic"
          data-testid="intro-text-secondary"
        >
          <q>
            Two roads diverged in a wood, and I ... I took the one just covered
            with brambles, Got covered in cuts and barely made it out alive.
          </q>
          ~ Robert Frost
        </p>
        <GameCards />
      </main>
      <Footer />
    </div>
  );
}
