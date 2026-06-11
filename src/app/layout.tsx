import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "aos/dist/aos.css";
import "@/styles/globals.scss";
import AppShell from "@/components/AppShell";

export const metadata: Metadata = {
  title: "Tribunal de Cuentas de Río Negro",
  description: "Sitio institucional del Tribunal de Cuentas de la Provincia de Río Negro",
  openGraph: {
    title: "Tribunal de Cuentas de Río Negro",
    description: "Sitio institucional del Tribunal de Cuentas de la Provincia de Río Negro",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
      </head>
      <body style={{ backgroundColor: '#EDEDED' }}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
