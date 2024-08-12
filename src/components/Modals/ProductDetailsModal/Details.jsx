import css from './Details.module.css';

const Details = ({ item }) => {
  return (
    <div className={css.container}>
      <p>{item.description}</p>
      <p>{item.price}</p>
    </div>
  );
};

export default Details;
