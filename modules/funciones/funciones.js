const calcularCantidadPaginas = (totalDePokemones, pokemonesEnPagina) => {
  return Math.ceil(totalDePokemones / pokemonesEnPagina);
};

const mostrarTipos = (arrayDeTipos, $selector) => {
  $selector.innerText = `Tipo:`;
  arrayDeTipos.forEach((tipos) => {
    $selector.append(` "${tipos.type.name}" `);
  });
};

const mostrarHabilidades = (arrayDeHabilidades, $selector) => {
  $selector.innerText = 'Habilidades :';
  arrayDeHabilidades.forEach((habilidades) => {
    $selector.append(` "${habilidades.ability.name}" `);
  });
};

const mostrarFoto = (foto1, foto2) => {
  if (foto1 === null && foto2 !== null) {
    return foto2;
  } else if (foto1 !== null) {
    return foto1;
  } else {
    return '/imagenes/faltaImagen.png';
  }
};

const guardarPokemonEnLocalStorage = (pokemonEnJson) => {
  let pokemonEnString = JSON.stringify(pokemonEnJson);
  localStorage.setItem(pokemonEnJson.forms[0].name, pokemonEnString);
};

const guardarPokemonesDePaginaEnLocalStorage = (
  listadoPokemonesEnJson,
  numeroDePagina,
) => {
  let listadoEnString = JSON.stringify(listadoPokemonesEnJson);
  localStorage.setItem(numeroDePagina, listadoEnString);
};

export {
  guardarPokemonesDePaginaEnLocalStorage,
  guardarPokemonEnLocalStorage,
  calcularCantidadPaginas,
  mostrarTipos,
  mostrarHabilidades,
  mostrarFoto,
};
