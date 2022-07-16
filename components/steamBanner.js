import Image from "next/image";

export default function SteamBanner({ name, status, steamStoreId }) {
  return (
    <a
      className="block mx-auto text-center bg-black text-white my-5"
      href={`https://store.steampowered.com/app/${steamStoreId}`}
    >
      <div className="inline-block align-middle underline">
        {name} is {status} on Steam
      </div>

      <div className="inline-block align-middle ml-2">
        <Image
          alt="Steam logo"
          height="25px"
          width="25px"
          src="/steamLogo.png"
        ></Image>
      </div>
    </a>
  );
}
