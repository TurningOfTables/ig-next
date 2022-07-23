export default function Video({ videoId, title }) {
  return (
    <div className="max-w-lg mt-10 mb-20 mx-auto">
      <div className="relative pb-[56.25%] h-0 overflow-hidden">
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