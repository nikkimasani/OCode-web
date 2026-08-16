import type { Metadata } from 'next';
import './styles.css';

export const metadata: Metadata = {
  title: 'OCode — your coding workspace',
  description: 'A cross-device AI coding workspace.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
