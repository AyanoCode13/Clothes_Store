import { getServerAuthSession } from '~/server/auth'
 
export default async function Layout({
  user,
  admin,
}: {
  user: React.ReactNode
  admin: React.ReactNode
}) {
  const session = await getServerAuthSession()

  return <>{session?.user.role === 'admin' ? admin : user}</>
}