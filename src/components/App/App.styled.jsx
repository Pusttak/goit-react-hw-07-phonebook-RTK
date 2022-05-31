import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 10px;
  width: 370px;
`;

export const Title = styled.h1`
  margin-bottom: 15px;
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  color: rgba(46, 61, 79, 0.877);
`;

export const Subtitle = Title.withComponent('h2');
