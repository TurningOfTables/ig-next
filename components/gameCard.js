import Link from "next/link";
import Image from "next/image";

export default function GameCard({ imagePath, link, steamStoreId, gameName }) {
  return (
    <div className="my-5">
      <Link href={link}>
        <a
          aria-label={`Find out more about ${gameName}`}
          className={`flex justify-center mx-5 w-64 h-64 bg-cover ${imagePath}`}
        ></a>
      </Link>
      <div className="bg-black text-white h-11 mx-5 p-2 align-middle">
        <a
          aria-label={`Buy ${gameName} on Steam`}
          target="blank"
          rel="noopener"
          href={`https://store.steampowered.com/app/${steamStoreId}`}
          className="text-xl w-full block my-auto underline"
        >
          <div className="inline-block align-middle mr-2">
            <Image
              alt="Steam logo"
              height="25px"
              width="25px"
              src="/steamLogo.png"
            ></Image>
          </div>
          Buy on Steam
        </a>
      </div>
    </div>
  );
}
