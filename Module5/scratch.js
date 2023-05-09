// Code from the Exploration provided YouTube Videos on Promises and Async/Await

const { resolve } = require("path")

let p = new Promise((resolve, reject) => {
    let a = 1 + 2
    if (a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

p.then((message) => {
    console.log("This is in the then " + message)
}).catch((message) => {
    console.log("This is in the catch " + message)
})

//callbacks, which Promises replaced
const userLeft = true;
const userWatchingCatMeme = false;

function watchTutorialCallback(callback, errorCallback) {
    if (userLeft) {
        errorCallback( {
            name: 'User Left',
            message: ':('
        });
    } else if (userWatchingCatMeme) {
        errorCallback({
            name: 'User Watching Cat Meme',
            message: 'OSU CS < Cat'
        });
    } else {
        callback('Good job working on your homework');
    }
}

watchTutorialCallback((message) => {
    console.log('Success ' + message);
}, (error) => {
    console.log(error.name + ' ' + error.message)
})

function watchTutorialPromise() {
    return new Promise ((resolve, reject) => {
        if (userLeft) {
            reject( {
                name: 'User Left',
                message: ':('
            });
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'OSU CS < Cat'
            });
        } else {
            resolve('Good job working on your homework');
        }
    })
}

watchTutorialPromise().then((message) => {
    console.log('Success ' + message);
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
})

const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
});

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
});

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
});

// Promise.all([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ]).then((messages) => {
//     console.log(messages);
// })

Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message);
})

// Async/Await
function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${location}`)
        if (location === 'Google') {
            resolve('Google says hi');
        } else {
            reject('We can only talk to Google');
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing resonse');
        resolve(`Extra information + ${response}`);
    })
}