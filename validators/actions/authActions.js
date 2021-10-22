export const LOGIN = 'LOGIN';

export const tryLogin = (user, password) => {
    if(number == '4421234567' && password == '1234'){
        return{
            type: LOGIN,
            user: user 
        };
    }else{
        throw ('Usuario y/o contraseña incorrectos')
    }
}