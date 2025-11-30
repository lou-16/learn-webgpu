const cmpat : HTMLElement = <HTMLElement> document.getElementById("compat");

if(navigator.gpu)
{
    cmpat.innerText = "true";
}
