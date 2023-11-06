//Q1
// Get all the countries from Asia continent /region using Filter function

var xml=new XMLHttpRequest();
xml.open("GET","https://restcountries.com/v3.1/all");
xml.send();
xml.onload=function(){
    var data=xml.response;
    var res=JSON.parse(data)
    console.log("------------------------!Starting 1st one!--------------------");
    var continent=res.filter((val)=>val.continents=="Asia")
    var continentres=continent.map((country)=>console.log(country.name.common))
    

}

// Q2
// Get all the countries with a population of less than 2 lakhs using Filter function

var xml2=new XMLHttpRequest();
xml2.open("GET","https://restcountries.com/v3.1/all");
xml2.send();
xml2.onload=function(){
    console.log("------------------------!Finished 1st one!--------------------");
    console.log("------------------------!Starting 2nd !--------------------");
    var data=xml2.response;
    var res=JSON.parse(data);


    var population=res.filter((val)=>val.population<200000)
    
    var populationres=population.map((val)=>console.log(val.name.common))
    
}
//Q3
// Print the following details name, capital, flag, using forEach function

var xml3=new XMLHttpRequest();
xml3.open("GET","https://restcountries.com/v3.1/all");
xml3.send();
xml3.onload=function(){
    console.log("------------------------!Finished 2rd!--------------------");
    console.log("------------------------!Starting 3rd!--------------------");
    var data=xml3.response;
    var res=JSON.parse(data);
    res.forEach(element => {
        console.log(element.name);
        console.log(element.flag);
        console.log(element.capital);
    });
    
}
//Q4
//Print the total population of countries using reduce function

var xml4=new XMLHttpRequest();
xml4.open("GET","https://restcountries.com/v3.1/all");
xml4.send();
xml4.onload=function(){
    console.log("------------------------!Finished 3rd!--------------------");
    console.log("------------------------!Starting 4th!--------------------");
    var data=xml4.response;
    var res=JSON.parse(data);
    
    var total=res.reduce((pop,full)=>pop+full.population,0)
    console.log(total);
    console.log(res);
}

// Q5
// Print the country that uses US dollars as currency.
var xml5=new XMLHttpRequest();
xml5.open("GET","https://restcountries.com/v3.1/all");
xml5.send();
xml5.onload=function(){
    console.log("------------------------!Finished 4rd!--------------------");
    console.log("------------------------!Starting 5th!--------------------");
    var data=xml5.response;
    var res=JSON.parse(data);
    
    var currency = res.filter((value)=> value.currencies && value.currencies.USD)
    console.log(currency)
    currency.forEach((value)=>console.log(value.name.common))
}