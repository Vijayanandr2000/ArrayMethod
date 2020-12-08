var request = new XMLHttpRequest()


request.open('GET',"https://restcountries.eu/rest/v2/all")

request.onload = function(){
//let s=0;
var dataResult = JSON.parse(this.response)
//console.log(dataResult)
for(var i = 0;i<dataResult.length;i++){
  //var data=dataResult[i];
  
}
console.log(dataResult);
// var reg=dataResult.filter((item)=>{
//   return item.population<200000;
// })
//console.log(reg);
dataResult.forEach(item=>{
    console.log(item.name);
    console.log(item.capital);
    console.log(item.flag);
})

}

request.send()