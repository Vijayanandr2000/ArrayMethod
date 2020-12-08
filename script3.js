var request = new XMLHttpRequest()


request.open('GET',"https://restcountries.eu/rest/v2/all")

request.onload = function(){
//let s=0;
var d=[];
var dataResult = JSON.parse(this.response)
//console.log(dataResult)
for(var i = 0;i<dataResult.length;i++){
  var data=dataResult[i].population;
  d.push(data);
}
console.log(d);
var res=d.reduce(function(av,item){
    return av+item;
},0);
console.log(res);


}

request.send()