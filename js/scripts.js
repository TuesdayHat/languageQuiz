$(document).ready(function(){
  $("#INSERT_FORM_ID_HERE").submit(function(event){
    var a += parseInt("input.ansA").val();
    var b += parseInt("input.ansB").val();
    var c += parseInt("input.ansC").val();
    var d += parseInt("input.ansD").val();
    var e += parseInt("input.ansE").val();
  });
});


//BACKEND BELOW THIS LINE---------------------
function maxAnswer(a,b,c,d,e){
  var max = 0;
  var arr = [a, b, c, d, e];

  for (i=0;i<arr.length;i++){
    var curr = arr[i];
    if (max <= curr){
      max = curr;
    }

    return curr;
  }
}
