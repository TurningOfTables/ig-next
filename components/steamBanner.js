import Image from "next/image";

export default function SteamBanner({ name, status, steamStoreId }) {
  return (
    <a
      className="w-full h-12 bg-orange text-black flex self-center items-center justify-center"
      target="blank"
      rel="noopener"
      href={`https://store.steampowered.com/app/${steamStoreId}`}
    >
      <Image
        alt="Steam logo"
        height="32px"
        width="32px"
        src="/steamLogo.png"
      ></Image>
      <div className="underline ml-2">
        See {name} on Steam
      </div>
    </a>
  );
}
