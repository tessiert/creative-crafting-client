import { NECKLACES } from "../../app/assets/shared/NECKLACES";

export const selectAllNecklaces = () => {
    return NECKLACES;
}

export const selectNecklaceById = (id) => {
    return NECKLACES.find(
        (necklace) => necklace.id === id
    );
};