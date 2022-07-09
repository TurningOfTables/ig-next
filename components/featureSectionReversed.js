import Image from "next/image";

export default function FeatureSectionReversed(props) {
  const imgAlt = `${props.title} image`;
  const dataTestId = `feature-section-${props.title
    .split(" ")
    .join("-")
    .toLowerCase()}`;
  const imgDataTestId = dataTestId + "-image";
  return (
    <div
      data-testid={dataTestId}
      className="flex flex-wrap-reverse m-10 justify-center"
    >
      <div className="flex flex-col max-w-xs my-auto">
        <Image
          data-testid={imgDataTestId}
          src={props.imgSrc}
          alt={imgAlt}
          width="270"
          height="270"
        ></Image>
      </div>
      <div className="flex flex-col text-center max-w-2xl my-auto">
        <h2 className="text-2xl">{props.title}</h2>
        <p className="m-5">{props.text}</p>
      </div>
    </div>
  );
}
