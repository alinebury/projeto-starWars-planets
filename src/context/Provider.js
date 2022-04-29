import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import getCurrentPlanets from '../services/planetsAPI';

function Provider({ children }) {
  const [planets, setPlanets] = useState();
  const [loading, setLoading] = useState(true);
  const [filterByName, setName] = useState('');
  const [filterByNumericValues, setNumeric] = useState([]);
  const [filters, setFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const getPlanets = async () => {
    const data = await getCurrentPlanets();

    setPlanets(data);
    setLoading(false);
  };

  const handleChange = ({ target: { value } }) => {
    const lowerCase = value.toLowerCase();
    setName(lowerCase);
  };

  const filterNumeric = ({ target: { name, value } }) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const buttonFilter = () => {
    setNumeric([...filterByNumericValues, filters]);
    setFilters([{
      column: '',
      comparison: '',
      value: 0,
    }]);
  };

  const clearFilters = () => {
    setNumeric([]);
  };

  const removeFilter = (newFilters) => {
    setNumeric([newFilters]);
  };

  const contextPlanets = { planets,
    loading,
    getPlanets,
    filterByName,
    handleChange,
    filterByNumericValues,
    filterNumeric,
    filters,
    buttonFilter,
    clearFilters,
    removeFilter,
  };

  return (
    <Context.Provider value={ contextPlanets }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
