//your JS code here. If required.
var line = document.getElementById('line');

line.style.position='absolute';
line.style.top='50%';
line.style.left='50%';
line.style.width='200px';
line.style.height='2px';
line.style.backgroundColor ='black';

var angle=0;
function rotateLine(){
	angle+=2;
	line.style.transform = 'translate(-50%, -50%) rotate(' + angle + 'deg)';
	setTimeout(rotateLine, 20);
}
rotateLine();
