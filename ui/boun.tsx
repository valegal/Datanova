import React from 'react';
import clsx from 'clsx';

// Interfaz para las props del Label
interface LabelProps {
    text: string;
    color?: 'default' | 'pink' | 'blue' | 'violet' | 'cyan' | 'orange';
    animateRerendering?: boolean;
    size?: 'small' | 'medium' | 'large'; // Agregar la propiedad 'size' aquí
  }

// Componente Label
const Label: React.FC<LabelProps> = ({
    text,
    color = 'default',
    size = 'medium',
    animateRerendering = false,
  }) => {
    return (
      <div
        className={clsx(
          'flex justify-center items-center rounded shadow-[0_0_1px_3px_black]',
          {
            'px-4 py-2 text-lg': size === 'medium', // Ajusta el padding y tamaño del texto
            'font-semibold': true, // Hace el texto en negrita
            'bg-gray-800 text-gray-300': color === 'default',
            'bg-vercel-pink text-white': color === 'pink',
            'bg-vercel-blue text-white': color === 'blue',
            'bg-vercel-cyan text-white': color === 'cyan',
            'bg-vercel-violet text-violet-100': color === 'violet',
            'bg-vercel-orange text-white': color === 'orange',
            'animate-[highlight_1s_ease-in-out_1]': animateRerendering,
      })}
    >
      {text}
    </div>
  );
};

// Interfaz para las props del Boun
interface BounProps {
  children: React.ReactNode;
  labels: string[];
  color?: 'default' | 'pink' | 'blue' | 'violet' | 'cyan' | 'orange';
  size?: 'small' | 'default';
  animateRerendering?: boolean;
}

// Componente Boun
const Boun: React.FC<BounProps> = ({
  children,
  labels,
  color = 'default',
  size = 'default',
  animateRerendering = false,
}) => {
  return (
    <div
      className={clsx('relative rounded-lg border border-dashed', {
        'p-3 lg:p-5': size === 'small',
        'p-4 lg:p-9': size === 'default',
        'border-gray-700': color === 'default',
        'border-vercel-pink': color === 'pink',
        'border-vercel-blue': color === 'blue',
        'border-vercel-cyan': color === 'cyan',
        'border-vercel-violet': color === 'violet',
        'border-vercel-orange': color === 'orange',
        'text-vercel-white animate-[rerender_1s_ease-in-out_1]':
          animateRerendering,
      })}
    >
      <div >
        {labels.map((label, index) => (
          <Label
            key={index}
            text={label}
            color={color}
            animateRerendering={animateRerendering}
          />
        ))}
      </div>
      {children}
    </div>
  );
};

export default Boun;
