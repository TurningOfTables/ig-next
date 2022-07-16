import Image from "next/image";
import { Fragment, useState } from "react";

export default function FeatureSection(props) {
  const [open, setOpen] = useState(false);

  const imgAlt = `${props.title} image`;
  const dataTestId = `feature-section-${props.title
    .split(" ")
    .join("-")
    .toLowerCase()}`;
  const imgDataTestId = dataTestId + "-image";
  const imageSection = (
    <div
      onClick={() => setOpen(true)}
      className="flex flex-col my-auto cursor-pointer"
    >
      <Image
        data-testid={imgDataTestId}
        src={props.imgSrc}
        alt={imgAlt}
        width="270"
        height="270"
      ></Image>
      <div className="flex flex-row mx-auto mt-2">
        <div className="mx-1">
          <Image src="/zoom.png" alt="Zoom icon" width="16" height="16"></Image>
        </div>
        <small>Zoom</small>
      </div>
    </div>
  );

  const textSection = (
    <div className="flex flex-col text-center max-w-2xl my-auto">
      <h2 className="text-2xl">{props.title}</h2>
      <p className="m-5">{props.text}</p>
    </div>
  );

  const zoom = (
    <div>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed top-0 left-0 h-full w-full bg-opacity-75 bg-black z-50"
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

  const wrapMode = props.reversed ? "flex-wrap-reverse" : "flex-wrap";
  if (props.reversed) {
    return (
      <Fragment>
        <div className={`${wrapMode} flex m-10 justify-center`}>
          {imageSection}
          {textSection}
        </div>
        {zoom}
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <div className={`${wrapMode} flex m-10 justify-center`}>
          {textSection}
          {imageSection}
        </div>
        {zoom}
      </Fragment>
    );
  }
}
