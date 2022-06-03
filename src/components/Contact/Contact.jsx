import { useDispatch } from 'react-redux';
import * as action from '../../redux/contacts/contacts-actions';
import PropTypes from 'prop-types';
import { ContactWrap, Name, Number, ButtonDelete } from './Contact.styled.jsx';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <ContactWrap>
      <Name>{name}:</Name>
      <Number>{number}</Number>
      <ButtonDelete
        type="button"
        onClick={() => dispatch(action.deleteContact(id))}
      >
        x
      </ButtonDelete>
    </ContactWrap>
  );
};

export default Contact;

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
