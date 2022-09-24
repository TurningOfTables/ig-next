export default function BuyButton({ steamStoreId, name, themeColour }) {
  
  return (
    <a
      aria-label={`${name} on Steam`}
      target="blank"
      rel="noopener"
      href={`https://store.steampowered.com/app/${steamStoreId}`}
      className={`mx-auto shadow-lg flex self-center items-center justify-center w-[288px] h-12 shadow-${themeColour} text-base my-5 border border-black`}
    >
      <div className="underline">{name} on Steam</div>
    </a>
  );
}
