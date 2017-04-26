var isPlaying = false;
var tileX = 1;
var tileY = 1;
var mapx = 600/tileX;
var mapy = 600/tileY;
var fillWhite = "rgba("+255+","+255+","+255+","+(255/255)+")";
var fillBlack = "rgba("+0+","+0+","+0+","+(255/255)+")";



var firstArray = new Array(mapx);
for (var i = 0; i < mapx; i++) {
  firstArray[i] = new Array(mapy);
}

for(var i = 0; i < mapx; i++)
{
	for(var j = 0; j < mapy; j++)
	{
		firstArray[i][j] = 0;
	}
}

//Zmienne do obliczeń


function isInside(x, y)
{
	if(Math.pow((x - 300),2) + Math.pow((y - 300),2) < Math.pow(300,2))
	{
		return 1;
	} else {
		return 0;
	}

}





function isInt(n) {
   return n % 1 === 0;
}

function randomize()
{	

	for (var i = 0; i < mapx; i++) {
 	 firstArray[i] = new Array(mapy);
	}

	for(var i = 0; i < mapx; i++)
	{
		for(var j = 0; j < mapy; j++)
		{
			firstArray[i][j] = 0;
		}
	}



	var insideCircle = 0;
	var outsideCircle = 0;
	var total = 0;
	var howManyRandomize = document.getElementById("howMany").value;
	if(!isInt(howManyRandomize) ){
		alert("Podaj dodatnią liczbę całkowitą!");
	} else if(howManyRandomize > 0){
	var c = document.getElementById("mapa");
	var ctx = c.getContext("2d");
	ctx.fillStyle = "white";
	ctx.fillRect(0,0,600,600);
	ctx.fillStyle = "black";
	for(var i = 0; i < howManyRandomize; i++)
	{
			var randX = Math.abs(Math.floor((Math.random() * mapx - 1)));
			var randY = Math.abs(Math.floor((Math.random() * mapy - 1)));
			//var rand = Math.floor(Math.random() * 2);
			
			
			if(firstArray[randX][randY] == 0)
			{
				ctx.fillRect( randX * tileX, randY * tileY, tileX, tileY );
				if(isInside(randX, randY) == 1){
					insideCircle = insideCircle + 1;
				}else {
					outsideCircle = outsideCircle + 1;
				}
				firstArray[randX][randY] = 1;
				total = total + 1;
			} 
		
	}
	ctx.beginPath();
	ctx.arc(300,300,300,0,2*Math.PI);
	ctx.lineWidth=3;
	ctx.strokeStyle="blue";
	ctx.stroke();


	//Drawing text
	document.getElementById("pointsInside").innerHTML = "Points inside circle: " + insideCircle;
	document.getElementById("piValue").innerHTML = "PI value: " + insideCircle * 4.0 / total;
	} else {
		alert("Podaj dodatnią liczbę całkowitą!");
	}
	
}
