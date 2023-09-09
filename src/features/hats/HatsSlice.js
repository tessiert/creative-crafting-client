import { HATS } from '../../app/assets/shared/HATS';

export const selectAllHats = () => {
    return HATS;
};

export const selectHatById =(id) => {
    return HATS.find(
        (hat) => hat.id === id
        );
};