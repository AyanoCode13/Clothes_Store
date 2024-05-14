
import CategoriesTabs from "~/components/ui/tabs/categories.tabs";
import { getAllClothes, getClothesByCategory } from "~/utils/clothes";

export default async function Products({ params }: { params: { category: "man" | "woman"| "kid" |"baby" } }) {
  const data = getClothesByCategory({ category: params.category });
  return (
    <main className="flex flex-col items-center justify-center">
      <CategoriesTabs products={data} />
    </main>
  );
}


