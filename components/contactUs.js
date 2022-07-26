import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="sticky bottom-0 flex justify-center h-full">
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
    </div>
  );
}
