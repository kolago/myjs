
var xsImgTextheight = 30;

document.write("<div id=\"slidearea2\">")
if (xsImgs2.length != 0) {
	document.write("<a href=\""+ xsImgLinks2[0] +"\" target=\"_blank\"><img src=\"" + xsImgs2[0] + "\" onload=\"imgLoadNotify2();\" \/><\/a>")
}
document.write("</div>")
if (xsImgTextheight != 0) {
	document.write("<div id=\"slidefooter2\">")
	if (xsImgTexts2.length != 0) {
		document.write("<a id=\"slideprev\" title=\"上一个\" href=\"#\" onclick=\"rewind2();return false\" style=\"text-align: center; text-decoration: none;\">&laquo;<\/a><a id=\"slidenext\" title=\"下一个\" href=\"#\" onclick=\"forward2();return false\" style=\"text-align: center; text-decoration: none;\">&raquo;<\/a><span id=\"slidetext2\"><a href=\""+ xsImgLinks2[0] +"\" target=\"_blank\">"+ xsImgTexts2[0] +"<\/a></span>")
	}
	document.write("<\/div>")
}


var arrPreload2 = new Array();
var begImg2  = 0;
var arrPreload2 = new Array();
var spd2 = 2;

function init()
{
    preloadRange(0,_PRELOADRANGE-1);

    curImg2 = begImg2;
    if (curImg2 < 0 || curImg2 > xsImgs2.length - 1)
	curImg2 = xsImgs2.length - 1;
    changeSlide();
    setTimeout("play()", 3000)
}



var curImg2 = 0;
var timerId2 = -1;
var interval = 3500;
var imgIsLoaded2 = false;

var current_transition = 15;
var flag = true;
var bFirst = false;


var transitions = new Array;
transitions[0] = "progid:DXImageTransform.Microsoft.Fade(duration=1)";
transitions[1] = "progid:DXImageTransform.Microsoft.Blinds(Duration=1,bands=20)";
transitions[2] = "progid:DXImageTransform.Microsoft.Checkerboard(Duration=1,squaresX=20,squaresY=20)";
transitions[3] = "progid:DXImageTransform.Microsoft.Strips(Duration=1,motion=rightdown)";
transitions[4] = "progid:DXImageTransform.Microsoft.Barn(Duration=1,orientation=vertical)";
transitions[5] = "progid:DXImageTransform.Microsoft.GradientWipe(duration=1)";
transitions[6] = "progid:DXImageTransform.Microsoft.Iris(Duration=1,motion=out)";
transitions[7] = "progid:DXImageTransform.Microsoft.Wheel(Duration=1,spokes=12)";
transitions[8] = "progid:DXImageTransform.Microsoft.Pixelate(maxSquare=10,duration=1)";
transitions[9] = "progid:DXImageTransform.Microsoft.RadialWipe(Duration=1,wipeStyle=clock)";
transitions[10] = "progid:DXImageTransform.Microsoft.RandomBars(Duration=1,orientation=vertical)";
transitions[11] = "progid:DXImageTransform.Microsoft.Slide(Duration=1,slideStyle=push)";
transitions[12] = "progid:DXImageTransform.Microsoft.RandomDissolve(Duration=1,orientation=vertical)";
transitions[13] = "progid:DXImageTransform.Microsoft.Spiral(Duration=1,gridSizeX=40,gridSizeY=40)";
transitions[14] = "progid:DXImageTransform.Microsoft.Stretch(Duration=1,stretchStyle=push)";
transitions[15] = "special case";
var transition_count = 15;

var _PRELOADRANGE = 5;

function preloadRange(intPic,intRange) {
	var divStr = "";
	for (var i=intPic; i<(intPic+intRange); i++) {
		arrPreload2[i] = new Image();
		arrPreload2[i].src = xsImgs2[i];	
	} 
	return false;
}

function imgLoadNotify2()
{
    imgIsLoaded2 = true;
}

function changeSlide(n)
{	
    if (document.all)
	{    	
		var do_transition;
		if (current_transition == (transition_count)) 
		{
			do_transition = Math.floor(Math.random() * transition_count);
		} 
		else 
		{
			do_transition = current_transition;
		}
		document.all.slidearea.style.filter=transitions[do_transition];
		document.all.slidearea.filters[0].Apply();			
    }
    
    imgIsLoaded2 = false;
	
	if (xsImgs2.length !=0) {
		var slideImage = "<a href=\""+ xsImgLinks2[curImg2] +"\" target=\"_blank\"><img src=\"" + xsImgs2[curImg2] + "\" onload=\"imgLoadNotify2();\" /><\/a>";
		document.getElementById("slidearea").innerHTML = slideImage ;
		
		if (xsImgTextheight != 0) {
			var slideText2 = "<a href=\""+ xsImgLinks2[curImg2] +"\" target=\"_blank\">"+ xsImgTexts2[curImg2] +"<\/a>";
			document.getElementById("slidetext2").innerHTML = slideText2 ;
		}
	
		if (document.all) 
		{			
			document.all.slidearea.filters[0].Play();		
		}
	}
}

function forward2()
{
	imgIsLoaded2 = false;
	if (!arrPreload2[curImg2+1])
	{
		curImg2++;
		if (curImg2 >= xsImgs2.length) 
		{ 
			curImg2 = 0;
		} 
	} 
	else 
	{
		curImg2++;
		if (curImg2 >= xsImgs2.length) 
		{  
			curImg2 = 0;
		}
	}
	changeSlide();
}

function rewind2()
{
	curImg2--;
	if (curImg2 < 0)
	{
		curImg2 = xsImgs2.length-1;		
	}
	changeSlide();
}

function stop()
{
    window.clearInterval(timerId2);
    timerId2 = -1;
    imgIsLoaded2 = true;
}

function play()
{
    if (timerId2 == -1) 
		timerId2 = window.setInterval('forward2();', interval);
}


init();