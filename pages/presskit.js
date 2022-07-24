import NavBar from "../components/navBar";
import SharedHead from "../components/sharedHead";
import PresskitSection from "../components/presskitSection";
import Footer from "../components/footer";
import GameDetails from "../components/gameDetails";

export default function Presskit() {
  return (
    <div>
      <SharedHead />
      <NavBar />

      <main className="container max-w-4xl mx-auto mt-10 text-left subpixel-antialiased">
        <h1 className="text-3xl mt-32 mb-10">Press Kit</h1>

        <PresskitSection
          title="About the Developer"
          content="Nulla nunc felis, interdum at ligula vitae, convallis faucibus elit.
        Aliquam odio ligula, ultricies in tempus ut, ullamcorper vel risus.
        Donec tortor lorem, commodo non dolor ut, placerat egestas quam. Fusce
        libero metus, ultricies a vestibulum ac, dapibus nec sem. Nam malesuada
        justo id viverra tempus. Vestibulum pellentesque, purus quis lacinia
        sollicitudin, dui tortor luctus justo."
        />

        <PresskitSection
          title="Contact"
          content="Nullapulvinar@inexplicable-games.com"
        />

        <PresskitSection
          title="Social"
          content="https://twitter.com/Inexplicable_G"
        />

        <PresskitSection
          title="Website"
          content="https://www.inexplicable-games.com"
        />

        <GameDetails />
      </main>

      <Footer />
    </div>
  );
}
