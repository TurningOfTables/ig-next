import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="flex justify-center mt-2">
      <a
        className="underline flex"
        rel="noopener"
        target="blank"
        href="https://twitter.com/Inexplicable_G"
      >
        <div className="mr-2">
          <Image
            alt="Twitter logo"
            data-testid="twitter-logo"
            src="/twitterLogo.png"
            width="32px"
            height="32px"
          />
        </div>
        <div className="text-lg inline">@Inexplicable_G</div>
      </a>
    </div>
  );
}
