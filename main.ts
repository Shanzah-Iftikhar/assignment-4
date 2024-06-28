// question no 1

function fetchGreeting():Promise<string>{
    return new Promise((resolve)=>{
        setTimeout(
            ()=>{resolve(`Hello,World!`);
            },2000);
        })};

//question no 2

function stimulateTask(){
    console.log("task started");
    setTimeout(()=>{
        console.log("task completed");
    },1000);
}

//question no 3

function fetchData():Promise<string>{
    return new Promise((resolve)=>{setTimeout(()=>{
        resolve(`data fetched successfully!`);
    },1000); 
})};

//question no 4

function fetchWithError():Promise<string>
{
    return new Promise((resolve , reject )=>{
        setTimeout(()=>
        {
            const rand = Math.random();
            if (rand<0.5){
                resolve("Data fetched successfully!");
            }
            else{
                reject("Data fetched successfully!");
            }
        },1000);
    });
}
fetchWithError()
.then(data=>console.log(data))
.catch(error=>console.error(error));

//question no 5

function fetchData1():Promise<string>
{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Data fetched");

        },1000
    );
    });
}
function processData(data:string);
Promise<string>
{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("data processed:"+ data);
        },1000);
    });
}

function executeSequentially(){
    fetchData()
    .then(data=>{
        console.log(data);
        return processData(data);
    })
    .then(processedData=>{
        console.log(processedData);
    });
}
executeSequentially();
