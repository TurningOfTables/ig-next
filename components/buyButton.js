import Image from "next/image";

export default function BuyButton({ steamStoreId, name, themeColourCode }) {
  return (
    <a
      aria-label={`${name} on Steam`}
      target="blank"
      rel="noopener"
      href={`https://store.steampowered.com/app/${steamStoreId}`}
      className={`flex mx-auto justify-center items-center w-[288px] h-12 text-base my-10 border border-black`}
      style={{ boxShadow: `0 10px 10px -10px ${themeColourCode}` }}
      data-testid={`buy-button-${name}`}
    >
      <div className="flex mr-1">
        <Image
          alt="Steam logo"
          data-testid="steam-logo"
          src="/steamLogo.png"
          width="32"
          height="32"
        />
      </div>

      <div className="underline">{name} on Steam</div>
    </a>
  );
}
