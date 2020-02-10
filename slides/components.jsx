/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const cssCenterContainer = css`
    text-align: center;
    p, pre {
        margin: 0.5em 0 !important;
    }
    pre {
        padding: 0.2em 0.5em !important;
    }
`;

export const CenterContainer = (props) => <div css={cssCenterContainer} {...props} />;
