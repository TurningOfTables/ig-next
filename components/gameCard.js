import Link from "next/link";
import Image from "next/image";

export default function GameCard({ imagePath, link, steamStoreId }) {
  return (
    <div className="my-5">
      <Link href={link}>
        <a
          className={`flex justify-center mx-5 w-64 h-64 bg-cover hover:shadow-2xl transition ease-in-out hover:scale-105 duration-200 ${imagePath}`}
        ></a>
      </Link>
      <div className="bg-black text-white mx-5 p-2 align-middle">
        <a
          href={`https://store.steampowered.com/app/${steamStoreId}`}
          className="text-xl w-full h-full block my-auto"
        >
          Get it on Steam
          <div className="inline-block align-middle ml-2">
            <Image
              alt="Steam logo"
              height="25px"
              width="25px"
              src="/steamLogo.png"
            ></Image>
          </div>
        </a>
      </div>
    </div>
  );
}
