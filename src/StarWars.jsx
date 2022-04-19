import React, { useContext, useEffect } from 'react';
import Context from './context/Context';

function StarWars() {
  const { planets, getPlanets, loading } = useContext(Context);

  useEffect(() => {
    getPlanets();
  }, [getPlanets]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            { !loading && Object.keys(planets[0]).map((planet) => (
              planet !== 'residents' && <th key={ planet }>{planet}</th>
            )) }
          </tr>
        </thead>

        <tbody>
          { !loading && planets.map((planet, index) => (
            <tr key={ index }>
              <td>
                { Object.values(planet.name) }
              </td>
              <td>
                { Object.values(planet.rotation_period) }
              </td>
              <td>
                { Object.values(planet.orbital_period) }
              </td>
              <td>
                { Object.values(planet.diameter) }
              </td>
              <td>
                { Object.values(planet.climate) }
              </td>
              <td>
                { Object.values(planet.gravity) }
              </td>
              <td>
                { Object.values(planet.terrain) }
              </td>
              <td>
                { Object.values(planet.surface_water) }
              </td>
              <td>
                { Object.values(planet.population) }
              </td>
              <td>
                { Object.values(planet.films) }
              </td>
              <td>
                { Object.values(planet.created) }
              </td>
              <td>
                { Object.values(planet.edited) }
              </td>
              <td>
                { Object.values(planet.url) }
              </td>
            </tr>
          )) }
        </tbody>
        { !loading && console.log(planets) }
      </table>
    </div>
  );
}

export default StarWars;
