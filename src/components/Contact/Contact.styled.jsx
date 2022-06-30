import styled from '@emotion/styled';

export const ContactWrap = styled.div`
  display: flex;
  padding: 2px;
  transition: 0.3s;
  cursor: context-menu;

  :hover {
    background-color: rgba(242, 56, 127, 0.084);
    border-radius: 4px;
  }
`;

export const Name = styled.span`
  max-width: 50%;
`;

export const Number = styled.span`
  margin-left: auto;
  color: rgba(155, 53, 102, 0.849);
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 10px;
  text-align: center;
  margin-left: 10px;
  color: white;
  min-width: 25px;
  height: 25px;
  border-radius: 3px;
  background-color: ${props => {
    return !props.isEdit ? 'rgba(242, 56, 90, 0.552)' : 'rgba(241, 163, 9, 0.904)';
  }};
  cursor: pointer;
  border: none;
  transition: 0.3s;

  :hover {
    background-color: ${props => {
      return !props.isEdit ? 'rgba(210, 3, 41, 0.552)' : 'rgba(205, 138, 5, 0.904)';
    }};
    transform: scale(1.2);
  }

  :disabled {
    background-color: rgba(197, 78, 100, 0.53);
  }
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-right: auto;
`;

export const Input = styled.input`
  width: 38%;
  border: 2px solid rgba(205, 138, 5, 0.364);
  background-color: rgba(241, 167, 9, 0.823);
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  padding: 2px 5px;
  outline: none;
`;
