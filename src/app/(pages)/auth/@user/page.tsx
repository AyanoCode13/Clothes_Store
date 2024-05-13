import { clothes } from "~/utils/data";
import CategoriesTabs from "~/components/ui/tabs/categories.tabs";

export default async function Home() {
  const data = clothes.filter((c) => c.category === "Woman");
  return (
    <main className="flex flex-col items-center justify-center">
      <CategoriesTabs products={data} />
    </main>
  );
}


