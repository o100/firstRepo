function sendRequest(){
  console.log("sending")
  var data = document.getElementById('userInput').value;
  $.ajax({
            url: "http://challenge.transferwise.com/?teamname=<InnovateWise>data={"+data+"}",
            type: "GET",
            data: {sort: how},
            success: function(data){
                    console.log(data)
                    $("#res").html("")
            
                     for(var i=0;i<data.length; i++){
            
             
             
         }
                }
       });
}

$(document).ready(function() {
  $('.selectpicker').selectpicker({
    style: 'btn-info',
    size: 4
  });
});


