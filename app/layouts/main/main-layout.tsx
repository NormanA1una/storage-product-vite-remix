import { Outlet } from "@remix-run/react";
import { Navbar } from "../navbar";
import { CartProvider } from "~/context/cart-context";
import { Footer } from "../footer";

const CONTACT_MEDIA: ContactMedia = [
  {
    src: "/images/whatsappIcon.svg",
    srcDark: "/images/whatsIconDark.svg",
    alt: "Whatsapp logo en la barra de navegación desplegable",
    url: "https://cocibolca-web.vercel.app/",
  },
  {
    src: "/images/facebookIcon.svg",
    srcDark: "/images/fbIconDark.svg",
    alt: "Facebook logo en la barra de navegación desplegable",
    url: "https://cocibolca-web.vercel.app/",
  },
  {
    src: "/images/instagramIcon.svg",
    srcDark: "/images/instaIconDark.svg",
    alt: "Instagram logo en la barra de navegación desplegable",
    url: "https://cocibolca-web.vercel.app/",
  },
];

export default function MainLayout({ pathNames }: MainLayoutProps) {
  return (
    <>
      <CartProvider>
        <Navbar pathNames={pathNames} contactMedia={CONTACT_MEDIA} />
        <Outlet />
        <Footer pathNames={pathNames} contactMedia={CONTACT_MEDIA} />
      </CartProvider>
    </>
  );
}
