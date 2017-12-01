$(document).ready(function(){
  $("input.lang").submit(function(event){
    event.preventDefault();
    var a += parseInt("input.ansA").val();
    var b += parseInt("input.ansB").val();
    var c += parseInt("input.ansC").val();
    var d += parseInt("input.ansD").val();
    var e += parseInt("input.ansE").val();
    var result = maxAnswer(a,b,c,d,e);

    if(maxAnswer){

    }

    alert("Hello World");
  });
});

//BACKEND BELOW THIS LINE---------------------
function maxAnswer(a,b,c,d,e){
  var max = 0;
  var answers = {
    A:a,
    B:b,
    C:c,
    D:d,
    E:e,
  };

  for (i=0;i<answers.length;i++){
    var curr = arr[i];
    if (max <= curr){
      max = curr;
    }

    return curr;
  }
}
