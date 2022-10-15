const localhostBaseUrl = process.env.REACT_APP_LOCAL_URL;
const prodBaseUrl = process.env.REACT_APP_PRODUCTION_URL;
let isProduction = true;

module.exports = {
    // base url local machine
    baseUrl: isProduction ? prodBaseUrl : localhostBaseUrl
}