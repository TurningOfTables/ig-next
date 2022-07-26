export default function BuyButton({ steamStoreId, gameName }) {
  return (
    <a
      aria-label={`Buy ${gameName} on Steam`}
      target="blank"
      rel="noopener"
      href={`https://store.steampowered.com/app/${steamStoreId}`}
      className="shadow-black mx-auto shadow-lg flex self-center items-center justify-center w-[288px] h-12 bg-orange text-base my-5 border border-black"
    >
      <div className="underline">Buy on Steam</div>
    </a>
  );
}
