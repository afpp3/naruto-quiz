import PropTypes from 'prop-types';
import InputBase from './styles';

const Input = ({ onChange, placeholder, ...props }) => {
  return <InputBase placeholder={placeholder} onChange={onChange} {...props} />;
};

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Input;
