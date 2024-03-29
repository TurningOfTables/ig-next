export default function Video({ videoId, title, colour }) {
  return (
    <div className={`max-w-2xl mt-10 mb-12 mx-auto`}>
      <h2 className="text-2xl mb-5">Trailer</h2>
      <div
        className="relative pb-[56.25%] h-0 overflow-hidden"
        style={{ boxShadow: `0 10px 10px -10px ${colour}` }}
      >
        <iframe
          className="absolute t-0 l-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?modestbranding=1&rel=0`}
          title={title}
          frameBorder="0"
          allow="encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
