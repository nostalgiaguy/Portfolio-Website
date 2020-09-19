var count = 0;
function turnstile() {
	if (count == 0) {
		const audio = document.querySelector("audio");
		audio.loop = true;
		audio.play();
		document.querySelector('.turnstile').style.width = '100%'; 
		document.querySelector('.turnstile').style.height = '100%'; 
		document.querySelector('.turnstile').style.transform = 'rotate(180deg)';
		document.getElementById("myButton").style.backgroundColor = '#FF0000';		
		document.getElementById("myButton").innerHTML = 'Exit Turnstile';
		document.getElementById("myButton").style.fontSize = '20px';
        count = 1; 
    }else {
		const audio =document.querySelector("audio"); 		
		audio.pause();
		document.querySelector('.turnstile').style.width = '100%'; 
		document.querySelector('.turnstile').style.height = '100%'; 
		document.querySelector('.turnstile').style.transform = 'rotate(0deg)';
		document.getElementById("myButton").style.backgroundColor = '#FFFFFF';		
		document.getElementById("myButton").innerHTML = 'Enter Turnstile';
		document.getElementById("myButton").style.fontSize = '20px';
		count = 0; 

    
	}
};

