import css from './Title.module.css';

const Title = ({ title }) => {
  return <h2 className={css.title}>{title}</h2>;
};

export default Title;
