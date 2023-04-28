function showsum(){
    var sum=0;
    for(var i=0;i<window.localStorage.length;i++){
      var number=localStorage.getItem(localStorage.key(i));
      sum+=parseInt(number);
    }
    var a=document.createElement("span");
    var d=document.getElementById("show-sum-item");
    a.innerHTML=sum;
    d.appendChild(a);
  }
showsum();