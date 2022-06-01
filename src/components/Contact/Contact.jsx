import { connect } from 'react-redux';
import * as action from '../../redux/contacts/contacts-actions';
import PropTypes from 'prop-types';
import { ContactWrap, Name, Number, ButtonDelete } from './Contact.styled.jsx';

const Contact = ({ name, number, id, onDeleteContact }) => (
  <ContactWrap>
    <Name>{name}:</Name>
    <Number>{number}</Number>
    <ButtonDelete
      type="button"
      onClick={() => {
        onDeleteContact(id);
      }}
    >
      x
    </ButtonDelete>
  </ContactWrap>
);

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(action.deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(Contact);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
