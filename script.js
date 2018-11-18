var inventors=[{first: 'Vitaly' , last:'Abalakov' ,year:1906 , passed:1986},
{first: 'Ernst' ,last: 'Abbe' ,year:1840 , passed:1905},
{first: 'Hovannes' ,last: 'Adamian' ,year: 1879 , passed:1932},
{first: 'Samuel' ,last: 'Alderson' ,year: 1914 , passed:2005},
{first: 'Alexandre' ,last: 'Alexeieff' ,year:  1901 , passed:1982},
{first: 'Rostislav' ,last: 'Alexeyev' ,year: 1916 , passed:1980},
{first: 'Ottomar' ,last: 'Anschütz' ,year: 1846 , passed:1907}]

// return inventors born in 19th century
const people=['Vitaly,Abalakov','Ernst,Abbe','Hovannes,Adamian','Samuel,Alderson','Alexandre,Alexeieff','Rostislav,Alexeyev','Ottomar,Anschütz']

const nineteen= inventors.filter(function (inventor){
    return inventor.year>=1900 && inventor.year<2000 ;
});

// console.table(nineteen);

// return inventors full name
const names= inventors.map(
    function (inventor){
        return inventor.first+" "+inventor.last;

});

// console.table(names);

// sort inventors based on there DOB
const ordered= inventors.sort(function (firstPerson, secondPerson){
    if (firstPerson.year > secondPerson.year){
        return 1;
    }
    else{
        return -1;
    }
}
);

// console.table(ordered);

// calculate the total years lived 
const totalYear= inventors.reduce(function (total,inventor){
  
    return total+(inventor.passed - inventor.year);
},0);

// console.log(totalYear);

//sort the inventors by years lived

const sortYearsLived = inventors.sort(function (a,b){
    const lastPersonAge= a.passed-a.year;
    const nextPersonAge=b.passed-b.year;
    (lastPersonAge>nextPersonAge)? -1: 1;
});

// console.table(sortYearsLived );

// sort people alphabetically

const alpha = people.sort(function (lastone, nextone){
    const [alastname, afirstname]= lastone.split(',');
    const [blastname, bfirstname]= nextone.split(',');
    return blastname > alastname? 1:-1;
});

// console.table(alpha);


// count distinct objects

const data=['car','truck','bike','car','truck','bike','car','truck'];
 const transport= data.reduce(function (obj, item){
    if(!obj[item]){
        obj[item]=0;
    }
    obj[item]++;
    return obj;
 },{});

//  console.log(transport);

// some function

const sam= inventors.some (function (people){
    return people.first==='Samuel';
});

// console.log(sam);

// every function

const everysam= inventors.every (function (people){
    return people.first==='Samuel';
});

// console.log(everysam);

// find function

const vit= inventors.find(inv =>(inv.first==='Vitaly'));

// console.log(vit);

// find index

const index= inventors.findIndex(investor=> (investor.year == 1906));

// console.log(index);


// delete array element 

// inventors.splice(index,1);
// console.log(inventors);

//or create a new array with deleted element

const newArray= [
    ...inventors.slice(0,index), ...inventors.slice(index+1)
];

console.log(newArray);

// or




