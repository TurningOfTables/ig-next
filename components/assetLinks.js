export default function AssetLinks({ title, game }) {
    if (game === "showrunner") {
        return (
            <div className="py-6 mx-5">
                <div className="text-lg mb-2">{title}</div>
                <a className="underline" href="/pressAssets/showrunner/assets.zip">Download zip file</a>
            </div>
        );
    }
}
