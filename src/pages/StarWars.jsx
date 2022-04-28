import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';
import Header from '../Components/Header';
import Table from '../Components/Table';

function StarWars() {
  const { getPlanets, loading } = useContext(Context);

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <div>
      <Header />
      {
        !loading && <Table />
      }
    </div>
  );
}

export default StarWars;
