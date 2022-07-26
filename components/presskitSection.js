export default function PresskitSection({ title, content }) {
  return (
    <div className="my-10">
      <h2 className="text-2xl my-5">{title}</h2>
      <div>{content}</div>
    </div>
  );
}
