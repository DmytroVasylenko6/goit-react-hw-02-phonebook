import PropTypes from 'prop-types';
import s from './Button.module.css';

export default function Button({ text, listener, type, color }) {
  return (
    <button className={`${s.button} ${s.color}`} type={type} onClick={listener}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  listener: PropTypes.func,
  type: PropTypes.string,
};
