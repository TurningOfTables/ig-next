import SharedHead from "../components/sharedHead";

export default function Presskit() {
  return (
    <div className="container mx-auto mt-10 text-center subpixel-antialiased">
      <SharedHead />

      <main>Presskit</main>

      <footer className="text-left mt-2 bottom-0" data-testid="footer">
        © Inexplicable Games
      </footer>
    </div>
  );
}
