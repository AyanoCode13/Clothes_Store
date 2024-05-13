import { getProviders } from "next-auth/react"

export default async function Login(){
    const providers = await getProviders()
    console.log(providers)
    return (
        <main className="flex flex-col justify-center text-3xl">
            {
                Object.values(providers).map((provider) => {
                    return (
                        <div key={provider.id}>{provider.name}</div>
                    )
                })
            }
        </main>
    )
}