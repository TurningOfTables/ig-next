import GameScreenshot from "./gameScreenshot";

export default function GameScreenshots({ screenshots }) {
  const screenshotItems = screenshots.map((screenshot, index) => (
    <GameScreenshot
      key={index}
      imgSrc={screenshot.imgSrc}
      title={screenshot.title}
    />
  ));

  return (
    <div className="mt-10">
      <h2 className="text-2xl mb-5">Screenshots</h2>
      <div className="flex flex-wrap mx-auto max-w-5xl justify-center">
        {screenshotItems}
      </div>
    </div>
  );
}
