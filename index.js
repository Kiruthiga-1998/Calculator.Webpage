let os=document.getElementById('os')

function display (txt)
{
    os.value= os.value+txt;
}






function Clear()
{
    os.value= "";

}
function del()
{
    os.value= os.value.slice(0,-1);

}
function cube()
{
    os.value= os.value*os.value*os.value;

}

function calculate()
{
    os.value=eval(os.value);
}