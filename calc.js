var num=document.getElementById('num');
 var buttons=document.querySelectorAll('button');
 var result=document.getElementById('result')
var data=num.value;


for(item of buttons)
{
item.addEventListener('click',(e)=>
{
    buttonText= e.target.innerText;
    result.style.height='45%';
        result.style.fontSize='26px';
        num.style.height='55%';
        num.style.fontSize='36px';
    console.log('button text',buttonText);
    if(buttonText=='x')
    {
        buttonText='*';
        data+=buttonText;
        num.value=data;
    }

    else if(buttonText=='RESET')
    {
        data='';
        num.value=data;
        result.value=data;
    }
    else if(buttonText=='=')
    {
        result.style.height='55%';
        result.style.fontSize='36px';
        num.style.height='45%';
        num.style.fontSize='26px';
   }
   
    else if(buttonText=='DEL')
    {
          num.value=data.substring(0,data.length -1);
          data=num.value;
    }
    else
    {
        data+=buttonText;
        num.value=data;
        

    }
    
    if(num.value!='')
    {
    result.value=eval(num.value);
    }
    else
    {
    result.value=num.value;
    }

    if(buttonText=='RESET')
    {
        data='';
        num.value=data;
        result.value=data;
    }
    
   
} )
}


var togglediv=document.getElementById('togglediv')
var switchs=document.getElementById('switch');
var calc=document.getElementById('calculator');
var buttonbg=document.getElementById('button');
var del=document.getElementById('del');
var reset=document.getElementById('reset');
var equal=document.getElementById('equal');
var head=document.getElementById('head');
switchs.style.position='absolute';
switchs.style.left='10%';

