import { Form, Head, Link } from "@inertiajs/react";

export default function RegisterPage() {
  return (
  <>
    <Head title="Inscription" />
    <main className="h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-white text-2xl mb-4">Inscription</h1>
      <Form className="flex flex-col items-center gap-4" method="POST" action="/inscription/store">
        {({ errors, processing }) => (
          <>
            <input className="p-2 rounded" type="text" name="firstname" placeholder="Prénom" />
            {errors?.firstname && <span className="text-red-500">{errors.firstname}</span>}
            <input className="p-2 rounded" type="text" name="lastname" placeholder="Nom de famille" />
            {errors?.lastname && <span className="text-red-500">{errors.lastname}</span>}
            <input className="p-2 rounded" type="text" name="username" placeholder="Nom d'utilisateur" />
            {errors?.username && <span className="text-red-500">{errors.username}</span>}
            <input className="p-2 rounded" type="password" name="password" placeholder="Mot de passe" />
            {errors?.password && <span className="text-red-500">{errors.password}</span>}
            <input className="p-2 rounded" type="password" name="password_confirmation" placeholder="Confirmer le mot de passe" />
            {errors?.password_confirmation && <span className="text-red-500">{errors.password_confirmation}</span>}
            <button className="bg-white rounded p-2" disabled={processing} type="submit">Enregistrer</button>
          </>
        )}
      </Form>
      <p className="text-white">Déjà inscrit ? <Link className="text-blue-500" href="/connexion">Connexion</Link></p>
    </main>
  </>
  )
}