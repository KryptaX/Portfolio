function changeThePhoto()
{
	
}
	function clock()
	{
	var fulldate = new Date();
	
	var 	day = fulldate.getDate();
	if(day<10) day = "0" + day;
	
	var 	month = fulldate.getMonth();
	if(month<10) month = "0" + month;
	
	var 	year = fulldate.getFullYear();
	
	
	var  hour = fulldate.getHours()+1;
	if(hour<10) hour = "0" + hour;
	
	var 	 minutes = fulldate.getMinutes();
	if(minutes<10) minutes = "0" + minutes;
	
	var  seconds = fulldate.getSeconds();
	if(seconds<10) seconds = "0" + seconds;
	
	setTimeout("clock()",1000);
	
	document.getElementById("clock").innerHTML= day+"/"+month+"/"+year+" | "+hour+":"+minutes+":"+seconds;
	}