console.log("connected");
 
//selektiranje na link kopcinjata za evra i angliski jazik
let euroButton=document.getElementById("euroButton");
let englishButton=document.getElementById("englishButton");
//selektiranje za input ,search button i reset button
let input=document.getElementById("input");
let searchButton=document.getElementById("searchButton");
let resetButton=document.getElementById("resetButton");
//selektiranje na listata za rezultat by class
let printList=document.getElementsByClassName("list-group")[0];
//euro div
let cardContainer= document.getElementById("cardContainer");
let cardContainerTwo=document.getElementById("cardContainerTwo");
//LOADER
let spiner=document.getElementById("spiner")


console.log(input)
console.log(result) 
//FETCH
function findCountry(countryName){
let url = `https://restcountries.com/v3.1/name/${countryName}`
let promiseOfFetch=fetch(url);
// console.log(promiseOfFetch);
 
promiseOfFetch.then(function(response){
    console.log(response);
    return response.text();
})
.then(function(result){
    spinnerFunction(false)
    console.log(result);
    let parsedResult=JSON.parse(result);
    console.log(parsedResult);
   printResult(parsedResult, printList);
})
.catch(function(error){
    console.log(error);
})
}
 
searchButton.addEventListener("click",function(){
    findCountry(input.value);
    cardContainer.innerHTML="";
    cardContainerTwo.innerHTML="";
    spinnerFunction(true);
})

//resetButton
resetButton.addEventListener("click",function(){
    spinnerFunction(false)
    printList.innerHTML="";
    cardContainer.innerHTML="";
    cardContainerTwo.innerHTML="";
    input.value="";
})

//loader
function spinnerFunction(show) {
    if (show) {
        spiner.style.display = "block";
    }
    else {
        spiner.style.display = "none";
    }
}

 //PRINT RESULT
function printResult(data, element){
    element.innerHTML ="";
    for (let i = 0;i < data.length;i++){
        element.innerHTML +=`
        <li class="list-group-item"><img src= "${data[i].flags.png}" alt="${data[i].name.official}></li>
        <li class="list-group-item">Name:  ${data[i].name.official}</li>
        <li class="list-group-item">Population:  ${data[i].population}</li>
        <li class="list-group-item">Capital: ${data[i].capital}</li>
        <li class="list-group-item">Area: ${data[i].area}</li>
        `
    }
    console.log(element);
};
//api povik za currency
function euros(){
    let euroUrl = `https://restcountries.com/v3.1/currency/EUR`
    let promiseOfFetch=fetch(euroUrl);
  
    promiseOfFetch.then(function(responseTwo){
        console.log(responseTwo);
        return responseTwo.text();
    })
    .then(function(resultTwo){
        spinnerFunction(false)
        console.log(resultTwo);
        let parsedResultTwo=JSON.parse(resultTwo);
        console.log(parsedResultTwo);
       printEuroCountry(parsedResultTwo,cardContainer)
    })
    .catch(function(errorTwo){
        console.log(errorTwo);
    })
    }
    euroButton.addEventListener("click",function(){
        euros();
        printList.innerHTML="";
        cardContainerTwo.innerHTML="";
        spinnerFunction(true)
    });


    function printEuroCountry(dataTwo,elementTwo){
       
        elementTwo.innerHTML="";
    for(let i = 0;i<dataTwo.length;i++){
    elementTwo.innerHTML+=`
    <ul>
    <li>${dataTwo[i].name.official}</li>
    </ul>
    `
}
console.log(elementTwo)
    }

//api povik za english language

function englishLanguage(){
    let englishUrl = `https://restcountries.com/v3.1/lang/English`
    let promiseOfFetch=fetch(englishUrl);
  
    promiseOfFetch.then(function(responseThree){
        console.log(responseThree);
        return responseThree.text();
    })
    .then(function(resultThree){
        spinnerFunction(false)
        console.log(resultThree);
        let parsedResultThree=JSON.parse(resultThree);
        console.log(parsedResultThree);
       printEnglishLanguage(parsedResultThree,cardContainerTwo)
    })
    .catch(function(errorThree){
        console.log(errorThree);
    })
    }
    englishButton.addEventListener("click",function(){
        englishLanguage();
        printList.innerHTML="";
        cardContainer.innerHTML="";
        spinnerFunction(true)
        
    });

    function printEnglishLanguage(dataThree,elementThree){
        
        elementThree.innerHTML="";
        for(let i = 0;i<dataThree.length;i++){
            elementThree.innerHTML+=`
            <ul>
            <li>${dataThree[i].name.official}</li>
            </ul>
            `
        }
        console.log(elementThree)
            }









