import Boun from '#/ui/boun';
import Image from 'next/image'
import { ExternalLink } from '#/ui/external-link';

export default function Page() {
  return (
    <div className="space-y-9">
      <Boun
        labels={['Desarrollo del modelo']}
        size="small"
        color="violet"
        animateRerendering={true}
      >



<div className="flex justify-center w-full mt-6">
           <ExternalLink href='https://colab.research.google.com/drive/1s7-PLWHQ2F8-OFdaAlOGhrN-BQBa3dRK#scrollTo=2qnwL8hHM8lS'>Está en desarrollo la documentación de la implementación</ExternalLink>
  </div>

    
      </Boun> 
    </div>
  );
}
