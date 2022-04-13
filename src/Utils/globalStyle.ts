import styled from 'styled-components';

export const colors = {
	'background': '#FFF9E1',
	'text'      : '#002D00',
};

export const GlobalStyle = styled.div`
  background-color: ${colors.background};
  color: ${colors.text};
  min-height: 100vh;
`;