import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import getCurrentPlanets from '../services/planetsAPI';

function Provider({ children }) {
  const [planets, setPlanets] = useState();
  const [loading, setLoading] = useState(true);

  const getPlanets = async () => {
    const data = await getCurrentPlanets();

    setPlanets(data);
    setLoading(false);
  };

  const contextPlanets = { planets, loading, getPlanets };

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
