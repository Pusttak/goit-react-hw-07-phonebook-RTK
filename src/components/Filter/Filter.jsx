import { useDispatch, useSelector } from 'react-redux';
import { Label, Input } from './Filter.styled.jsx';
import { filterContacts } from 'redux/contacts/contacts-slice';
import { getFilter } from 'redux/contacts/contacts-selectors';

const Filter = () => {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = evt => {
    dispatch(filterContacts(evt.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" onChange={handleChangeFilter} value={filterValue} />
    </Label>
  );
};

export default Filter;
