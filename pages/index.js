import Image from "next/image";
import headerImage from "../public/header.png";
import SharedHead from "../components/sharedHead";

export default function Home() {
  return (
    <div className="p-8 mx-auto text-center">
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
          className="max-w-md mx-auto text-xl"
          data-testid="intro-text-secondary"
        >
          <q>
            Two roads diverged in a wood, and I ... I took the one just covered
            with brambles, Got covered in cuts and barely made it out alive.
          </q>{" "}
          ~ Robert Frost
        </p>
      </main>

      <footer className="border-t-2 border-black mt-10 fixed bottom-0" data-testid="footer">
        © Inexplicable Games
      </footer>
    </div>
  );
}
