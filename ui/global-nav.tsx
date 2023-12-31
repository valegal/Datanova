'use client';

import { NextLogo } from '#/ui/next-logo';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { MenuAlt2Icon, XIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { useState } from 'react';
import Byline from './byline';

// Definición de los ítems del menú
const menuItems = [
  { name: 'Análisis de datos', path: '/analysis' },
  { name: 'Desarrollo del modelo', path: '/modelo' },
  // { name: 'Métricas utilizadas', path: '/metrics' },
  { name: 'Participantes del reto', path: '/participantes' },
  // { name: 'Referencias', path: '/referencias' },
];

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
      <div className="flex h-14 items-center px-4 py-4 lg:h-auto">
        <Link href="/" className="group flex w-full items-center gap-x-2.5" onClick={close}>
          <div className="h-12 w-12 rounded-full border border-white/30 group-hover:border-white/50">
            <NextLogo />
          </div>
          <h2 className="font-semibold tracking-wide text-4xl text-gray-400 group-hover:text-gray-50">
            Datanova
          </h2>
        </Link>
      </div>
      <button
        type="button"
        className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium text-gray-100 group-hover:text-gray-400">
          Menú
        </div>
        {isOpen ? <XIcon className="block w-6 text-gray-400" /> : <MenuAlt2Icon className="block w-6 text-gray-400" />}
      </button>

      <div
        className={clsx('overflow-y-auto lg:static lg:block', {
          'fixed inset-x-0 bottom-0 top-14 mt-px bg-black': isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="space-y-6 px-2 pb-24 pt-5">
          {menuItems.map((item) => (
            <GlobalNavItem key={item.path} item={item} close={close} />
          ))}
        </nav>
        <Byline className="absolute hidden sm:block" />
      </div>
    </div>
  );
}

interface MenuItem {
  name: string;
  path: string;
}

function GlobalNavItem({ item, close }: { item: MenuItem; close: () => void }) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.path === segment;

  return (
    <Link
      onClick={close}
      href={item.path}
      className={clsx(
        'block rounded-md px-3 py-2 text-xl font-small hover:text-gray-500',
        {
          'text-gray-100 hover:bg-gray-800': !isActive,
          'text-white': isActive,
        },
      )}
    >
      {item.name}
    </Link>
  );
}
