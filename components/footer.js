import Link from "next/link";
import ContactUs from "./contactUs";

export default function Footer() {
  return (
    <footer className="bottom-0 h-11 mt-5 bg-black text-white fixed w-full" data-testid="footer">
      <ContactUs />
    </footer>
  );
}
