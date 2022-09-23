import { Dispatch } from "redux";
import { SET_SIGN_IN_SUCCESSFUL } from "../actionTypes";
import { logout, refresh } from "../action/authAction";

export function saveTokenInLocalStorage(tokenDetails: any) {
    tokenDetails.expireDate = new Date(
        new Date().getTime() + 30 * 60 * 1000
    );
    localStorage.setItem("user", JSON.stringify(tokenDetails));
}

//log out timer
export function runLogoutTimer(dispatch: any, timer: any) {
    setTimeout(() => {
        dispatch();
    }, timer);
}

//check login
export function checkAutoLogin(dispatch: Dispatch) {
    const tokenDetailsString = localStorage.getItem("user");
    let tokenDetails = "";
    if (!tokenDetailsString) {
        dispatch<any>(logout());
        console.log("error")
        return;
    }

    tokenDetails = JSON.parse(tokenDetailsString);
    let expireDate = new Date(tokenDetails);
    let todaysDate = new Date();

    if (todaysDate > expireDate) {
        dispatch<any>(refresh());
        dispatch<any>(logout());
        return;
    }
    dispatch({
        type: SET_SIGN_IN_SUCCESSFUL,
        payload: tokenDetails
    })

    const timer = expireDate.getTime() - todaysDate.getTime();

    runLogoutTimer(dispatch, timer);
}