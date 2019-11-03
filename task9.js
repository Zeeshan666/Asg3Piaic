var myarray = [24,53,78,91,12] ;
var largest = 0;
document.write("Array items :") ;
for (var i = 0; i <myarray.length; i++) {
    document.write(myarray[i]+", ") ;
    if (myarray[i] > largest) {
        largest = myarray[i] ;
    }
        
}

document.write("<br> largest number is "+largest+"<br>")