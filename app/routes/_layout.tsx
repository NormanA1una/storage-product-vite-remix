import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import MainLayout from "~/layouts/main/main-layout";

export const loader: LoaderFunction = async ({}) => {
  const NAV_PATHNAMES = [
    { name: "Home", nombre: "Inicio", path: "/" },
    { name: "Catalog", nombre: "Catálogo", path: "/catalog" },
    { name: "Visit us", nombre: "Visítanos", path: "/visitanos" },
  ];
  return json({ NAV_PATHNAMES });
};

export default function LayoutMainContainer() {
  const { NAV_PATHNAMES } = useLoaderData<typeof loader>();

  return (
    <>
      <MainLayout pathNames={NAV_PATHNAMES} />
    </>
  );
}
