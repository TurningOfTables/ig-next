import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-left mt-2 bottom-0" data-testid="footer">
      © Inexplicable Games |
      <Link href="/presskit">
        <a> Presskit</a>
      </Link>
    </footer>
  );
}
