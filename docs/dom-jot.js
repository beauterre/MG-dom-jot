document.addEventListener("load",init);
function init()
{
 console.log("init called");
  document.body.addEventListener("resize",resize);
  resize();
}
function resize()
{
 console.log("resize called");
}
