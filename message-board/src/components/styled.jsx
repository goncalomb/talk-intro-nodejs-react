import styled, { createGlobalStyle } from 'styled-components';

/**
 * Most of the design of the application is configured here.
 * These are Styled Components, essentially HTML elements with some CSS.
 *
 * This is one of the popular way of using CSS with React!
 *
 * Read More:
 * https://styled-components.com/
 *
 * I stole the colors from Material-UI:
 * https://material-ui.com/customization/color/#color-palette
 *
 * Material-UI is also a very good library with many UI components.
 */

// a special component that inject a global style
// https://styled-components.com/docs/api#createglobalstyle
export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: sans-serif;
        color: #212121; /* grey 900 */
        background-color: #eceff1; /* blueGrey 50 */
    }

    a {
        color: #616161; /* grey 900 */
    }

    p {
        word-break: break-all;
    }
`;

// the main app wrapper, with styles for the children
export const AppWrapper = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;
    min-height: 0px;
    margin: 0 auto;

    & > header {
        color: #fafafa; /* grey 50 */
        background-color: #546e7a; /* blueGrey 600 */
        letter-spacing: 0.1em;
    }

    & > header small {
        font-weight: normal;
        font-style: italic;
    }

    & > main {
        display: flex;
        flex: 1;
        min-height: 0px;
    }

    & > footer {
        padding: 1.5em 0;
        background-color: white;
    }

    & > footer p {
        margin: 0.25em 0;
    }
`;

// a wrapper div to limit the page width
export const PageSizer = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

// the main container element
export const MainContainer = styled(PageSizer)`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-height: 0px;
    padding: 5px 0;

    & > :not(:last-child) {
        margin-bottom: 5px;
    }

    & > :last-child {
        flex: 1;
    }
`;

// a generic box
export const Box = styled.div`
    padding: 8px;
`;

// a generic box with border
export const BoxWithBorder = styled(Box)`
    border: 1px solid #b0bec5; /* blueGrey 200 */
    border-radius: 5px;
    & > &:not(:last-child) {
        margin-bottom: 5px;
    }
    & p {
        margin: .5em 0;
    }
`;

// an inline form
export const InlineForm = styled.form`
    display: flex;
    input, button {
        font-size: 1.5em;
    }
    input {
        flex: 1;
    }
`;

// the base style for the inputs
// these inputs could easily be replaced with a UI library like Material-UI
// no need to reinvent the wheel like I'm doing here
const baseInputStyle = `
    padding: .5em;
    border: 2px solid #b0bec5; /* blueGrey 200 */
    border-radius: 5px;
    outline: none;
    :not(:last-child) {
        margin-right: .5em;
    }
    &:focus {
        border-color: #78909c; /* blueGrey 400 */
    }
`;

// the input component
export const Input = styled.input`
    ${baseInputStyle}
    width: 200px;
`;

// the button component
export const Button = styled.button`
    ${baseInputStyle}
    &:active {
        background-color: #eceff1; /* blueGrey 50 */
    }
`;
