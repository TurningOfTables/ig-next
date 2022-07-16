import Image from "next/image";
import { useState } from "react";

export default function GameScreenshot({ title, imgSrc }) {
  const [open, setOpen] = useState(false);

  const imgAlt = `${title} image`;
  const dataTestId = `game-screenshot-${title
    .split(" ")
    .join("-")
    .toLowerCase()}`;
  const imgDataTestId = dataTestId + "-image";
  return (
    <div className="m-5">
      <div
        onClick={() => setOpen(true)}
        className="flex flex-col my-auto cursor-pointer"
      >
        <Image
          data-testid={imgDataTestId}
          src={imgSrc}
          alt={imgAlt}
          width="270"
          height="270"
        ></Image>
        <div className="flex flex-row mx-auto mt-2">
          <div className="mx-1">
            <Image
              src="/zoom.png"
              alt="Zoom icon"
              width="16"
              height="16"
            ></Image>
          </div>
          <small>Zoom</small>
        </div>
      </div>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed top-0 left-0 h-full w-full bg-opacity-75 bg-black z-50"
        >
          <div className="mx-auto max-w-lg max-h-lg top-2/4 translate-y-2/4">
            <Image
              data-testid={imgDataTestId}
              src={imgSrc}
              alt={imgAlt}
              layout="responsive"
              height="500"
              width="500"
            ></Image>
          </div>
        </div>
      )}
    </div>
  );
}
