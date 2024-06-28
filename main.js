"use strict";
// question no 1
function fetchGreeting() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Hello,World!`);
        }, 2000);
    });
}
;
//question no 2
function stimulateTask() {
    console.log("task started");
    setTimeout(() => {
        console.log("task completed");
    }, 1000);
}
//question no 3
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`data fetched successfully!`);
        }, 1000);
    });
}
;
//question no 4
function fetchWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();
            if (rand < 0.5) {
                resolve("Data fetched successfully!");
            }
            else {
                reject("Data fetched successfully!");
            }
        }, 1000);
    });
}
fetchWithError()
    .then(data => console.log(data))
    .catch(error => console.error(error));
//question no 5
function fetchData1() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 1000);
    });
}
Promise;
{
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("data processed:" + data);
        }, 1000);
    });
}
function executeSequentially() {
    fetchData()
        .then(data => {
        console.log(data);
        return processData(data);
    })
        .then(processedData => {
        console.log(processedData);
    });
}
executeSequentially();
