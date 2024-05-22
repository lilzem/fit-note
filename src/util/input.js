import { DISALLOWED_INPUT_SYMBOLS } from "../constants/constants";

export const handleKeyDown = (e) => {
    if (DISALLOWED_INPUT_SYMBOLS.includes(e.key)) {
        e.preventDefault();
    }
};
