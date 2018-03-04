$(document).ready(function(){
  
  
  
  var defaultChannels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  var defaultChannelsData = [];
  
  
  
  for (var i=0; i<defaultChannels.length;i++)
  {
    ajaxGet(defaultChannels[i],defaultChannels[i]);
  }
  
  //processResult(defaultChannelsData);
  
  
  $("#inputField").keypress(function(e) {
    if(e.keyCode===13)
      {
        $('#output').html("");
        ajaxGet($("#inputField").val());
      }
          
        });
        $('#btn').on("click",function() { 
          
          $('#output').html("");
          ajaxGet($("#inputField").val());
          
         
        });
  
      $('#all').on("click",function() {
        
           $('#output').html("");
          for (var i =0; i< defaultChannelsData.length; i++)
          {
            
             if (defaultChannelsData[i].stream == null)
              {
         
                   showOffline(defaultChannelsData[i]);
              }
              else
             {
        
                  showOnline(defaultChannelsData[i]);
             }
        }
        
     });
  
  
       $('#online').on("click",function() {
         
         $('#output').html("");
         //$('#output').html(JSON.stringify(defaultChannelsData));
         for (var i =0; i< defaultChannelsData.length; i++)
          {
             if (defaultChannelsData[i].stream == null)
              {
         
                  
              }
             else
              {
                 showOnline(defaultChannelsData[i]);
              }
          }
       });
       $('#offline').on("click",function() {
         
         $('#output').html("");
         //$('#output').html(JSON.stringify(defaultChannelsData));
         for (var i =0; i< defaultChannelsData.length; i++)
          {
             if (defaultChannelsData[i].stream == null)
              {
         
                   showOffline(defaultChannelsData[i]);
              }
             else
              {
                 
              }
          }
       });
  
       
  
  function ajaxGet(inputVal)
  {
    var url = "https://api.twitch.tv/kraken/streams/"+ inputVal; 
            $.ajax({
                url: url,
                type: 'GET',
                headers: {'Client-ID': 'csslsji453pphks65m96gtso0fnzdm'},
                /*contentType: "application/json; charset=utf-8",
                async: false,
                dataType: "json",*/
                success: processResult
            });
  }
   
   function processResult(data){
     
     defaultChannelsData.push(data);
     /*for (var i = 0; i<data.length ;i++)
      {
        var cards =[];
        cards[i] = '<div id = "boundary" class = ""><div class ="text-light text-center row py-1 mx-1  text-dark"><div class = "col-md-2 card text-dark"><h3 class = "card-body" id = "channelName' + i.toString() +'">ccc</h3></div><div class = "col-md-6 card text-dark"><h3 class = "card-body" id = "steamInfo' + i.toString() + '">ccc</h3></div><div class = "col-md-4 card text-dark"><h3 class = "card-body" id = "preview' + i.toString() + '">ccc</h3></div></div></div>';
        $("#cards").append(cards[i]);
      }*/
     //console.log(data);
     //defaultChannelsData.push(data);
     //$("#output").empty();
     //$("#codeShow").html(JSON.stringify(defaultChannelsData), null, 4);
     //$("#codeShow").html(JSON.stringify(data), null, 4);
     
     
     
     if (data.stream == null)
       {
         /*$("#output").append('<div id = "boundary" class = "mx-2"><div class ="text-light text-center row py-1 mx-1  text-dark"><div class = "col-md-3 card text-secondary"><h3 class = "card-body" id = "channelName">'+getLastSegFromUrl(data._links.channel) +'</h3></div><div class = "col-md-6 card"><h3 class = "card-body"></h3></div><div class = "col-md-3 card"><h3 class = "card-body"></h3></div></div></div>');*/
         showOffline(data);
       }
     else
       {
         /*$("#output").prepend('<div class = "mx-2 bg-primary"><div class ="text-light text-center row py-1 mx-1 text-dark"><div class = "col-md-3 card"><a href = "'+data.stream.channel.url +'" target = "_blank"><h3 class = "card-body">'+ getLastSegFromUrl(data._links.channel) +'</h3></a></div><div class = "col-md-6 card"><h5 class = "card-body">'+ data.stream.channel.status +'</h5></div><div class = "col-md-3 card"><img src = "'+data.stream.preview.medium +'" class = "card-body" width= "100%" height = "150"></div></div></div>');*/
         showOnline(data);
       }
     
     
     /*for(var i= data[1].length -1;i>=0;i--){     
     $("#output").prepend('<div class="card my-2" style="width:100%;"><div class="card-body"><h5 class="card-title"><a target = "_blank" href=' + data[3][i]+ '>'+ data[1][i]+ '</a></h5><p class="card-text">' +data[2][i] +'</p></div></div>');}*/     
     
     }
  
  function getLastSegFromUrl(url)
  {
    var lastPart = url.substr(url.lastIndexOf('/') + 1);
    return lastPart;
  }
  
  
  function showOnline(data)
  {
    $("#output").prepend('<div class = "mx-2 bg-primary"><div class ="text-light text-center row py-1 mx-1 text-dark"><div class = "col-md-3 card"><a href = "'+data.stream.channel.url +'" target = "_blank"><h3 class = "card-body">'+ getLastSegFromUrl(data._links.channel) +'</h3></a></div><div class = "col-md-6 card"><h5 class = "card-body">'+ data.stream.channel.status +'</h5></div><div class = "col-md-3 card"><img src = "'+data.stream.preview.medium +'" class = "card-body" width= "100%" height = "150"></div></div></div>');
  }
  
  function showOffline(data)
  {
    $("#output").append('<div id = "boundary" class = "mx-2"><div class ="text-light text-center row py-1 mx-1  text-dark"><div class = "col-md-3 card text-secondary"><h3 class = "card-body" id = "channelName">'+getLastSegFromUrl(data._links.channel) +'</h3></div><div class = "col-md-6 card"><h3 class = "card-body"></h3></div><div class = "col-md-3 card"><h3 class = "card-body"></h3></div></div></div>');
  }
  
  
  
  /*function addCards(num)
  {
    for (var i = 0; i<num ;i++)
      {
        var cards =[num];
        cards[i] = '<div id = "boundary" class = "mx-2"><div class ="text-light text-center row py-1 mx-1  text-dark"><div class = "col-md-2 card text-dark"><h3 class = "card-body" id = "channelName' + i.toString() +'">ccc</h3></div><div class = "col-md-6 card text-dark"><h3 class = "card-body" id = "steamInfo' + i.toString() + '">ccc</h3></div><div class = "col-md-4 card text-dark"><h3 class = "card-body" id = "preview' + i.toString() + '">ccc</h3></div></div></div>';
        $("#cards").append(cards[i]);
      }
    
  }*/
  
  
  
}); 


/*'<div id = "boundary' + i.toString() + '" class = "mx-2">ccc<div class ="text-light text-center row py-1 mx-1  text-dark"><div class = "col-md-2 card text-dark"><h3 class = "card-body" id = "channelName' + i.toString() +'">ccc</h3></div><div class = "col-md-6 card text-dark"><h3 class = "card-body" id = "steamInfo' + i.toString() + '">ccc</h3></div><div class = "col-md-4 card text-dark"><h3 class = "card-body" id = "preview' + i.toString() + '">ccc</h3></div></div></div>';*/