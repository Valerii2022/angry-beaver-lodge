import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  margin: '0 auto',
  borderWidth: '4px',
};

const Loader = ({ modal }) => {
  return (
    <div>
      <ClipLoader
        color={modal ? '#fff' : '#1072d3'}
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
