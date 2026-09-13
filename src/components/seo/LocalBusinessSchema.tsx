const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",

  "@id": "https://www.firstrefrigeracao.com.br/#localbusiness",

  name: "First Refrigeração",

  url: "https://www.firstrefrigeracao.com.br",

  image: "https://www.firstrefrigeracao.com.br/brand/og-first.png",

  telephone: "+55 16 3367-7184",

  email: "firstdistribuidor@gmail.com",

  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Dr. Teixeira de Barros, 772",
    addressLocality: "São Carlos",
    addressRegion: "SP",
    addressCountry: "BR",
  },

  areaServed: {
    "@type": "City",
    name: "São Carlos",
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "https://schema.org/Monday",
        "https://schema.org/Tuesday",
        "https://schema.org/Wednesday",
        "https://schema.org/Thursday",
        "https://schema.org/Friday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "https://schema.org/Saturday",
      opens: "08:00",
      closes: "13:00",
    },
  ],
};

export function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema),
      }}
    />
  );
}