import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	:root {
		--color-background: #f0f2f5;
		--color-green: #33CC95;
		--color-blue: #5429CC;
		--color-red: #E62E4D;
		--color-title: #363F5F;
		--color-text: #969CB3;
		--color-shape: #FFFFFF;
	}
	
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		@media (max-width: 1080px) {
			font-size: 93.75%; // 15px
		}
		
		@media (max-width: 720px) {
			font-size: 97.5%; // 14px
		}
	}

	body {
		background: var(--color-background);
		--webkit-font-smoothing: antialiased;
	}

	button {
		cursor: pointer;
	}

	[disabled] {
		opacity: 0.6;
		cursor: not-allowed;
	}

`;