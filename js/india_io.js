var player;

jQuery(document).ready(function($) {

	player = new YT.Player('video', {
	    width: 560,
	    height: 350,
	    videoId: 'OT8wVt1Bt_Y',
	    playerVars: {
	        color: 'white'
	    }
	});


	$("#play").click(function(){
	  $("#video_link").fadeOut("fast", function(){
	    $("#video").fadeIn("fast");
	   
	   	player.playVideo();

	  });
	})	
});
