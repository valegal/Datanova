import Boun from '#/ui/boun';
import { ClickCounter } from '#/ui/click-counter';
import { ExternalLink } from '#/ui/external-link';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="space-y-9">
      <Boun
        labels={['Participantes del reto']}
        size="small"
        color="blue"
        animateRerendering={true}
      >


      <div className="p-4 text-center border-dashed mb-5 mt-5 border-2 border-white shadow-lg text-gray-100">
        <p className='mr-5'>Valentina Galeano</p>
        <p className='mr-5'>Ramiro Avila</p>
        <p className='mr-5'>Jezreelpk Fiallo</p>
      </div>
      <ClickCounter />

      </Boun> 
    </div>
  );
}
