import Image from "next/image";

export default function GameDetailsSection({ title, content, storeLink }) {
  const finalContent = storeLink ? (
    <div>
      <a
        rel="noopener"
        target="blank"
        href={`https://store.steampowered.com/app/${content}`}
      >
        <div className="inline-block align-middle">
          <Image
            alt="Steam logo"
            height="25px"
            width="25px"
            src="/steamLogo.png"
          ></Image>
        </div>
        <div className="inline-block align-middle ml-2 underline">Steam</div>
      </a>
    </div>
  ) : (
    <div>{content}</div>
  );
  return (
    <div className="my-10">
      <div className="text-lg my-2">{title}</div>
      {finalContent}
    </div>
  );
}
