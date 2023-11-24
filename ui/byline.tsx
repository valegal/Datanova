export default function Byline({ className }: { className: string }) {
  return (
    <div
      className={`${className} flex justify-center items-center bg-black inset-x-0 bottom-3 mx-3 rounded-lg p-px shadow-lg shadow-black/20`}
    >
      <div className="flex flex-col justify-center items-center space-y-2 rounded-lg bg-black p-3.5 lg:px-5 lg:py-3">
        <div className="flex items-center gap-x-1.5">
        <div className="text-sm text-gray-400">Open source web by</div>
          <a href="https://github.com/valegal" title="Vercel">
            <div className="text-sm text-white">Valentina G.</div>
            
          </a>
        </div>

        <div className="text-sm text-gray-400">
          <a
            className="underline decoration-dotted underline-offset-4 transition-colors hover:text-gray-300"
            href="https://github.com/valegal/Datanova"
            target="_blank"
            rel="noreferrer"
          >
            Ver código fuente
          </a>
        </div>
      </div>
    </div>
  );
}
