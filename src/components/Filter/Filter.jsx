import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled.jsx';

const Filter = ({ onChange, filterValue }) => (
  <Label>
    Find contacts by name
    <Input type="text" name="filter" onChange={onChange} value={filterValue} />
  </Label>
);

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};
