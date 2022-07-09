import Link from "next/link";

export default function GameCards() {
  const standardStyles =
    "flex justify-center m-5 w-72 h-72 bg-cover hover:shadow-2xl transition ease-in-out hover:scale-105 duration-200";
  return (
    <div className="flex flex-col text-4xl mt-20">
      <h1>Projects</h1>
      <div className="flex flex-row flex-wrap max-w-3xl mx-auto my-5 justify-center">
        <Link href="/showrunner">
          <a>
            <div
              className={`${standardStyles} bg-[url('/showrunnerCard.png')]`}
            ></div>
          </a>
        </Link>
        <Link href="/this-merchant-life">
          <a>
            <div className={`${standardStyles} bg-[url('/tmlCard.jpg')]`}></div>
          </a>
        </Link>
      </div>
    </div>
  );
}
