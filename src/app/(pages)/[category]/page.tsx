import CategoriesTabs from "~/app/components/categories.tabs";
import { clothes, getClothes } from "~/app/data";

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
