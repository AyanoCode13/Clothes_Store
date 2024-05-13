import React from "react";
import type { ProductCardDAO } from "~/types/ProductDAO";
import ProductCard from "~/ui/cards/product.card"


export default function CategoriesTabs({
  products,
}: {

  products: ProductCardDAO[];
}) {
  const categories = [
    "Popular",
    "Tops",
    "Bottoms",
    "Accessories",
    "Jackets",
    "Sale",
  ];

  return (
    <div role="tablist" className="tabs tabs-lifted w-full">
      {categories.map((c, index) => {
        return (
          <React.Fragment key={index} >
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab"
              aria-label={c}
              defaultChecked={c === "Popular" ? true : false}
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box h-screen p-6"
            >
              <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {products
                  .filter((p) => p.subcategory === c)
                  .map((p, index) => {
                    return (
                     <ProductCard key={index} product={p} />
                    );
                  })}
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
