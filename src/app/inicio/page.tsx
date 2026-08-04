import type { Metadata } from 'next';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  title: 'Inicio | Tribunal de Cuentas de Río Negro',
};

export default function InicioPage() {
  return <HomeContent />;
}
