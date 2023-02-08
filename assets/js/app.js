var cl = console.log;
let ages = [10, 21, 30, 41, 50, 61, 70, 81, 90];
// lastIndexNumber = array.lehgth - 1

let doubleages = [];
// for (let i=0; i < ages.length; i++){
//     cl(ages[i]*2)
//     doubleages.push(ages[i]*2)
// }

// ages.forEach(function(age){
//     cl(age)
//     doubleages.push(ages*2)
// })

// ages.forEach((age) => {
//     doubleages.push(ages*2)
// })

ages.forEach(ages => doubleages.push(ages * 2))
cl(doubleages)

// use of Map Method
// you have given a array
// you have to create new array by given array
// you have to apply same functionality on each and every element of array

// 1. Map
// it returms new array
// the length of a new array === to the length of the given array (always)
let age = [10, 21, 30, 41, 50, 61, 70, 81, 90];

// array.map (callback Fun.(para){
//     para >> it gives us each and every element of array
// })

// let doublAages = ages.map (function(age){
//     return ages*2
// })

// let doublAages = ages.map ((age) => {
//     return ages*2
// })

let doublAages = age.map(function (age) {
    return age * 2
})
cl(doublAages)
// let Ages = age.map(age => age *2)
// cl(Ages)

let number = [10, 21, 30, 41, 50, 61, 70, 81, 90];
let sqrt = [];
// for(let i=0; i < number.length; i++){
//     sqrt.push(Math.sqrt(number[i]))
// }
// cl(sqrt)
// agearr.forEach(function(age){
//     sqrtAge.push(Math.sqrt(age))
// })
// let sqrt = agearr.map((age) => {
//     return Math.sqrt(age)
// })
// cl(sqrt)
let num = number.map((age) => Math.sqrt(age))
cl(num)

let companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

let companynameonly = []
// for (i=0; i< companies.length; i++){
//     cl(companies[i].name)
//     companynameonly.push(companies[i].name)
// }
// cl(companynameonly)


// companies.forEach(function(comp){
//     companynameonly.push(comp.name)
// })
// cl(companynameonly)

// companies.forEach(comp=>companynameonly.push(comp.name))
// cl(companynameonly)

// let comp = companies.map((comp) =>(comp.name))
// cl(comp)

// let company = companies.map(function(comp){
//     return comp.name
// })
// cl(company)
let cmp = companies.map(camp => camp.name)
cl(cmp)


// for (i=0; i< companies.length; i++){
//     companynameonly.push({
//         compName : companies[i].name,
//         start : companies[i].start
//     })
// }
// cl(companynameonly)

// companies.forEach(function (comp) {
//     companynameonly.push({
//         compName: comp.name,
//         start: comp.start
//     })
// })
// cl(companynameonly)

// companies.forEach(comp => companynameonly.push({
//     comName: comp.name,
//     start: comp.start
// }))
// cl(companynameonly)

// compstart = companies.map(function (comp) {
//     return ({
//         comName: comp.name,
//         start: comp.start
//     })
// })
// cl(compstart)

compstart = companies.map(camp => ({
    compName: camp.name,
    start: camp.start
}))
cl(compstart)

// [{companyName :"company one", duration : 22}]

let duration = []
// for (i=0; i< companies.length; i++){
//     duration.push({
//         conpName : companies[i].name,
//         duration : companies[i].end - companies[i].start
//     })
// }
// cl(duration)

// companies.forEach (function(comp){
//     duration.push({
//         compName : companies.comp,
//         duration : comp.end - comp.start
//     })
// })
// cl(duration)

// companies.forEach(comp => duration.push({
//     compName: companies.comp,
//     duration: comp.end - comp.start
// }))
// cl(duration)

// duration = companies.map(comp => {
//     return ({
//         compName: companies.comp,
//         duration: comp.end - comp.start
//     })

// })
// cl(duration)

duration = companies.map(comp => ({
    compName: comp.name,
    duration: comp.end - comp.start
}))

cl(duration)


// Filter
// case use of filter
// you have given an array and one condition
// you have to create new array of  elements (of given array), who pass/ satisfy the given condition
// filter returns array
// the length of new array is may or may not be equal to the length of given array

ages = [10, 21, 30, 41, 50, 61, 70, 81, 90];
// let adultAges = []
// for (i = 0; i < ages.length; i++) {
//     if (age[i] >= 18) {
//         adultAges.push(ages[i])
//     }
// }
// cl(adultAges)

// ages.forEach(function (age) {
//     if (age >= 18) {
//         adultAges.push(age)

//     }
// })
// cl(adultAges)

// age = ages.filter(age => {
//     return age >= 18
// })
// cl(age)

// age = ages.filter(function(age){
//     if (age >=18){
//         return true
//     }else {
//         return false
//     }
// })
// cl(age)

let adultAges = ages.filter(age => age >= 18)
cl(adultAges)

companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

// array of compainies whose catyegory is retail

// let compRetail =[]
// for (let i = 0; i < companies.length; i++){
//     if (companies[i].category.toLocaleLowerCase().trim() === "retail"){
//         compRetail.push(companies[i])
//     }
// }
// cl(compRetail)

// companies.forEach(function(comp){
//     if(comp.category.toLocaleLowerCase().trim() === 'retail'){
//         compRetail.push(comp)
//     }
// })
// cl(compRetail)

// let compRetail = companies.filter(comp => {
//     return comp.category.toLocaleLowerCase().trim() === "retail"
// })
// cl(compRetail)

let compRetail = companies.filter(comp => comp.category.toLocaleLowerCase().trim() === "retail")
cl(compRetail)

companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];
// [{compName : "company one", duration : 22}] and which started  in (1980-1989)
// let comp80s = []
// 80, 81, 82, 83, 84, 85, 86, 87, 88, 89
// companies.forEach(comp => {
//     if (comp.start >= 1980 && comp.start <= 1989) {
//         comp80s.push({
//             compName: comp.name,
//             duration: comp.end - comp.start
//         })
//     }
// })
// cl(comp80s)

// let comp80s =companies.filter(comp => {
//     return comp.start >= 1980 && comp.start <= 1989
// }).map(comp => {
//     return {
//         compName : comp.name,
//         duration : comp.end - comp.start
//     }
// })
// cl(comp80s)

let comp80s = companies.filter(comp => comp.start >= 1980 && comp.start <= 1989).map(comp => ({
    compName: comp.name,
    duration: comp.end - comp.start
}))

cl(comp80s)

let compfinance = []
// for (let i =0; i < companies.length; i++){
//     if (companies[i].category.toLocaleLowerCase().trim()==='finance'){
//         compfinance.push ({
//             compName : companies[i].name ,
//             lifespan : `${companies[i].start} - ${companies[i].end}`
//         })
//     }

// } 
// cl(compfinance)

// companies.forEach(comp => {
//     if (comp.category.toLocaleLowerCase().trim() === 'finance') {
//         compfinance.push({
//             compName: comp.name,
//             lifespan: `${comp.start} - ${comp.end}`
//         })
//     }
// })
// cl(compfinance)

compfinance = companies.filter(comp => comp.category.toLocaleLowerCase().trim() === "finance").map(comp => ({
    compName: comp.name, lifespan: `${comp.start} - ${comp.end}`
}))
cl(compfinance)

// [{compName : "company one", catg : "finance"}] and comp which runs atleast 10 yrs

// let compRunAt10 = [];
// companies.forEach(comp => {
//     if (comp.end - comp.start >= 10){
//         compRunAt10.push({
//             compName : comp.name,
//             category : comp.category
//         })
//     }
// })

// cl(compRunAt10)

// compRunAt10 = companies.filter(comp => comp.end - comp.start >= 10).map(comp => ({
//     compName : comp.name,
//     category : comp.category
// }))
// cl(compRunAt10)


compRunat10 = companies.filter(comp => {
    return comp.end - comp.start >= 10
}).map(comp => {
    return {
        compName: comp.name,
        category: comp.category
    }
})
cl(compRunat10)


companies = [
    { name: "Company One", id: "1", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: "2", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: "3", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: "4", category: "RetAil", start: 1989, end: 2010 },
    { name: "Company Five", id: "5", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: "6", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: "7", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: "8", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: "9", category: " retail ", start: 1981, end: 1989 }
];
let givenId = 4;
let getObj;

// companies.forEach(comp => {
//     if(Number (comp.id) === givenId){
//         getObj = comp
//     }
// })

// cl(getObj)

// getObj = companies.find(comp => {
//     return +comp.id === givenId
// })
// cl(getObj)

getObj = companies.find(comp => +comp.id === givenId)
cl(getObj)

let Ages = [10, 21, 30, 41, 50, 61, 70, 81, 90]
// let totalages = 0;

// age.forEach (age => {            // undefined
//     totalages = totalages + age

// })
// cl(totalages)

// let totalages = Ages.reduce((accum, nextvalue) => {
//     return accum = accum + nextvalue
// })
// cl(totalages)
let totalages = Ages.reduce((accum, nextvalue) => accum = accum + nextvalue)
cl(totalages)

// let multiages =1;
// Ages.forEach(age => multiages *= age );
// cl(multiages)

let multiages = Ages.reduce((accum, currentvalue) => accum *= currentvalue)
cl(multiages)


companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

//[{compName : "company one", duration : 22}]
let compNameDur=companies.reduce((accum, comp) => {
    accum.push ({
        compName : comp.name,
        duration : comp.end - comp.start
    })
    return accum
}, [])
cl(compNameDur)

let totalagesofcomp = companies.reduce((total, comp ) => {
    return total += comp.end - comp.start
},0)
cl(totalagesofcomp)
