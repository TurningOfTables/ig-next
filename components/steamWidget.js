export default function SteamWidget(props) {
  return (
    <div className="mx-auto w-full">
      <iframe
        className="mx-auto min-w-[500px] min-h-[200px]"
        src={`https://store.steampowered.com/widget/${props.storeId}/?t=%20`}
      ></iframe>
    </div>
  );
}
