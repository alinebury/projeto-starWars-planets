import React, { useContext, useEffect, useState } from 'react';
import Context from './context/Context';

function StarWars() {
  const { planets, getPlanets, loading } = useContext(Context);
  const [nameInput, setName] = useState('');

  useEffect(() => {
    getPlanets();
  }, []);

  function handleChange(event) {
    const { value } = event.target;

    setName(value);
    console.log(nameInput);
  }

  return (
    <div>
      <label htmlFor="name-filter">
        Filtro
        <input
          data-testid="name-filter"
          id="name-filter"
          value={ nameInput }
          onChange={ handleChange }
        />
      </label>

      <table border="1">
        <thead>
          <tr>
            { !loading && Object.keys(planets[0]).map((planet) => (
              planet !== 'residents' && <th key={ planet }>{planet}</th>
            )) }
          </tr>
        </thead>
        <tbody>
          {!loading && planets
            .filter((planeta) => planeta.name.includes(nameInput))
            .map((planet, index) => (
              <tr key={ index }>
                <td>
                  { planet.name }
                </td>
                <td>
                  { planet.rotation_period }
                </td>
                <td>
                  { planet.orbital_period }
                </td>
                <td>
                  { planet.diameter }
                </td>
                <td>
                  { planet.climate }
                </td>
                <td>
                  { planet.gravity }
                </td>
                <td>
                  { planet.terrain }
                </td>
                <td>
                  { planet.surface_water }
                </td>
                <td>
                  { planet.population }
                </td>
                <td>
                  { planet.films }
                </td>
                <td>
                  { planet.created }
                </td>
                <td>
                  { planet.edited }
                </td>
                <td>
                  { planet.url }
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default StarWars;
