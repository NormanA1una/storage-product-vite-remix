import { defer, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Products } from "~/layouts/products";
import supabase from "~/utils/supabase";
import qs from "qs";

/* type QS_PRODUCT_TYPE = {
  sort: string[];
  populate: { image: { fields: string[] } };
  pagination: { start: number; limit: number };
  filters?: {
    category?: {
      $eq: string;
    };
    name?: {
      $contains: string;
    };
  };
}; */

const ITEM_PER_PAGE = 19;

export const loader = async (params: LoaderFunctionArgs) => {
  const paramCategory = new URL(params.request.url).searchParams.get(
    "category"
  ) as Category;

  let page = new URL(params.request.url).searchParams.get("page") || "1";

  let from = (parseInt(page) - 1) * ITEM_PER_PAGE;

  let to = from + ITEM_PER_PAGE;

  let url = new URL(params.request.url);

  let { q } = Object.fromEntries(url.searchParams);

  let query = supabase.from("products").select();

  if (paramCategory) query = query.eq("categories", paramCategory);

  if (q) query = query.ilike("name", `%${q}%`);

  query = query.order("name", { ascending: true }).range(from, to);

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

  try {
    const dataLoader = await query;
    return defer({ dataLoader, q, queryPage: page });
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Response("Error fetching data", { status: 500 });
  }
};

export default function Index() {
  const { dataLoader, q, queryPage } = useLoaderData<typeof loader>();

  return (
    <div>
      <Products dataLoader={dataLoader} q={q} queryPage={queryPage} />
    </div>
  );
}
