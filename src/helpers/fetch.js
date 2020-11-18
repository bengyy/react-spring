const baseUrl = process.env.REACT_APP_API_URL;

const fetchSinToken = ( endpoint, data, method = 'GET' ) => {

    


    let params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', data.email);
    params.set('password', data.password);    
    datos: String =params.toString();

    const url = `${ baseUrl }/${ endpoint }`;

    if ( method === 'GET' ) {
        return fetch( url );
    } else {
        const credenciales = btoa('angularappp' + ':' + '123456');        
        return fetch( url, {
            method,            
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + credenciales
                },
            body: params.toString()
        });        
    }
}

const fetchConToken = ( endpoint, data, method = 'GET' ) => {

    const url = `${ baseUrl }/${ endpoint }`;
    const token = localStorage.getItem('token') || '';

    if ( method === 'GET' ) {
        return fetch( url, {
            method,
            headers: {
                'x-token': token
            }
        });
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify( data )
        });
    }
}



export {
    fetchSinToken,
    fetchConToken
}