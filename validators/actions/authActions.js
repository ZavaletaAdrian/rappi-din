export const LOGIN = 'LOGIN';

export const tryLogin = (number, password) => {
    if(number == '4421234567' && password == '1234'){
        return{
            type: LOGIN,
            number: number
        };
    }else{
        throw ('Numero y/o codigo no validos')
    }
}