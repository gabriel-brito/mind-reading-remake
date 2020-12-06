import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background-color: rgba(0, 0, 0, 0.1);
    bottom: 0;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    z-index: ${theme.layers.overlay};
  `}
`;

export const Loader = styled.div`
  ${({ theme }) => css`
    border: 8px solid ${theme.colors.lightGrey};
    border-right: 8px solid ${theme.colors.cyberYellow};
    border-radius: 100%;
    height: 60px;
    width: 60px;
    animation: spin 1s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`;
