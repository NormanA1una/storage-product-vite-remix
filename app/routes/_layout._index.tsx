import { LoaderFunctionArgs } from "@remix-run/node";
import { defer, useLoaderData, useOutletContext } from "@remix-run/react";
import { HomeHero } from "~/layouts/home/hero";
import { SocialMedia } from "~/layouts/home/social-media";
import { StarProducts } from "~/layouts/home/star-products";
import { TitoSection } from "~/layouts/home/tito";
import { VisitUs } from "~/layouts/home/visit-us";
import supabase from "~/utils/supabase";

export const loader = async (params: LoaderFunctionArgs) => {
  let query = supabase.from("products").select().eq("start_product", "TRUE");
  query = query.order("name", { ascending: true });

  try {
    const dataLoader = await query;
    return defer({ dataLoader });
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Response("Error fetching data", { status: 500 });
  }
};

export default function Index() {
  const data: DataContext = useOutletContext();
  const { dataLoader } = useLoaderData<typeof loader>();

  return (
    <div>
      <HomeHero phoneNumber={data.phoneNumber} />
      <TitoSection phoneNumber={data.phoneNumber} />
      <StarProducts products={dataLoader.data as Product[]} />
      <SocialMedia />
      <VisitUs />
    </div>
  );
}

/* const QS_PRODUCT: QS_PRODUCT_TYPE = {
    sort: ["name:asc"],
    populate: {
      image: {
        fields: [
          "name",
          "alternativeText",
          "caption",
          "width",
          "height",
          "hash",
          "ext",
          "mime",
          "size",
          "url",
          "previewUrl",
          "provider",
          "provider_metadata",
          "createdAt",
          "updatedAt",
        ],
      },
    },
    pagination: {
      start: from,
      limit: to,
    },
  };

  if (paramCategory)
    QS_PRODUCT.filters = { category: { $eq: paramCategory.toLowerCase() } };

  if (q && !QS_PRODUCT.filters) QS_PRODUCT.filters = { name: { $contains: q } };

  if (q && QS_PRODUCT.filters) QS_PRODUCT.filters.name = { $contains: q };

  console.log(QS_PRODUCT);

  const QS_QUERY = qs.stringify(QS_PRODUCT, {
    encodeValuesOnly: true,
  });

  const urlProducts = `http://localhost:1337/api/products?locale=en${QS_QUERY}`;
  const responseProducts = await fetch(urlProducts);
  const strapiProducts = await responseProducts.json();

  console.log(strapiProducts.data); */
