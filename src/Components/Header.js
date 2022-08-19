import React, { useContext } from 'react';
import Context from '../context/Context';

const Header = () => {
  const { handleChange, filterNumeric, buttonFilter,
    filters: { column, comparison, value },
    filterByNumericValues,
    clearFilters,
    removeFilter } = useContext(Context);
  const columns = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  const columnsFilter = (coluna) => {
    const bools = [];
    filterByNumericValues.forEach((filter) => {
      bools.push(filter.column !== coluna);
    });
    return bools.every((el) => el);
  };

  return (
    <header>
      <h1>StarWars Planets</h1>
      <label htmlFor="name-filter">
        <input
          data-testid="name-filter"
          id="name-filter"
          onChange={ handleChange }
        />
      </label>

      <section>
        <label htmlFor="column-filter">
          <select
            data-testid="column-filter"
            id="column-filter"
            name="column"
            onChange={ filterNumeric }
            value={ column }
          >
            {
              columns
                .filter(columnsFilter)
                .map((col) => (
                  <option
                    value={ col }
                    key={ col }
                  >
                    { col }
                  </option>
                ))
            }
          </select>
        </label>

        <label htmlFor="comparison-filter">
          <select
            data-testid="comparison-filter"
            id="comparison-filter"
            name="comparison"
            onChange={ filterNumeric }
            value={ comparison }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>

        <label
          htmlFor="value-filter"
        >
          <input
            type="number"
            id="value-filter"
            data-testid="value-filter"
            name="value"
            value={ value }
            onChange={ filterNumeric }
          />
        </label>

        <button
          type="button"
          data-testid="button-filter"
          onClick={ buttonFilter }
        >
          Filtro
        </button>

        <button
          type="button"
          data-testid="button-remove-filters"
          onClick={ clearFilters }
        >
          Remover Filtros
        </button>
      </section>

      <div>
        {
          filterByNumericValues.map((filter, index) => (
            <div key={ index }>
              <p>
                {filter.column}
              </p>
              <button
                type="button"
                data-testid="filter"
                onClick={ () => {
                  const cloneArray = [...filterByNumericValues];
                  cloneArray.splice(index, 1);
                  removeFilter(cloneArray);
                } }
              >
                X
              </button>

            </div>
          ))
        }
      </div>
    </header>
  );
};

export default Header;
