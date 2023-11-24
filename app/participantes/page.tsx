import Boun from '#/ui/boun';
import { ExternalLink } from '#/ui/external-link';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="space-y-9">
      <Boun
        labels={['Participantes del reto']}
        size="small"
        color="default"
        animateRerendering={true}
      >
  
      <h1 className="text-xl mt-5 mb-5 font-bold text-gray-200">Los que trabajaron en DATANOVA</h1>

      <div className=" mt-5 mb-5 flex justify-center">
        <Image
      src="/xd.jpg"
      width={300}
      height={100}
      alt="integrantes"
    /></div>
      <div className="p-4 border-dashed mb-5 border-2 border-white shadow-lg text-gray-100"
            >
             Valentina Galeano Castro
            </div>
            <div className="p-4 border-dashed mb-5 border-2 border-white shadow-lg text-gray-100"
            >
             Ramiro Avila
            </div>
            <div className="p-4 border-dashed mb-5 mr-5 border-2 border-white shadow-lg text-gray-100"
            >
             Jezreelpk
             <ExternalLink href="https://github.com/valegal">
          Github
        </ExternalLink>
            </div>
    
    <div className="space-x-9 mt-2 mb-2 ml-2 mr-2">
        <ExternalLink href="https://www.linkedin.com/in/valegal/">
          Linkedin
        </ExternalLink>
        <ExternalLink href="https://github.com/valegal">
          Github
        </ExternalLink>
      </div>
      
          
      </Boun> 
    </div>
  );
}
