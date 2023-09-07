import { KEYCHAINS } from "../../app/assets/shared/KEYCHAINS";

export const selectAllKeychains = () => {
    return KEYCHAINS;
}

export const selectKeychainById = (id) => {
    return KEYCHAINS.find(
        (keychain) => keychain.id === id
    );
};