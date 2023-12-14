import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buciq 404 - Page not found',
  description:
    'Buciq - Page can not be found. Please check is page address is correct',
};

// Exists because not-found.tsx in a locale folder does not auto-catch 404 routes. This forces it to do so, and preserves i18n translations as well
export default function notFoundWorkaround() {
  notFound();
}