togglediv.addEventListener('click',(e)=>
{
    if(switchs.style.left=='10%')
    {
        console.log('one');

        switchs.style.left='40%';
        
        togglediv.style.boxShadow=' 0px 0px 5px 2px rgba(196, 195, 195, 0.233)';
      switchs.style.backgroundColor='hsl(52, 100%, 62%)';
      calc.style.backgroundColor = "hsl(222, 26%, 31%)";
      togglediv.style.backgroundColor='hsl(223, 31%, 20%)';
      buttonbg.style.backgroundColor='hsl(223, 31%, 20%)';
      del.style.backgroundColor='hsl(225, 21%, 49%)';
      del.style.boxShadow=' 2px 2px hsl(224, 28%, 35%)';
      reset.style.backgroundColor='hsl(225, 21%, 49%)';
      reset.style.boxShadow='2px 2px hsl(224, 28%, 35%)';
      equal.style.backgroundColor='hsl(6, 63%, 50%)';
      equal.style.boxShadow= '2px 2px hsl(6, 70%, 34%)';
      head.style.color='white';
      num.style.backgroundColor='hsl(224, 36%, 15%)';
      num.style.color='white';
      result.style.backgroundColor='hsl(224, 36%, 15%)';
      result.style.color='white';
    }

     else if(switchs.style.left=='40%')
    {
        console.log('two');
        switchs.style.left='70%';

        togglediv.style.boxShadow='0px 0px 5px 2px rgba(255, 0, 149, 0.233)';
        switchs.style.backgroundColor='hsl(176, 100%, 44%)';
        calc.style.backgroundColor = "hsl(268, 75%, 9%)";
        togglediv.style.backgroundColor='hsl(268, 71%, 12%)';
        buttonbg.style.backgroundColor='hsl(268, 71%, 12%)';
        del.style.backgroundColor='hsl(281, 89%, 26%)';
        del.style.boxShadow='2px 2px hsl(285, 91%, 52%)';
        reset.style.backgroundColor='hsl(281, 89%, 26%)';
        reset.style.boxShadow='2px 2px hsl(285, 91%, 52%)';
        equal.style.backgroundColor=' hsl(176, 100%, 44%)';
        equal.style.boxShadow=' 2px 2px hsl(177, 92%, 70%)';
        head.style.color='hsl(52, 100%, 62%)';
        num.style.backgroundColor='hsl(268, 71%, 12%)';
        num.style.color='hsl(52, 100%, 62%)';
        result.style.backgroundColor='hsl(268, 71%, 12%)';
        result.style.color='hsl(52, 100%, 62%)';

        document.getElementById('bttn1').style.backgroundColor='hsl(268, 47%, 21%)';
        document.getElementById('bttn2').style.backgroundColor='hsl(268, 47%, 21%)';
        document.getElementById('bttn3').style.backgroundColor='hsl(268, 47%, 21%)';
        document.getElementById('bttn4').style.backgroundColor='hsl(268, 47%, 21%)';
        document.getElementById('bttn5').style.backgroundColor='hsl(268, 47%, 21%)';
        document.getElementById('bttn6').style.backgroundColor='hsl(268, 47%, 21%)';
        document.getElementById('bttn7').style.backgroundColor='hsl(268, 47%, 21%)';
        document.getElementById('bttn8').style.backgroundColor='hsl(268, 47%, 21%)';
        document.getElementById('bttn9').style.backgroundColor='hsl(268, 47%, 21%)';
        document.getElementById('bttn10').style.backgroundColor='hsl(268, 47%, 21%)';
        document.getElementById('bttn11').style.backgroundColor='hsl(268, 47%, 21%)';
        document.getElementById('bttn12').style.backgroundColor='hsl(268, 47%, 21%)';
        document.getElementById('bttn13').style.backgroundColor='hsl(268, 47%, 21%)';
        document.getElementById('bttn14').style.backgroundColor='hsl(268, 47%, 21%)';
        document.getElementById('bttn15').style.backgroundColor='hsl(268, 47%, 21%)';
        
        document.getElementById('bttn1').style.boxShadow='2px 2px hsl(290, 70%, 36%)';
        document.getElementById('bttn2').style.boxShadow='2px 2px hsl(290, 70%, 36%)';
        document.getElementById('bttn3').style.boxShadow='2px 2px hsl(290, 70%, 36%)';
        document.getElementById('bttn4').style.boxShadow='2px 2px hsl(290, 70%, 36%)';
        document.getElementById('bttn5').style.boxShadow='2px 2px hsl(290, 70%, 36%)';
        document.getElementById('bttn6').style.boxShadow='2px 2px hsl(290, 70%, 36%)';
        document.getElementById('bttn7').style.boxShadow='2px 2px hsl(290, 70%, 36%)';
        document.getElementById('bttn8').style.boxShadow='2px 2px hsl(290, 70%, 36%)';
        document.getElementById('bttn9').style.boxShadow='2px 2px hsl(290, 70%, 36%)';
        document.getElementById('bttn10').style.boxShadow='2px 2px hsl(290, 70%, 36%)';
        document.getElementById('bttn11').style.boxShadow='2px 2px hsl(290, 70%, 36%)';
        document.getElementById('bttn12').style.boxShadow='2px 2px hsl(290, 70%, 36%)';
        document.getElementById('bttn13').style.boxShadow='2px 2px hsl(290, 70%, 36%)';
        document.getElementById('bttn14').style.boxShadow='2px 2px hsl(290, 70%, 36%)';
        document.getElementById('bttn15').style.boxShadow='2px 2px hsl(290, 70%, 36%)';
        
        document.getElementById('bttn1').style.color='hsl(52, 100%, 62%)';
        document.getElementById('bttn2').style.color='hsl(52, 100%, 62%)';
        document.getElementById('bttn3').style.color='hsl(52, 100%, 62%)';
        document.getElementById('bttn4').style.color='hsl(52, 100%, 62%)';
        document.getElementById('bttn5').style.color='hsl(52, 100%, 62%)';
        document.getElementById('bttn6').style.color='hsl(52, 100%, 62%)';
        document.getElementById('bttn7').style.color='hsl(52, 100%, 62%)';
        document.getElementById('bttn8').style.color='hsl(52, 100%, 62%)';
        document.getElementById('bttn9').style.color='hsl(52, 100%, 62%)';
        document.getElementById('bttn10').style.color='hsl(52, 100%, 62%)';
        document.getElementById('bttn11').style.color='hsl(52, 100%, 62%)';
        document.getElementById('bttn12').style.color='hsl(52, 100%, 62%)';
        document.getElementById('bttn13').style.color='hsl(52, 100%, 62%)';
        document.getElementById('bttn14').style.color='hsl(52, 100%, 62%)';
        document.getElementById('bttn15').style.color='hsl(52, 100%, 62%)';
    }
    else if(switchs.style.left=='70%')
    {
        switchs.style.left='10%';

        togglediv.style.boxShadow='0px 0px 5px 2px rgba(0, 0, 0, 0.308)';
        switchs.style.backgroundColor='hsl(25, 98%, 40%)';
        switchs.style.boxShadow='hsl(25, 99%, 27%)';
        calc.style.backgroundColor = "hsl(0, 0%, 90%)";
        togglediv.style.backgroundColor='hsl(0, 5%, 81%)';
        buttonbg.style.backgroundColor='hsl(0, 5%, 81%)';
        del.style.backgroundColor='hsl(185, 42%, 37%)';
        del.style.boxShadow='2px 2px hsl(185, 58%, 25%)';
        reset.style.backgroundColor='hsl(185, 42%, 37%)';
        reset.style.boxShadow='2px 2px hsl(185, 58%, 25%)';
        equal.style.backgroundColor=' hsl(25, 98%, 40%)';
        equal.style.boxShadow=' 2px 2px hsl(25, 99%, 27%)';
        head.style.color='black';
        num.style.backgroundColor='hsl(0, 0%, 100%)';
        num.style.color='black';
        result.style.backgroundColor='hsl(0, 0%, 100%)';
        result.style.color='black';

        document.getElementById('bttn1').style.backgroundColor='hsl(0, 0%, 100%)';
        document.getElementById('bttn2').style.backgroundColor='hsl(0, 0%, 100%)';
        document.getElementById('bttn3').style.backgroundColor='hsl(0, 0%, 100%)';
        document.getElementById('bttn4').style.backgroundColor='hsl(0, 0%, 100%)';
        document.getElementById('bttn5').style.backgroundColor='hsl(0, 0%, 100%)';
        document.getElementById('bttn6').style.backgroundColor='hsl(0, 0%, 100%)';
        document.getElementById('bttn7').style.backgroundColor='hsl(0, 0%, 100%)';
        document.getElementById('bttn8').style.backgroundColor='hsl(0, 0%, 100%)';
        document.getElementById('bttn9').style.backgroundColor='hsl(0, 0%, 100%)';
        document.getElementById('bttn10').style.backgroundColor='hsl(0, 0%, 100%)';
        document.getElementById('bttn11').style.backgroundColor='hsl(0, 0%, 100%)';
        document.getElementById('bttn12').style.backgroundColor='hsl(0, 0%, 100%)';
        document.getElementById('bttn13').style.backgroundColor='hsl(0, 0%, 100%)';
        document.getElementById('bttn14').style.backgroundColor='hsl(0, 0%, 100%)';
        document.getElementById('bttn15').style.backgroundColor='hsl(0, 0%, 100%)';
        
        document.getElementById('bttn1').style.boxShadow='2px 2px hsl(35, 11%, 61%)';
        document.getElementById('bttn2').style.boxShadow='2px 2px hsl(35, 11%, 61%)';
        document.getElementById('bttn3').style.boxShadow='2px 2px hsl(35, 11%, 61%)';
        document.getElementById('bttn4').style.boxShadow='2px 2px hsl(35, 11%, 61%)';
        document.getElementById('bttn5').style.boxShadow='2px 2px hsl(35, 11%, 61%)';
        document.getElementById('bttn6').style.boxShadow='2px 2px hsl(35, 11%, 61%)';
        document.getElementById('bttn7').style.boxShadow='2px 2px hsl(35, 11%, 61%)';
        document.getElementById('bttn8').style.boxShadow='2px 2px hsl(35, 11%, 61%)';
        document.getElementById('bttn9').style.boxShadow='2px 2px hsl(35, 11%, 61%)';
        document.getElementById('bttn10').style.boxShadow='2px 2px hsl(35, 11%, 61%)';
        document.getElementById('bttn11').style.boxShadow='2px 2px hsl(35, 11%, 61%)';
        document.getElementById('bttn12').style.boxShadow='2px 2px hsl(35, 11%, 61%)';
        document.getElementById('bttn13').style.boxShadow='2px 2px hsl(35, 11%, 61%)';
        document.getElementById('bttn14').style.boxShadow='2px 2px hsl(35, 11%, 61%)';
        document.getElementById('bttn15').style.boxShadow='2px 2px hsl(35, 11%, 61%)';
        
        document.getElementById('bttn1').style.color='hsl(198, 20%, 13%)';
        document.getElementById('bttn2').style.color='hsl(198, 20%, 13%)';
        document.getElementById('bttn3').style.color='hsl(198, 20%, 13%)';
        document.getElementById('bttn4').style.color='hsl(198, 20%, 13%)';
        document.getElementById('bttn5').style.color='hsl(198, 20%, 13%)';
        document.getElementById('bttn6').style.color='hsl(198, 20%, 13%)';
        document.getElementById('bttn7').style.color='hsl(198, 20%, 13%)';
        document.getElementById('bttn8').style.color='hsl(198, 20%, 13%)';
        document.getElementById('bttn9').style.color='hsl(198, 20%, 13%)';
        document.getElementById('bttn10').style.color='hsl(198, 20%, 13%)';
        document.getElementById('bttn11').style.color='hsl(198, 20%, 13%)';
        document.getElementById('bttn12').style.color='hsl(198, 20%, 13%)';
        document.getElementById('bttn13').style.color='hsl(198, 20%, 13%)';
        document.getElementById('bttn14').style.color='hsl(198, 20%, 13%)';
        document.getElementById('bttn15').style.color='hsl(198, 20%, 13%)';
    }

})

