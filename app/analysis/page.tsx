import Boun from '#/ui/boun';
import { ExternalLink } from '#/ui/external-link';

export default function Page() {
  return (
    <div className="space-y-9">
      <Boun
        labels={['Análisis de datos']}
        size="small"
        color="blue"
        animateRerendering={true}
      >
       
      <div className="p-4 border-dashed border-2 border-white shadow-lg text-gray-100"
            >
              Otra caja de texto
            </div>
            <div className="space-x-9 mt-2 mb-2 ml-2 mr-2 text-green-100">texto sin caja</div>
      </Boun> 
    </div>
  );
}
