import Image from "next/image";
import headerImage from "../public/header.png";
import SharedHead from "../components/sharedHead";
import GameCardsContainer from "../components/gameCardsContainer";

export default function Home() {
  return (
    <div className="container mx-auto mt-10 text-center subpixel-antialiased">
      <SharedHead />

      <main>
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
          </q>{" "}
          ~ Robert Frost
        </p>
        <GameCardsContainer />
      </main>

      <footer
        className="text-left mt-2 bottom-0"
        data-testid="footer"
      >
        © Inexplicable Games
      </footer>
    </div>
  );
}
