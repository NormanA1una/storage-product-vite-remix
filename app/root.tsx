import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import { LinksFunction, MetaFunction } from "@remix-run/node";

import stylesheet from "./tailwind.css?url";
import ErrorHandler from "./layouts/errors";
import Modal from "./components/toast";
import { ToastProvider, useToast } from "./context/toast-context";
import Toast from "./components/toast";

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
    { property: "og:url", content: "https://cocibolca-web.vercel.app/" },
    {
      property: "og:image",
      content: "/images/cocibolcaLogoOg.png",
    },
  ];
};

export const links: LinksFunction = () => [
  { rel: "preload", href: stylesheet, as: "style" },
  { rel: "stylesheet", href: stylesheet },
  {
    rel: "preload",
    href: "/fonts/outfitFontVar.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    href: "/images/titoPattern.svg",
    as: "image",
    type: "image/svg+xml",
  },
  {
    rel: "preload",
    href: "/images/titoSaludo.svg",
    as: "image",
    type: "image/svg+xml",
  },
  {
    rel: "preload",
    href: "/images/titoMobile.svg",
    as: "image",
    type: "image/svg+xml",
  },
  {
    rel: "icon",
    href: "/favicon.ico",
    type: "image/x-icon",
  },
  {
    rel: "preload",
    href: "/images/cocibolcaLogo.svg",
    as: "image",
    type: "image/svg+xml",
  },
  {
    rel: "preload",
    href: "/images/cocibolcaLogoMobile.svg",
    as: "image",
    type: "image/svg+xml",
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
  return (
    <ToastProvider>
      <LayoutWithModal />
    </ToastProvider>
  );
}

function LayoutWithModal() {
  const { isToastOpen, closeToast, toastContent, autoCloseTime, iconClose } =
    useToast();

  return (
    <>
      <Toast
        isOpen={isToastOpen}
        onClose={closeToast}
        autoCloseTime={autoCloseTime}
        iconClose={iconClose}
      >
        {toastContent}
      </Toast>
      <Outlet />
    </>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  return <ErrorHandler error={error} />;
}
