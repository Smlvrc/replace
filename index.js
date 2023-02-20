var stringname=prompt("bir yazi elave edin:");

var r=0;
var h=0;
for(const a in stringname){
    // console.log(stringname[a])
if(Number(stringname[a])){
r++;
}
else if (String(stringname[a])){
 h++;
}
}


if(r>h){
    for(const a in stringname){
    if(Number(stringname[a])){
  stringname=stringname.replace(stringname[a],"A")
  
}}   
console.log(stringname);
}

else if (r<h){
    for(const a in stringname){
        if (String(stringname[a])){
stringname=stringname.replace(stringname[a],'1')
}}
console.log(stringname)
}