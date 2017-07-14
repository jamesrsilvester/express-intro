console.log("Sanity Check: JS is working!");


$(document).ready(function(){
  $.ajax({
     method: 'GET',
     url: 'http://localhost:3000/api/albums',
     success: handleSuccess,
     error: handleError
  });

  $.ajax({
     method: 'GET',
     url: 'http://localhost:3000/api/tacoshops',
     success: handleSuccess1,
     error: handleError
  });

   function handleError(xhr, status, errorThrown) {
     console.log('uh oh');
   }

   function handleSuccess(json) {
     json.forEach(function(album) {
       console.log(album.artist);
      $( ".stuff" ).append( "<p>" + (album.artist) + "</p><br>" )
     });
   }

   function handleSuccess1(json) {
     json.forEach(function(tacoshops) {
       console.log(tacoshops.name);
      $( ".stuff" ).append( "<p>" + (tacoshops.name) + "</p><br>" )
     });
   }
});
