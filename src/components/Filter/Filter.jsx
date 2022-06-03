import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../redux/contacts/contacts-actions';
import { getFilter } from 'redux/contacts/contacts-selectors';
import { Label, Input } from './Filter.styled.jsx';

const Filter = () => {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = evt => {
    dispatch(action.filterContacts(evt.target.value));
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

export default Filter;
