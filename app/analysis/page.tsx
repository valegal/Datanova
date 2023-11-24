import Boun from '#/ui/boun';
import { ExternalLink } from '#/ui/external-link';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="space-y-9">
      <Boun
        labels={['Análisis de datos']}
        size="small"
        color="blue"
        animateRerendering={true}
      >
        <div className="p-4 border-dashed mt-5 border-2 border-white shadow-lg text-gray-100">
        <h2 className='mb-5'>🎯 Objetivos:</h2>
      <ul>
        <li className='mb-5'>{'>_ '}  Modelo que determine el valor de la transacción inmobiliaria de los predios, a partir de las variables explicativas que consideren importantes.</li>
        <li className='mb-5'>{'>_ '}  En caso de utilizar información externa de la base de datos, esta debe ser información PÚBLICA disponible en Internet.</li>
        <li>{'>_ '}Este código debe permitir calcular el valor del <strong>error cuadrático medio</strong> (MSE) de este set de datos.</li>
      </ul>
        </div>
        <div className="flex justify-center text-blue-200 space-x-9 mt-5 ml-2 mr-2">
          <strong> {'* '} Los datos presenta una forma para filas y columnas respectivamente:  (1207, 19)</strong>
        
        </div>
        <div className="text-left text-xl space-x-9 mt-5 mb-2 ml-2 mr-2">
          <strong>✅ Diagrama de pastel</strong>
        
        </div>
        <div className=" mt-5 flex justify-center">
        <Image
      src="/pastel01.png"
      width={800}
      height={500}
      alt="Grafico de pastel"
    /></div>
        <div className="mt-4 w-full">
  <p className='mb-2'>Del análisis del diagrama de pastel, se infiere que en la característica <strong>DESTINO_ECONOMICO</strong>, las clasificaciones más representativas son:</p>
  <ul className='inline-block text-left'>
    <li><strong>Habitacional (A):</strong> 88.8%</li>
    <li><strong>Industrial (B):</strong> 1.8%</li>
    <li><strong>Comercial (C):</strong> 8.2%</li>
  </ul>
</div>
<div className="mt-4 w-full">
  <p className='mb-2'>Y para la caracteristica de <strong>DESTINO_ECONOMICO</strong>, que tambien contiene clasificaciones,como se logra visualizar en el diagrama las más representativcas son:</p>
  <ul className='inline-block text-left'>
    <li><strong>Estrato_4 </strong> 37.4%</li>
    <li><strong>Estrato_2 :</strong> 31.8%</li>
    <li><strong>Estrato_3 : </strong> 13.8%</li>
  </ul>
</div>
{/* <div className="flex justify-center text-blue-200 space-x-9 mt-5 mb-2 ml-2 mr-2">
          <strong>✅ Validando que sea correcto en un caso</strong>
        
        </div> */}
    <div className="text-left text-xl space-x-9 mt-5 mb-5 ml-2 mr-2">
          <strong>✅ Visualizar histogramas</strong>
    <div className="mt-5 flex justify-center flex-col items-center">
          <Image
      src="/histo1.png"
      width={500}
      height={500}
      alt="histo1"
    />
    <Image
      src="/histo2.png"
      width={500}
      height={500}
      alt="histo2"
      className='mt-5'
    />
    <Image
      src="/histo3.png"
      width={500}
      height={500}
      alt="histor3"
      className='mt-5'
    />
    <Image
      src="/histo4.png"
      width={500}
      height={500}
      alt="histor4"
      className='mt-5'
    />
        </div>
        </div>
        <p>De los diagramas de barra podemos analizar en general como se distribuyen las categorias o valores en el eje x & en el eje y indica la frecuencia o magnitud de los valores de las variables representados en barras.

Y de esta manera identificar las tendencias o patrones de los datos.</p>
<div className="text-left text-xl space-x-9 mt-5 mb-5 ml-2 mr-2">
          <strong>✅ Diagramas de dispersión y de caja</strong>

          <div className="mt-5 flex justify-center flex-col items-center">
          <Image
      className="mb-5"
      src="/histo5.png"
      width={500}
      height={500}
      alt="histo1"
    />
    <Image
    className="mb-5"
      src="/histo6.png"
      width={500}
      height={500}
      alt="histo1"
    />
    <Image
    className="mb-5"
      src="/histo7.png"
      width={500}
      height={500}
      alt="histo1"
    />
    <Image
    className="mb-5"
      src="/histo8.png"
      width={500}
      height={500}
      alt="histo1"
    /></div>
        
        </div>
        <div>
          <p className='mb-5'>
            <strong>Área Construida vs Valor: </strong>
            Muestra una relación positiva entre el área construida de una propiedad y su valor, indicando que a mayor área construida, generalmente hay un mayor valor de la propiedad.
          </p>
          <p className='mb-5'>
            <strong>Área Terreno vs Valor: </strong>
            Similar al área construida, hay una tendencia positiva que sugiere que propiedades con mayor área de terreno tienden a tener un valor más alto.
          </p>
          <p className='mb-5'>
            <strong>Estrato/Hacienda vs Valor: </strong>
            Este gráfico de caja muestra la distribución del valor de la propiedad entre los diferentes estratos o categorías de hacienda. Cada <strong>caja</strong> representa la distribución del 50% central de los datos, con la línea del medio representando la mediana. Los puntos fuera de las <strong> bigotes </strong> representan valores atípicos.
          </p>
          <p className='mb-5'>
          Aunque la relación no es tan fuerte como con el área construida o el área de terreno, parece haber una correlación positiva entre el puntaje máximo y el valor de la propiedad.
          </p>
        </div>
        <div className="text-left text-xl space-x-9 mt-5 mb-5 ml-2 mr-2">
          <strong>✅ Crear matriz de correlación.</strong>
        
        </div>
        <div className="mt-5 flex justify-center flex-col items-center">
          <Image
      src="/matriz.png"
      width={800}
      height={800}
      alt="correlacion"
    /></div>
        <div className="space-x-9 mt-10 mb-5 ml-2 mr-2">
        <ExternalLink href="https://colab.research.google.com/drive/1s7-PLWHQ2F8-OFdaAlOGhrN-BQBa3dRK?usp=sharing&authuser=2#scrollTo=SdOS2ctNHPH-">
          Ver la imagen completa
        </ExternalLink>
      </div>
      {/* <div className="mt-5 flex justify-center flex-col items-center">
          <Image
      src="/m1.png"
      width={500}
      height={500}
      alt="m1"
    /></div> */}
      </Boun> 
    </div>
  );
}
