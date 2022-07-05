
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes` from {
    opacity: 0;
}

to {
    opacity: 1;
}

`;

export const TabHeaderItem = styled.li` padding: 0.5rem 3rem;
cursor: pointer;
border-bottom: 3px solid;
border-color: ${({ isActive }) => (isActive ? "tomato" : "black")
    }

;
color: ${({ isActive }) => (isActive ? "tomato" : "#f5f5f5")
    }

;
`;

export const TabHeaderContainer = styled.ul` display: flex;
margin: 0rem 0 2rem;
padding: 0;
list-style: none;
justify-content: center;
`;

export const TabPanelContainer = styled.div` text-align: center;
`;

export const TabPanelItem = styled.div` animation: ${fadeIn} 0.5s ease-in;
margin-bottom: 1rem;
`;

export const GlobalContainer = styled.div` background: transparent;
width: 100%;
margin: auto;
padding: 1rem;
margin-top: 2rem;

@media (max-width: 540px) {
    width: 100%;
}

`;