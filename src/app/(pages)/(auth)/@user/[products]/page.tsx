import CategoriesTabs from  "~/components/ui/tabs/categories.tabs";
import { clothes } from "~/utils/data";

export default async function Products({
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
