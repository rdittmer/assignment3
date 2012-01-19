/*Ryan Dittmer  
  01/19/2012    
  Deliverable 2 
  Playing a game  */
 
 
 var playerNames;
 var playerList = 
 {
 	 player : [],
 
 	handleData : function( json ) 
 	{
 		for ( var i = 0; i < json.player.length; ++i )
 		{
 			this.player[i] = json.player[i];
 		}
 	},
 	
 	getNames: function()
 	{
 		var nameArray = [];
 		for ( var i = 0; i < this.player.length; ++i )
 		{
 			nameArray[i] = this.player[i].name;
 		}
 		return nameArray;
 	}
 	
 }
 
 playerList.handleData(json);
 playerNames = playerList.getNames();
 console.log(playerNames);
 