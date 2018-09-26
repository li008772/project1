var pointer = 0;
var i;
window.onload=function()
{
var taskState = document.getElementById("myTable");
for (var i=1;i < taskState.rows.length;i++)
{
	taskState.rows[i].onclick= function() 
	{
		if(this.style.textDecoration=="none")
		{
		this.style.background='#8c8c8c';
		this.style.textDecoration="line-through";
		}
		else
		{
			this.style.background="#f2f2f2";
	    	this.style.textDecoration="none";
		}
	}
}
}

function openSlide()
{
	document.getElementById('mygalary').style.display="block";
}

function closeSlide()
{
	document.getElementById('mygalary').style.display="none";
}

function slidePlus()
{
	var slide = document.getElementsByClassName('slide');
	pointer = pointer+1;
	if(pointer>=slide.length)
	{
		pointer = 0;
	}
	showSlide(pointer);
}

function slideMinus()
{
	var slide = document.getElementsByClassName('slide');
	pointer = pointer-1;
	if(pointer<0)
	{
		pointer = slide.length-1;
	}
	showSlide(pointer);
}

function showSlide(slideIndex)
{
	pointer = slideIndex;
	var i;
	var slide = document.getElementsByClassName('slide');
	for(i = 0; i < slide.length; i++)
	{
		slide[i].style.display="none";
	}
	if(slideIndex<0)
	{
		slideIndex = slide.length-1;
		pointer = slide.length-1;
	}
	else if(slideIndex>=slide.length)
	{
		slideIndex = 0;
		pointer = 0;
	}
	slide[slideIndex].style.display="block";
	document.addEventListener("keydown",function(event)
	{
		if(event.keyCode == 39)
		{
			showSlide(slideIndex+1);
		}
		else if(event.keyCode == 37)
		{
			showSlide(slideIndex-1);
		}
		else if(event.keyCode == 27)
		{
			closeSlide();
		}
	}
	)
}
var running = false;
var timer;
function playlist()
{
	var ele = document.getElementById("autoplay");
	if(running == false)
	{
	timer = setInterval(function()
	{
		slidePlus();
	},1000)
	running = true;
	}
	else if(running == true)
	{
		clearInterval(timer);
		running = false;
	}
	if(ele.style.color=="rgba(0,0,0)")
	{
		ele.style.color=="#ce0404";
	}
	else if(ele.style.color=="red")
	{
		ele.style.color=="black";
	}
	
}
function addJob()
{
	var table = document.getElementById("myTable").getElementsByTagName("tbody")[0];
	var jobInput = document.getElementById("myInput").value;
	var timeInput = document.getElementById("dateInput").value;
	var truetime = timeInput.split();
	var truetime = truetime.toString();
	var nowtime = new Date();
	var selectInput = document.getElementById("categoryInput").value;
	var newrow = table.insertRow(0);
	var newcell1 = newrow.insertCell(0);
	var newcell2 = newrow.insertCell(1);
	var newcell3 = newrow.insertCell(2);
	var newcell4 = newrow.insertCell(3);
	var newtext1 = document.createTextNode(jobInput);
	var newtext2 = document.createTextNode(truetime);
	var newtext3 = document.createTextNode(selectInput);
	var newtext4 = document.createTextNode(nowtime);
	newcell1.appendChild(newtext1);
	newcell2.appendChild(newtext2);
	newcell3.appendChild(newtext3);
	newcell4.appendChild(newtext4);
}
function sortTable()
{
  
  var rows;
  var switchPosition;
  var x;
  var y;
  var table = document.getElementById("myTable");
  var choice = document.getElementById("sortInput").value;
  var notSorted = true;
  while (notSorted == true)
 {
    notSorted = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) 
	{
      shouldSwitch = false;
	  if(choice == "recentSort")
	  {
        x = rows[i].getElementsByTagName("TD")[3];
        y = rows[i + 1].getElementsByTagName("TD")[3];
	  }
	  else if(choice === "completeSort")
	  {
		  if(rows[i].style.textDecoration=="lineThrough")
		  {
		    x=1;
		  }
		  else if(rows[i].style.textDecoration=="none")
		  {
		    x=0;
		  }
		  if(rows[i+1].style.textDecoration=="lineThrough")
		  {
		    y=1;
		  }
		  else if(rows[i+1].style.textDecoration=="none")
		  {
		    y=0;
		  }
	  }
	  else if(choice == "deadlineSort")
	  {
		  x = rows[i].getElementsByTagName("TD")[1];
          y = rows[i + 1].getElementsByTagName("TD")[1];
	  }
	  else if(choice == "categorySort")
	  {
		  x = rows[i].getElementsByTagName("TD")[2];
          y = rows[i + 1].getElementsByTagName("TD")[2];
	  }
	  alert(x.innerHTML.toLowerCase());
	  alert(y.innerHTML.toLowerCase());

      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase())
	  {
        switchPosition = true;
        break;
      }
    }
    if (switchPosition == true) 
	{
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      notSorted = true;
    }
	console.log(notSorted);
}
}








