import styles from "./decouverte.module.css";

function Decouverte() {
  return (
    <>
      <h1>POKEDEX</h1>
      <div className={styles.forms}>
        <p>
          "Découvrez le monde fascinant des Pokémon avec notre Pokédex ultime!
          Que vous soyez un Maître Pokémon en devenir ou simplement curieux de
          découvrir chaque créature unique, notre base de données complète est
          votre porte d'entrée vers une aventure extraordinaire. Explorez les
          caractéristiques, les forces, et les faiblesses de chaque Pokémon,
          plongez dans leur univers, et devenez l'expert ultime."
        </p>
        <section className={styles.container}>
          Recherche Instantanée par Nom: Ne perdez plus jamais de temps à
          chercher votre Pokémon préféré. Entrez simplement son nom pour accéder
          instantanément à une mine d'informations.
          <br />
          Fiches Détaillées: Chaque Pokémon est unique, et notre Pokedex célèbre
          cette diversité.
          <br />
          Toujours Plus à Découvrir: Nous nous engageons à enrichir constamment
          le Pokedex avec de nouvelles fonctionnalités passionnantes. Restez à
          l'affût!
        </section>
      </div>
    </>
  );
}
export default Decouverte;
