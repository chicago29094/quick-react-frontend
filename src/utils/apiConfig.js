const BASE_API_URL = 
    window.location.hostname === 'localhost'
        ? process.env.REACT_APP_QR_API_LOCAL 
        : process.env.REACT_APP_QR_API_REMOTE

export default BASE_API_URL;

