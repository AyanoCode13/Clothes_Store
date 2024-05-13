import CategoriesTabs from  "~/ui/tabs/categories.tabs";
import { clothes, getClothes } from "~/utils/data";

export default async function Category({
  params,
}: {
  params: { category: "Woman" | "Man" | "Kid" | "Baby" };
}) {
  const data = clothes.filter(
    (c) => c.category.toLowerCase() === params.category,
  );

  return (
    <main className="flex flex-col items-center justify-center">
      <CategoriesTabs products={data} />
    </main>
  );
}
