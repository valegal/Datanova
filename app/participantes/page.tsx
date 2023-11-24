import Boun from '#/ui/boun';
import { ExternalLink } from '#/ui/external-link';

export default function Page() {
  return (
    <div className="space-y-9">
      <Boun
        labels={['Participantes del reto']}
        size="small"
        color="default"
        animateRerendering={true}
      >
        <div className="grid grid-cols-2 gap-4 mt-6"> {/* Añadido margen superior aquí */}
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="p-4 border-dashed border-2 border-white shadow-lg text-gray-600"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          ))}
        </div>
    <div className="gap-4 mt-2 mb-2 ml-2 mr-2 text-gray-600"> 
      <h1 className="text-xl font-bold text-gray-200">Instant Loading States</h1>
      <ul>
        <li>
          This example has an artificial delay when &quot;fetching&quot; data
          for each category page. <code>loading.js</code> is used to show a
          loading skeleton immediately while data for category page loads before
          being streamed in.
        </li>
        <li>
          Shared layouts remain interactive while nested layouts or pages load.
          Try clicking the counter while the children load.
        </li>
        <li>
          Navigation is interruptible. Try navigating to one category, then
          clicking a second category before the first one has loaded.
        </li>
      </ul>
      </div>
    <div className="space-x-9 mt-2 mb-2 ml-2 mr-2">
        <ExternalLink href="https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming">
          Docs
        </ExternalLink>
        <ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/loading">
          Code
        </ExternalLink>
      </div>
      <div className="p-4 border-dashed border-2 border-white shadow-lg text-gray-100"
            >
              Otra caja de texto
            </div>
            <div className="space-x-9 mt-2 mb-2 ml-2 mr-2 text-green-100">texto sin caja</div>
      </Boun> 
    </div>
  );
}
