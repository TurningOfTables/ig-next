import Link from "next/link";

export default function GameCard(props) {
  return (
    <Link href={props.path}>
      <a>
        <div className="flex justify-center border-black border-2 m-5 w-64 h-64">
          <p className="self-center">{props.name}</p>
        </div>
      </a>
    </Link>
  );
}
