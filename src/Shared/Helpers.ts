import { decode } from "jsonwebtoken";
import Constants from "./Constants";
import { Usuario } from "../models/Index";

interface PayLoad {
    nameid: string | null;
}

const getUserIdByToken = (): string | null => {

    const token = getTokenFromLocalStorage();
    if (!!!token)
        return null;

    const payload = decode(token) as PayLoad;
    return payload.nameid;

}

const getTokenFromLocalStorage = (): string | null => {

    return window.localStorage.getItem(Constants.TOKEN);

}

const storageTokenLocal = (token: string | undefined): void => {    

    if (!!!token)
        return;

    window.localStorage.setItem(Constants.TOKEN, token);
    Constants.usuarioId = getUserIdByToken();

}

const storeUser = (usuario: Usuario | undefined): void => {
    
    const json = JSON.stringify(usuario);    
    window.localStorage.setItem(Constants.USER, json);
}


const getUserStored = (): Usuario => {

    const json = window.localStorage.getItem(Constants.USER);
    if (!!!json)
        return {} as Usuario;

    const user = JSON.parse(json);
    return user as Usuario;
}

const removeItemsLocalStorage = (): void => {

    window.localStorage.clear();
}

export {
    getUserIdByToken,
    storageTokenLocal,
    getTokenFromLocalStorage,
    storeUser,
    getUserStored,
    removeItemsLocalStorage
};