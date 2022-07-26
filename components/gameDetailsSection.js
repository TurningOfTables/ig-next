import Image from "next/image";

export default function GameDetailsSection({ title, content, storeLink }) {
  const finalContent = storeLink ? (
    <div>
      <a
        rel="noopener"
        target="blank"
        href={`https://store.steampowered.com/app/${content}`}
      >
        <div className="inline-block align-middle underline">Steam</div>
      </a>
    </div>
  ) : (
    <div>{content}</div>
  );
  return (
    <div className="py-6 mx-5">
      <div className="text-lg mb-2">{title}</div>
      {finalContent}
    </div>
  );
}
