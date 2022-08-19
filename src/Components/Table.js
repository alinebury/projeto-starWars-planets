import React, { useContext } from 'react';
import Context from '../context/Context';

const Table = () => {
  const { planets, filterByName,
    filterByNumericValues,
  } = useContext(Context);

  const filtersInfo = (planet) => {
    const bools = [];

    filterByNumericValues.forEach((filter) => {
      switch (filter.comparison) {
      case 'maior que':
        bools.push(parseFloat(planet[filter.column]) > filter.value);
        break;
      case 'menor que':
        bools.push(parseFloat(planet[filter.column]) < filter.value);
        break;
      case 'igual a':
        bools.push(planet[filter.column] === filter.value);
        break;
      default:
        return true;
      }
    });
    return bools.every((el) => el);
  };

  return (
    <div>
      <table>
        <thead>
          { Object.keys(planets[0]).map((planet) => (
            planet !== 'residents' && <th key={ planet }>{planet}</th>
          )) }
        </thead>
        <tbody>
          {
            planets
              .filter((planeta) => planeta.name.toLowerCase().includes(filterByName))
              .filter(filtersInfo)
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
              ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
