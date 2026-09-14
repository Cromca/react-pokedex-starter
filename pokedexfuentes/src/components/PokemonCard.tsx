interface PokemonCardProps {
  pokemon: {
    name: string;
    imgSrc?: string;
  };
}

function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <figure className={`pokemon-card ${pokemon.name}`}>
      {pokemon.imgSrc ? (
        <img
          className="pokemon-image"
          src={pokemon.imgSrc}
          alt={pokemon.name}
        />
      ) : (
        <p className="pokemon-placeholder">
          Image non disponible
        </p>
      )}

      <figcaption className="pokemon-name">
        {pokemon.name}
      </figcaption>
    </figure>
  );
}

export default PokemonCard;