import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import {
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";

import stylesheet from "./tailwind.css?url";
import ErrorHandler from "./layouts/errors";

export const meta: MetaFunction = () => {
  return [
    { title: "Licorería Cocibolca | Catálogo" },
    {
      name: "description",
      content: "Conoce nuestro catálogo de productos y precios!",
    },
    { property: "og:title", content: "Licorería Cocibolca | Catálogo" },

    {
      property: "og:description",
      content: "Conoce nuestro catálogo de productos y precios!",
    },
    { property: "og:type", content: "website" },
    // { property: "og:url", content: "https://www.immigrationdocsllc.com/" },
    {
      property: "og:image",
      content: "/images/cocibolcaLogoOg.png",
    },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  {
    rel: "preload",
    href: "/fonts/outfitFontVar.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "icon",
    href: "/images/logo32x32.png",
    type: "image/png",
    sizes: "32x32",
  },
  {
    rel: "icon",
    href: "/images/logo16x16.png",
    type: "image/png",
    sizes: "16x16",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const error = useRouteError();
  const isError = isRouteErrorResponse(error);

  return (
    <html lang="en" className={`${isError ? "html-error" : "html-custom"}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Scripts />
        <ScrollRestoration />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  return <ErrorHandler error={error} />;
}
