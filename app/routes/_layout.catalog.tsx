import { defer, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useOutletContext } from "@remix-run/react";
import { Products } from "~/layouts/products";
import supabase from "~/utils/supabase";
import qs from "qs";
import { HeroCatalog } from "~/layouts/catalog/hero";

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

  try {
    const dataLoader = await query;
    return defer({ dataLoader, q, queryPage: page });
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Response("Error fetching data", { status: 500 });
  }
};

export default function Catalog() {
  const { dataLoader, q, queryPage } = useLoaderData<typeof loader>();

  return (
    <div>
      <HeroCatalog />
      <Products dataLoader={dataLoader} q={q} queryPage={queryPage} />
    </div>
  );
}
