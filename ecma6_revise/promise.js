// Promise Explanation Section.
// Using methods is same as in the script.js.

// This is the creation of a promise that has been marked as resolved.

let promise = Promise.resolve('Promise Resolved')
promise.then(() => {
    // console.log("After the promise was resolved");
})

//Basic Syntax and functioning of a promise.

let myPromise = new Promise((resolve, reject) => {
    let finishWork = true;

    if (finishWork) {
        resolve();
    } else {
        reject();
    }
})

myPromise
    .then((res) => {
        // console.log("The promise was resolved successfully");
    })
    .catch((err) => {
        // console.log("The promise was rejected!");
    })

// Server Side Fetching enabled with promises.

function getData(method, url) {
    return new Promise((resolve, reject) => {

        let xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.onload = function() {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: this.statusText
                });
            }
        };

        xhr.onerror = function() {
            reject({
                status: this.status,
                statusText: this.statusText
            })
        };

        xhr.send();
    })
}

getData('GET', 'https://jsonplaceholder.typicode.com/users')
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })