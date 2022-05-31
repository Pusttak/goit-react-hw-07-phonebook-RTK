import styled from '@emotion/styled';

export const Form = styled.form`
  border: 4px solid rgba(67, 114, 153, 0.378);
  border-radius: 6px;
  padding: 20px 25px 5px;
  margin-bottom: 25px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 700;
  color: rgba(67, 114, 153, 0.727);
`;

export const Input = styled.input`
  border: 2px solid rgb(128, 158, 182);
  height: 25px;
  border-radius: 4px;
  margin-top: 6px;
  font-size: 16px;
  font-weight: 600;
  color: rgb(67, 114, 153);
  padding: 5px 10px;
  outline: none;
`;

export const Button = styled.button`
  display: block;
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  margin: 30px auto;
  color: white;
  background-color: rgb(67, 114, 153);
  cursor: pointer;
  transition: 0.3s;
  font-size: 16px;
  font-weight: 600;

  :hover {
    background-color: rgb(60, 100, 132);
  }
`;
