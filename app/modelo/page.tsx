import Boun from '#/ui/boun';
import { ExternalLink } from '#/ui/external-link';
import Image from 'next/image'

export default function Page() {
  return (
    <div className="space-y-9">
      <Boun
        labels={['Descripción del modelo']}
        size="small"
        color="violet"
        animateRerendering={true}
      >

<div className="grid grid-cols-2 gap-4 mt-6">
          <div
            key={1}
            className="p-4 border-dashed border-2 border-white shadow-lg text-gray-600 relative"
          >
            <Image
      src="/DESTINO_ECONOMICO.png"
      width={1000}
      height={1000}
      alt="Picture of the author"
    />
          </div>
          <div
            key={2}
            className="p-4 border-dashed border-2 border-white shadow-lg text-gray-600 relative"
          >
            <Image
      src="/ESTADO-HACIENDA.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
          </div>
        </div>

      
      <div className="p-4 border-dashed border-2 border-white shadow-lg text-gray-100">
              Otra caja de texto
      </div>
      <div className="space-x-9 mt-2 mb-2 ml-2 mr-2 text-green-100">texto sin caja</div>
      </Boun> 
    </div>
  );
}
