import NavBar from "../components/navBar";
import SharedHead from "../components/sharedHead";
import Footer from "../components/footer";

export default function Presskit() {
  return (
    <div>
      <SharedHead />
      <NavBar />

      <main className="container mx-auto mt-10 text-center subpixel-antialiased">
        Presskit
      </main>

      <Footer />
    </div>
  );
}
