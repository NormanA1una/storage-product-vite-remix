import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import MainLayout from "~/layouts/main/main-layout";

export const loader: LoaderFunction = async () => {
  const NAV_PATHNAMES = [
    { name: "Home", nombre: "Inicio", path: "/" },
    { name: " ", nombre: "Catálogo", path: "/catalog" },
    { name: "Live", nombre: "En vivo", path: "/en-vivo" },
    { name: "Visit us", nombre: "Visítanos", path: "/visitanos" },
  ];

  const PHONE_NUMBER = process.env.PHONE_NUMBER;
  return json({ NAV_PATHNAMES, PHONE_NUMBER });
};

export default function LayoutMainContainer() {
  const { NAV_PATHNAMES, PHONE_NUMBER } = useLoaderData<typeof loader>();

  return (
    <>
      <MainLayout pathNames={NAV_PATHNAMES} phoneNumber={PHONE_NUMBER} />
    </>
  );
}
