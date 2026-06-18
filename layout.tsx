import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kostrzynconnect.pl"),
  title: "Kostrzyn Connect | Mieszkańcy bliżej samorządu",
  description:
    "Nowoczesna platforma do zgłaszania i obsługi problemów w gminie. Lepsza komunikacja, szybsze reakcje i pełna transparentność.",
  openGraph: {
    title: "Kostrzyn Connect | Łączymy mieszkańców z samorządem",
    description:
      "Jedno miejsce do zgłaszania, obsługi i monitorowania spraw mieszkańców.",
    type: "website",
    locale: "pl_PL",
  },
  robots: { index: true, follow: true },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Kostrzyn Connect",
  applicationCategory: "GovernmentApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "499",
    highPrice: "1999",
    priceCurrency: "PLN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
