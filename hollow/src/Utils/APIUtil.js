export const BASE_URL = 'https://www.hollowbackend.com';
export const ACCESS_TOKEN = 'accessToken';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );

};

export function signup(signupRequest) {
    return request({
        url: BASE_URL + "/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}

export function login(loginRequest){
    return request({
        url: BASE_URL + "/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function getCurrentUser(){
    if(!localStorage.getItem(ACCESS_TOKEN)){
        return Promise.reject("No access token set.");
    }

    return request({
        url: BASE_URL + "/playerStat",
        method: 'GET'
    });
}

export function addMask() {
    return request({
        url: BASE_URL + "/addMask",
        method: 'POST'
    });
}

export function removeMask(){
    return request({
        url: BASE_URL + "/removeMask",
        method: 'POST'
    });
}

export function addLifeBlood() {
    return request({
        url: BASE_URL + "/addLifeBlood",
        method: 'POST'
    });
}

export function removeLifeBlood(){
    return request({
        url: BASE_URL + "/removeLifeBlood",
        method: 'POST'
    });
} 

export function addVessel(){
    return request({
        url:BASE_URL + "/addVesselFragment",
        method: 'POST'
    });
}

export function removeVessel(){
    return request({
        url:BASE_URL + "/removeVesselFragment",
        method: 'POST'
    });
}

export function addEssense(){
    return request({
        url:BASE_URL + "/addEssense",
        method: 'POST'
    });
}

export function removeEssense() {
    return request({
        url:BASE_URL + "/removeEssense",
        method: 'POST'
    });
}

export function addNail(){
    return request({
        url:BASE_URL + "/addNail",
        method: 'POST'
    });
}

export function removeNail(){
    return request({
        url:BASE_URL + "/removeNail",
        method: 'POST'
    });
}

export function addColosseum(){
    return request({
        url:BASE_URL + "/addColosseum",
        method: 'POST'
    });
}

export function removeColosseum(){
    return request({
        url:BASE_URL + "/removeColosseum",
        method: 'POST'
    });
}

export function addBoss(value){
    return request({
        url: BASE_URL + "/addBoss/" + value,
        method: 'POST'
    });
}

export function removeBoss(value) {
    return request({
        url: BASE_URL + "/removeBoss/" + value,
        method: 'POST'
    });
}

export function addCharm(value) {
    return request({
        url: BASE_URL + "/addCharm/" + value,
        method: 'POST'
    });
}

export function removeCharm(value) {
    return request({
        url: BASE_URL + "/removeCharm/" + value,
        method: 'POST'
    });
}

export function addEquipment(value){
    return request({
        url: BASE_URL + "/addEquipment/" + value,
        method: 'POST'
    });
}

export function removeEquipment(value){
    return request({
        url: BASE_URL + "/removeEquipment/" + value,
        method: 'POST'
    });
}

export function addDreamer(value){
    return request({
        url: BASE_URL + "/addDreamer/" + value,
        method: 'POST'
    });
}

export function removeDreamer(value){
    return request({
        url: BASE_URL + "/removeDreamer/" + value,
        method: 'POST'
    });
}

export function addNailArt(value){
    return request({
        url: BASE_URL + "/addNailArt/" + value,
        method: 'POST'
    });
}

export function removeNailArt(value){
    return request({
        url: BASE_URL + "/removeNailArt/" + value,
        method: 'POST'
    });
}

export function addSpell(value){
    return request({
        url: BASE_URL + "/addSpell/" + value,
        method: 'POST'
    });
}

export function removeSpell(value){
    return request({
        url: BASE_URL + "/removeSpell/" + value,
        method: 'POST'
    });
}

export function addDreamWarrior(value){
    return request({
        url: BASE_URL + "/addWarrior/" + value,
        method: 'POST'
    });
}

export function removeDreamWarrior(value){
    return request({
        url: BASE_URL + "/removeWarrior/" + value,
        method: 'POST'
    });
}

export function addGrim(value) {
    return request({
        url: BASE_URL + "/addGrim/" + value,
        method: 'POST'
    });
}

export function removeGrim(value) {
    return request({
        url: BASE_URL + "/removeGrim/" + value,
        method: 'POST'
    });
}

export function addGodMaster(value) {
    return request({
        url: BASE_URL + "/addGodMaster/" + value,
        method: 'POST'
    });
}

export function removeGodMaster(value) {
    return request({
        url: BASE_URL + "/removeGodMaster/" + value,
        method: 'POST'
    });
}






