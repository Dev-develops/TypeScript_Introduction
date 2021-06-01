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

// Server Side Fetching