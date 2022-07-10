import Image from "next/image";
import { useState } from "react";

export default function FeatureSection(props) {
  const [open, setOpen] = useState(false);

  const imgAlt = `${props.title} image`;
  const dataTestId = `feature-section-${props.title
    .split(" ")
    .join("-")
    .toLowerCase()}`;
  const imgDataTestId = dataTestId + "-image";
  return (
    <div>
      <div
        data-testid={dataTestId}
        className="flex flex-wrap m-10 justify-center"
      >
        <div className="flex flex-col text-center max-w-2xl my-auto">
          <h2 className="text-2xl">{props.title}</h2>
          <p className="m-5">{props.text}</p>
        </div>
        <div onClick={() => setOpen(true)} className="flex flex-col my-auto">
          <Image
            data-testid={imgDataTestId}
            src={props.imgSrc}
            alt={imgAlt}
            width="270"
            height="270"
          ></Image>
          <div className="flex flex-row mx-auto mt-2 cursor-pointer">
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
      </div>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed top-0 l-0 h-full w-full bg-opacity-75 bg-black z-50"
        >
          <div className="mx-auto max-w-lg max-h-lg top-2/4 translate-y-2/4">
            <Image
              data-testid={imgDataTestId}
              src={props.imgSrc}
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
