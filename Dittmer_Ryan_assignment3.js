/*Ryan Dittmer  
  01/19/2012    
  Deliverable 2 
  Playing a game  */
 
 
 var playerNames;
 var playerScores;
 var deathLimit;
 
 playerNames  = [" "," "," "];
 playerScores = [5,   10 , 110 ];
 deathLimit   = 5;
 
 
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
 	},
 	
 	getScores: function()
 	{
 		var scoreArray = [];
 		for ( var i = 0; i < this.player.length; ++i )
 		{
 			scoreArray[i] = this.player[i].score;
 		}
 		return scoreArray;
 	},
 	
 	setScores: function( scores )
 	{
		for ( var i = 0; i < scores.length; ++i )
 		{
 			this.player[i].score = scores[i];
 		}

 	},
 	
 	preGame: function()
 	{
 		 console.log( "I want to play a First Person Shooter game online. ")
 	     console.log( "The game will start and each player gets to play until they reach " + deathLimit + " deaths. \nThe score is then counted and whoever has the highest wins! \nThe players are entering the match:" );
 	}
 	
 }
 
 
 playerList.handleData(json);
 playerNames  = playerList.getNames();
 playerScores = playerList.getScores();
 playerList.preGame();
 
 
 function playGame( playerScores, playerNames, deathLimit )
 {
 	var numKills;
 	var totalScore;
 	var bestScore;
 	var hasBestScore;
 	var bestName;
 	
 	numKills      = 0;
 	totalScore    = 0;
 	bestScore     = 0;
 	hasBestScore  = false;
 	
 	for ( var i = 0; i < playerScores.length; ++i )
 	{
 		numKills = getKills( i, deathLimit );
 		totalScore   = ( numKills * 100 );
 		playerScores[ i ]  = totalScore;
 		
 		console.log( playerNames[ i ] + "'s total score is " + playerScores[ i ] );
 		
 		hasBestScore = getBestScore( playerScores[ i ], bestScore, i );
 		if ( hasBestScore == true )
 		{
 			bestScore = playerScores[ i ];
 			bestName  = getBestName( playerNames[ i ], winningMsg );
 		}
 	}	
 	console.log( bestName );
 }
 
 
 function getKills( playerNum, deathLimit )
 {
 	var randomNum;
 	var numDeaths;
 	var numKills;
 
 	randomNum  = 0;
 	numDeaths  = 0;
 	numKills   = 0;
 	
 	console.log( playerName[ playerNum ] + " has begun the match." );
 	while ( numDeaths < deathLimit )
 	{
 		randomNum = Math.random();
 		randomNum = Math.round( randomNum );
 		if ( randomNum == 0 )
 		{
 			console.log( playerNames[ playerNum ] + " has died. " );
 			numDeaths = numDeaths + 1;
 		}
 		else
 		{
 			console.log( playerNames[ playerNum ] + " has killed an enemy." );
 			numKills = numKills + 1;
 		}
 	}
 	return numKills;
 }

 