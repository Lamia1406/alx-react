import { createContext } from 'react';
export const user = {
    email: "", 
    password: "", 
    isLoggedIn: false,
}
export function logOut(){

}

const AppContext = createContext({user, logOut});


export default AppContext;
