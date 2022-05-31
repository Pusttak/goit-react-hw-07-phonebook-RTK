import styled from '@emotion/styled';

export const ContactWrap = styled.p`
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
  margin-right: 10px;
  max-width: 50%;
`;

export const Number = styled.span`
  margin-left: auto;
  color: rgba(155, 53, 102, 0.849);
`;

export const ButtonDelete = styled.button`
  display: block;
  margin-left: 20px;
  color: white;
  min-width: 25px;
  height: 25px;
  border-radius: 3px;
  background-color: rgba(242, 56, 90, 0.552);
  cursor: pointer;
  border: none;
  transition: 0.3s;

  :hover {
    background-color: rgba(210, 3, 41, 0.552);
    transform: scale(1.2);
  }
`;
