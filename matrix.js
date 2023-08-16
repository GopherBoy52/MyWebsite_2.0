var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var charsArray = characters.split(''); // This creates an array with each character as one element

const canvas = document.getElementById('c');
const context = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const font_size = 16;
const columns = canvas.width/font_size;

var drops = [];

//Setting up the drops
for(let x = 0; x < columns; x++)
  drops[x] = 1; 

function draw()
{
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);
  
  context.fillStyle = "#0F0";
  context.font = font_size + "px arial";

  for(let i = 0; i < drops.length; i++)
  {
    const text = charsArray[Math.floor(Math.random()*charsArray.length)];
    context.fillText(text, i*font_size, drops[i]*font_size);
    
    if(drops[i]*font_size > canvas.height && Math.random() > 0.975)
      drops[i] = 0;
    
    drops[i]++;
  }
}

setInterval(draw, 35);
