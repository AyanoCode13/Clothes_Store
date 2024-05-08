import Link from "next/link";

import { CreatePost } from "~/app/components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import CategoriesTabs from "../components/categories.tabs";
import { getClothes } from "../data";

export default async function Home() {
  const clothes = await getClothes({category:"Bottoms", gender:"Female"})
  console.log(clothes)
  return (
    <main className="flex flex-col items-center justify-center">
         <CategoriesTabs categories={[]} products={clothes}/> 
    </main>
  );
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  const latestPost = await api.post.getLatest();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
