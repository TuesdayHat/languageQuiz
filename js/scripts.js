$(document).ready(function(){
  $(".lang").submit(function(event){
    event.preventDefault();
    //debugger;
    var q1 = parseInt($("#q1").val());
    var q2 = parseInt($("#q2").val());
    var q3 = parseInt($("#q3").val());
    var q4 = parseInt($("#q4").val());
    var q5 = parseInt($("#q5").val());

    var result = (q1 + q2 + q3 + q4 + q5);

    if (result === 5){
      $(".result").hide(); //I'm sure there's a better way to do this
      $("#php").show();
    } else if (result === 6) {
      $(".result").hide();
      $("#csharp").show();
    } else if (result === 7) {
      $(".result").hide();
      $("#java").show();
    } else if (result === 8) {
      $(".result").hide();
      $("#java").show();
    } else if (result === 9) {
      $(".result").hide();
      $("#ruby").show();
    } else if (result === 10) {
      $(".result").hide();
      $("#css").show();
    } else {
      console.log("Something Broke!");
    }

    console.log(result);
  });
});

//BACKEND BELOW THIS LINE---------------------
