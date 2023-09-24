import styled from 'styled-components';
import _default from '../../themes/default';
export const Container = styled.div`
    // background: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    margin-top: 6rem;
    align-items: center;
    //clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;
export const wrapper__container = styled.h5`
margin-top: 5rem;
display: grid;
grid-template-columns: 35% 50%;
color: red;
`
export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 2rem 0 4rem 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;
export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;
export const h5 = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 26px;
    }
`;

export const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1px solid var(--color-primary);
    color: ${({ theme }) => theme.primary};
    border-radius: 0.4rem;
    margin: 4rem 0;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

export const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    ${({ active, theme }) =>
        active && `
    background: ${theme.primary + 20};
    `
    }
    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`
export const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`


export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // grid-gap: 32px;
    // grid-auto-rows: minmax(100px, auto);
    // @media (max-width: 960px) {
    //     grid-template-columns: repeat(2, 1fr);
    // }
    // @media (max-width: 640px) {
    //     grid-template-columns: repeat(1, 1fr);
    // }
`;
