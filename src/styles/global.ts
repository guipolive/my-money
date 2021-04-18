import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	:root {
		--color-background: #f0f2f5;
	}
	
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		background: var(--color-background);
		--webkit-font-smoothing: antialiased;
	}

	
`;