import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css"
        />
        <link
          href="https://unpkg.com/leaflet-geosearch@latest/assets/css/leaflet.css"
          rel="stylesheet"
        />
         <link
          href="https://cdn.jsdelivr.net/gh/digidem/leaflet-side-by-side/layout.css"
          rel="stylesheet"
        />
         <link
          href="https://cdn.jsdelivr.net/gh/digidem/leaflet-side-by-side/range.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
