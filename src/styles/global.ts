import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	:root {
		--color-background: #f0f2f5;
		--color-green: #33CC95;
		--color-blue: #5429CC;
		--color-light-blue: #6933FF;
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

	body, input, textarea, button {
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
	}

	h1, h2, h3, h4, h5, h6, strong {
		font-weight: 600; // semibold da poppins
	}

	button {
		cursor: pointer;
	}

	[disabled] {
		opacity: 0.6;
		cursor: not-allowed;
	}

	.react-modal-overlay {
		background: rgba(0, 0, 0, 0.5);
		
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.react-modal-content {
		width: 100%;
		max-width: 580px;

		outline: 0;

		background: var(--color-background);
		padding: 3em;
		position: relative;

		border-radius: 0.25rem;
	}

	.react-modal-close {
		display: flex;
		align-items: center;
		justify-content: center;

		position: absolute;
		right: 1.5rem;
		top: 1.5rem;
		border: 0;
		background: transparent;

		transition: .2s;

		&:hover {
			transform: rotate(90deg);
		}
	}

`;