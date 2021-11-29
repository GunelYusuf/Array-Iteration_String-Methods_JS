//#region  Map method
const arr=[2,7,9,21,24,26]

Array.prototype.mymap = function(callback) {
    const resultArray = [];
    for (let index = 0; index < this.length; index++) {
        resultArray.push(callback(this[index], index, this));
    }
    return resultArray;
}

let result=arr.mymap(function(value,index,array) {
    console.log(`${value}: value,${index}: index,${array}: array`);
    return value*3;
})
//#endregion

//#region Filter method
Array.prototype.fooFilter = function(callback) {
    const returnArr = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])==true) {
        returnArr.push(this[i]);
      }
    }
    return returnArr;
  };
  const arr7 = [7,9,14,21,24,26];
  console.log(arr7.fooFilter(x => x>20));
 //#endregion 

//#region Reduce method
Array.prototype.myReduce = function(callback) {
    let a = 0;
    for (let i = 0; i < arr.length; i++) 
    {
       callback(a=a+arr[i]);
    }
    return a;
}
 const arr24 = [7,9,14,21,24,26];
 let end=arr24.myReduce((num1,sum) => num1+sum);
 console.log(end);
//#endregion

//#region forEach method
Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i]);
    }
  };
  function callback(element) {
    console.log(element); 
  }
  
  var array = [2, 4, 6, 8, 10];
  array.myForEach( callback);
//#endregion

//#region Include method
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const num = 6;
Array.prototype.customIncludes = function(num){
   for(let i = 0; i < this.length; i++){
      const el = this[i];
      if(num === el){
         return true;
      };
   };
   return false;
};
console.log(arr.customIncludes(num));
 //#endregion

//#region Find method
const gun=[7,9,21,24,26,100];
function myFind(num,ar) {
   for (let i = 0; i < ar.length; i++) 
    {
       if (num==ar[i])
        {
           return num;
        }
    }
}
let em1=myFind(24,gun)
console.log(em1);
//#endregion


//#region Task2
const msg="Hello Gunel";
function reverseString(str) {

    return str.split('').reverse().join('');
}
console.log(reverseString(msg));
//#endregion

