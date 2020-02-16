import styled from '@emotion/styled';

export const CenterContainer = styled.div`
    text-align: center;
    p, pre {
        margin: 0.5em 0 !important;
    }
    pre {
        padding: 0.2em 0.5em !important;
    }
`;

export const List = styled.ul`
    max-width: 85vw;
    small {
        color: grey;
    }
`;

export const ImageTable = styled.div`
    display: flex;
    width: 85vw;
    text-align: center;
    margin: 1em 0;
    div {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
    img {
        max-height: ${({ imgMaxHeight = "200px" }) => imgMaxHeight };
        object-fit: fill;
        margin: auto;
    }
`;
