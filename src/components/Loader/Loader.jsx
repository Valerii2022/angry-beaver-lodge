import { useState, CSSProperties } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  margin: '0 auto',
  borderWidth: '4px',
};

const Loader = () => {
  return (
    <div>
      <ClipLoader
        color={'#1072d3'}
        cssOverride={override}
        size={24}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={1}
      />
    </div>
  );
};

export default Loader;
