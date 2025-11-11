import { Form, Head, Link } from "@inertiajs/react";

export default function LoginPage() {
  return (
    <>
    <Head title="Connexion" />
    <main className="h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-white text-2xl mb-4">Connexion</h1>
      <Form className="flex flex-col items-center gap-4" action="/connexion/store" method="POST">
      {({ errors, processing }) => (
        <>
          <input className="p-2 rounded" type="text" name="username" placeholder="Nom d'utilisateur"/>
          {errors?.username && <span className="text-red-500">{errors.username}</span>}
          <input className="p-2 rounded" type="password" name="password" placeholder="Mot de passe"/>
          {errors?.password && <span className="text-red-500">{errors.password}</span>}
          <button className="bg-white rounded p-2" disabled={processing} type="submit">Connexion</button>
          {errors?.E_INVALID_CREDENTIALS && <span className="text-red-500">Nom d'utilisateur ou mot de passe invalide</span>}
        </>
      )}
      </Form>
      <p className="text-white">Pas de compte ? <Link href="/inscription" className="text-blue-500">Inscription</Link></p>
    </main>
    </>
  )
}