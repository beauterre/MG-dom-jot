console.log("dom-jot script loaded..");
const game={};
init();
function init()
{
	game.back=document.getElementById("table");
  console.log("init called");
  var ro = new ResizeObserver( entries => 
  {
     for (let entry of entries) 
     {
        const cr = entry.contentRect;
		var w=cr.width;
		var h=cr.height;
		if((w/h)<(1280/1090)) h=w*1090/1280;
		else w=h*1280/1090;
		game.back.width=w;
		game.back.height=h;
		game.back.style.position="fixed";
		game.back.style.top=((cr.height-h)/2)+"px";
		game.back.style.left=((cr.width-w)/2)+"px";
     }
  });
  // Observe one or multiple elements
  ro.observe(document.body);
}
