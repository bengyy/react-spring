import Swal from 'sweetalert2';
import { fetchSinToken } from '../helpers/fetch';
import { types } from '../types/types';




export const startLogin = ( email, password ) => {
    return async( dispatch ) => {

        

        const resp = await fetchSinToken( 'oauth/token', { email, password }, 'POST' );
        const body = await resp.json();
        
        
        console.log(body)
        if( body.access_token ) {            
            localStorage.setItem('token', body.access_token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            localStorage.setItem('ui', body.jti );
            localStorage.setItem('name', body.nombre );

            dispatch( login({
                uid: body.jti,
                name: body.nombre
            }) )
        } else {
            console.log('erorororor')
            Swal.fire('Error', body.msg, 'error');
        }
        

    }
}

export const startRegister = ( email, password, name ) => {
    return async( dispatch ) => {

        const resp = await fetchSinToken( 'auth/new', { email, password, name }, 'POST' );
        const body = await resp.json();

        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({
                uid: body.uid,
                name: body.name
            }) )
        } else {
            //Swal.fire('Error', body.msg, 'error');
        }


    }
}

export const startChecking = () => {
    return async(dispatch) => {


        if( localStorage.getItem('token') ) {            
            localStorage.getItem('token' );
            localStorage.getItem('token-init-date');

            dispatch( login({
                uid: localStorage.getItem('ui'),
                name: localStorage.getItem('name')
            }) )
        } else {
            //Swal.fire('Error', 'El tiempo de la secion caduco', 'error');            
            //console.log('El tiempo de la secion caduco');
            dispatch( checkingFinish() );
        }
    }
}

const checkingFinish = () => ({ type: types.authCheckingFinish });



const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});


export const startLogout = () => {
    return ( dispatch ) => {

        localStorage.clear();
       // dispatch( eventLogout() );
        dispatch( logout() );
    }
}

const logout = () => ({ type: types.authLogout })