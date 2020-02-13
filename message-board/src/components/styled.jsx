import styled from 'styled-components';

export const PageSizer = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

export const Box = styled.div`
    padding: 8px;
`;

export const BoxWithBorder = styled(Box)`
    border: 1px solid #b0bec5; /* blueGrey 200 */
    border-radius: 5px;
`;

const baseInputStyle = `
    padding: .5em;
    border: 2px solid #b0bec5; /* blueGrey 200 */
    border-radius: 5px;
    outline: none;
    &:focus {
        border-color: #78909c; /* blueGrey 400 */
    }
`;

export const Input = styled.input`
    ${baseInputStyle}
`;

export const Button = styled.button`
    ${baseInputStyle}
    &:active {
        background-color: #eceff1; /* blueGrey 50 */
    }
`;
