import React from 'react';
import { demos } from '#/lib/demos';
import Link from 'next/link';
import { ExternalLink } from '#/ui/external-link';

export default function Page() {
  return (
    <div className="space-y-8 text-center bg-black p-4">
      <h1 className="text-2xl font-mono text-white-400">
      {'>_ '} Modelo econométrico para predecir el avalúo del suelo
      </h1>

      {/* Contenedor para el iframe y la imagen */}
      <div>
        {/* Iframe visible solo en pantallas grandes */}
        <iframe 
          className="w-full h-auto lg:block hidden" // Asegúrate de que la clase 'hidden' esté solo para tamaños menores a 'lg'
          title="dosmapasvaloresRETO2"
          src="https://app.powerbi.com/view?r=eyJrIjoiZTY3MWYwOTUtMWYzYS00NjJjLWEwNTItN2JiOWY2YjQ5MzBlIiwidCI6IjJlZDU1NzRjLWY5YmEtNDQyNi05NjU4LWU0NzdhZDc0MzlkYiIsImMiOjR9"
          frameBorder="0"
          allowFullScreen={true}
          style={{ width: '900px', height: '550px' }} // Ajusta esta altura según sea necesario
        ></iframe>

        {/* Imagen visible solo en pantallas pequeñas */}
        <img 
          src="/mobile-power-calor.png"
          alt="Vista previa de PowerBI"
          className="lg:hidden block w-full h-auto"
          style={{ width: '100%', height: 'auto' }} // Ajusta para responsividad
        />
        <img 
          src="/mobile-power-estrato.png"
          alt="Vista previa de PowerBI"
          className="lg:hidden block w-full h-auto mt-5"
          style={{ width: '100%', height: 'auto' }} // Ajusta para responsividad
        />
        <div className="space-x-9 mt-10 ml-2 mr-2">
        <ExternalLink href="https://app.powerbi.com/links/jqg1nb2Omv?ctid=2ed5574c-f9ba-4426-9658-e477ad7439db&pbi_source=linkShare&bookmarkGuid=330cf3a4-bd01-462a-930c-c293268c1594">
          Ir a PowerBI
        </ExternalLink>
      </div>
      </div>
    </div>
  );
}
