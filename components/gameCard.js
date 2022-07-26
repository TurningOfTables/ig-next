import Link from "next/link";
import BuyButton from "./buyButton";
import Image from "next/image";

export default function GameCard({ imagePath, link, steamStoreId, gameName }) {
  return (
    <div className="flex flex-col m-10">
      <Link href={link}>
        <a
          className={`w-72 h-72 bg-cover flex flex-col-reverse ${imagePath}`}
          aria-label={`Find out more about ${gameName}`}
        >
          <div className="shadow-black shadow-lg flex items-center justify-center text-base h-6 bg-orange text-black border border-black">
            <div className="underline">Find out more</div>
          </div>
        </a>
      </Link>

      <BuyButton steamStoreId={steamStoreId} gameName={gameName} />
    </div>
  );
}
