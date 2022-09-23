export function saveTokenInLocalStorage(tokenDetails: any) {
    tokenDetails.expireDate = new Date(
        new Date().getTime() + 30 * 60 * 1000
    );
    localStorage.setItem("user", JSON.stringify(tokenDetails));
}