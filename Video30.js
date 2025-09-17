let num = [1,3,5,6,7,8,2,46,0]

const newNums = num.filter( (num, index)=>{
    return num>4
})
console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  const userBooks = books.filter( (bk) => {
    return bk.genre === 'History'
  })

  console.log(userBooks);
  


  const userBooks2 = books.filter((bk2) => {
    return bk2.publish > 2000 
})

console.log(userBooks2);



const userBooks3 = books.filter((bk3) => {
    return bk3.publish > 2000 && bk3.genre === 'History'
})

console.log(userBooks3);


// ===============================================================================

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const addTen = myNumbers.map((num) => {
    return num+10
})

console.log(addTen);


// =============================== CHAINING ====================================

const digit = [1,2,3,4,5,6,7,8,9,10]
const addElev = digit.map((num) => {return num*10})
                     .map((num) => {return num+1})
                     .filter((num) => {return num>40})

console.log(addElev);







// reduce

const myTotal = digit.reduce((acc , currval) => {
    console.log(`acc ${acc} and currval ${currval}`);
    return acc+currval
},0)

console.log(myTotal);
