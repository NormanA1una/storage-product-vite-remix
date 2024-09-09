import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { defer, json, useLoaderData, useOutletContext } from "@remix-run/react";
import { Cart } from "~/layouts/shopping-cart/cart";
import { HeroCart } from "~/layouts/shopping-cart/hero";
import { Suggested } from "~/layouts/shopping-cart/suggested";
import supabase from "~/utils/supabase";

export const loader = async (_params: LoaderFunctionArgs) => {
  let query = supabase.from("products").select().eq("suggested", "TRUE");
  query = query.order("name", { ascending: true });

  try {
    const dataLoader = await query;
    return defer({ dataLoader });
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Response("Error fetching data", { status: 500 });
  }
};

export const action = async ({ request }: ActionFunctionArgs) => {
  return json({ success: true });
};

export default function CartPage() {
  const data: DataContext = useOutletContext();
  const { dataLoader } = useLoaderData<typeof loader>();

  return (
    <>
      <HeroCart />
      <Cart phoneNumber={data.phoneNumber} />
      <Suggested products={dataLoader.data as Product[]} />
    </>
  );
}
