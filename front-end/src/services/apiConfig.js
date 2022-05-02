import axios from axios; 

let api = null; 

const productionUrl = "http//heroku.com"
const localUrl = "http//localhost:3000"

function apiCheck(){
    if ( window.location.host === "localhost"){ 
        api = localUrl
    }else {
        api = productionUrl
    }
}

apiCheck(); 

