//Funcion asincrona:

const getFakePerson = async() => {
    let res = await fetch('https://randomuser.me/api/?results=1');
    let {results} = await res.json();
    console.log(results);
}

getFakePerson();

//Promesa asincrona:

const getFakePerson2 = () => {
    return new Promise(async(resolve, reject) => {
        const api = 'https://randomuser.me/api/?results=${count}';
        const request = new XMLHttpRequest();
        request.open('GET', api);
        request.onload = () => (request.status === 200) ? resolve(JSON.parse(request.response).results) : reject(Error(request.statusText));
    });
}
