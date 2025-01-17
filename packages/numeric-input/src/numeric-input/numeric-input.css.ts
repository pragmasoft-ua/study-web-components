import { css } from 'lit';

export const styles = css`
    /* Chrome, Safari, Edge, Opera */
    input.no-spinner[type=number]::-webkit-outer-spin-button,
    input.no-spinner[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input.no-spinner[type=number] {
        -moz-appearance: textfield;
    }
`;