import NavBar from "../components/navBar";
import SharedHead from "../components/sharedHead";

export default function Presskit() {
  return (
    <div>
      <SharedHead />
      <NavBar />

      <main className="container mx-auto mt-10 text-center subpixel-antialiased">
        Presskit
      </main>

      <footer className="text-left mt-2 bottom-0" data-testid="footer">
        © Inexplicable Games
      </footer>
    </div>
  );
}
