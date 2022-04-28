import React, { useContext } from 'react';
import Context from '../context/Context';

const Header = () => {
  const { handleChange, filterNumeric, buttonFilter,
    filters: { column, comparison, value } } = useContext(Context);

  return (
    <header>
      <label htmlFor="name-filter">
        StarWars Planets
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
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
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
      </section>
    </header>
  );
};

export default Header;
