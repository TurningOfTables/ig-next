import Image from "next/image";

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="mt-auto w-full flex justify-center h-11 bg-black text-white"
    >
      <a
        className="underline flex items-center"
        rel="noopener"
        target="blank"
        href="https://twitter.com/Inexplicable_G"
      >
        <Image
          alt="Twitter logo"
          data-testid="twitter-logo"
          src="/twitterLogo.png"
          width="32px"
          height="32px"
        />
        <div className="text-lg ml-2">@Inexplicable_G</div>
      </a>
    </footer>
  );
}
