import React from "react";
import LogoPokeApi from "../img/pokeapi.png";

const Pokeinfo = ({ data }) => {
  //console.log(data);
  return (
    <>
    <img src={LogoPokeApi} alt="" />
      { (!data) ? ("Selecciona un Pokemon") : (
        <>
          <h1>{data.name}</h1>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt=""/>

          <div className="abilities">
            {data.abilities.map(poke => {
              //console.log(poke)
              return (
                <>
                  <div className="group">
                    <h2>{poke.ability.name}</h2>
                  </div>
                </>
              );
            })
            }
          </div>
          <div className="base-stat">
            {data.stats.map(poke => {
              //console.log(poke)
              return (
                <>
                  <h3>
                    {poke.stat.name} : {poke.base_stat}
                  </h3>
                </>
              );
            })
            }
          </div>
        </>
      )}
    </>
  );
};

export default Pokeinfo;
