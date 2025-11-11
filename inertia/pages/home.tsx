import { Head, router } from '@inertiajs/react'

type User = {
  firstname: string;
  lastname: string;
  username: string;
}

type HomePageProps = {
  user: User;
}

export default function HomePage({ user }: HomePageProps) {


  return (
    <>
      <Head title="Homepage" />
      <main className="h-screen flex flex-col items-center justify-center gap-10">
        <h1 className="font-semibold text-4xl text-white">Bonjour {user.firstname} {user.lastname}</h1>
        <button type="button" className="bg-white p-2 rounded" onClick={() => router.delete('/logout')}>Se déconnecter</button>
      </main>
    </>
  )
}