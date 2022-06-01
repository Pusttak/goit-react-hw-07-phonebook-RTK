import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as action from '../../redux/filter/filter-actions';
import { Label, Input } from './Filter.styled.jsx';

const Filter = ({ onChange, filterValue }) => {
  const handleChangeFilter = evt => {
    onChange(evt.target.value);
  };

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        onChange={handleChangeFilter}
        value={filterValue}
      />
    </Label>
  );
};

const mapStateToProps = state => ({
  filterValue: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: value => dispatch(action.filterContacts(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};
