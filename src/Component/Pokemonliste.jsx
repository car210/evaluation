function Pokemonliste(){
  const rechercherpok = () => {
    const [pokemon, setPokemon] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    <>
    <div
      style={{ display: "flex", justifyContent: "center", margin: "20px" }}
    >
      <form
        action=""
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const chercher = formData.get("chercher");

          setIsLoading(true);
          const request = await fetch(
            `https://pokebuildapi.fr/api/v1/pokemon=${chercher}`
          );

          const data = await request.json();
          rechercherpok(data.data.results);
          setIsLoading(false);
        }}
        style={{ display: "flex", alignItems: "center" }}
      >
        <label htmlFor="search" style={{ marginRight: "10px" }}>
          Votre recherche
        </label>
        <input
          type="text"
          name="search"
          id="search"
          style={{ marginRight: "10px" }}
        />
        <input type="submit" value="Rechercher" />
      </form>
    </div>

    <div>
      {isLoading
        ? "loading"
        : movies.map((pokemon) => {
            return <pokemoncards key={pokemon.id} {...pokemon} />;
          })}
    </div>
  </>
);
};

}
export default Pokemonliste;