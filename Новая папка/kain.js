 document.write("kjnghjksdkljgfhdfelkg,kmhfrehkmlnirgendfuoig?");
 //console.log("���� ��������� �����");
 // console.info("���� �������� ��� ������� ������");
  //console.error("���� ������ ������� ������");
   //console.warn("���� ������ ������� ������");
   var num;
   num = 5;
   num = 8;
   console.log("peremenay:" + num);
   var number;
   number = true;
   var num_1 = 5;
   var num_2 = "5";

   var num_3 = 5;
   var num_4 = 15;
   //var res = num_4 - num_3
   console.log("peremenay:" + (num_4 * num_3));
   var num_5 = 6 ;
   num_5 += 7;
   console.log("peremenay:" + num_5);
   var str_1= Number("13");
   
   var str_2= Number("8");
   console.log("peremenay:" + (str_1 + str_2));
   console.log("Math." + Math.PI);
   console.log("Math." + Math.min(4,4,4,5,871,1,6875,1,0,24,));
   
   var number = 15;
   var yry = true;

   if(number  + 5==21 ||   yry==true )
   
   {console .log("ok");
   
   }
   else if(number==15){console .log("kaka dela");}



   else{console .log("error");
    }
    var stroka= "word";
    switch(stroka){
        case "4":
        console .log("��������� �� ��������� 4");
        break;
        case "5":
        console .log("��������� �� ��������� 45");
        break;
        case "ord":
        console .log("��������� �� ��������� word");
        break;
        default:console .log("russia girl");   
    }
    //var arr = [5,6,6,71,98,true,674,252,84,25,4,7525,25,0];
    //console .log(arr);
    //var matrix = [ [1,0,7,5], [3,7,5,4], [1,0,2]];
    //matrix[1][0]= 55;
    // console .log(matrix);
    //for(var i = 100; i > 5; i/=2 ){  
     //   console. log(i)
    //}
    var j =0;
    
    while(j<=10){j++; console .log(j);}
    var x =100;
    do{
    console.log(x);
    } while(x < 50);
    //for(var i =10;i<=20;i+=2){console. log(i);
   // if(i %2) continue;
    //}
    //var arr = [5,6,6,71,98,true,674,252,84,25,4,7525,25,0];
    //for( var i =0;i<arr.length;i++){
//console.log("element " + (i+1) +":" +arr[i]);

    //}
    //alert("����������� ���������� ");
  // var data = confirm("home?");
   //if(data){alert("����������� ���������� ");}
    //var data = prompt("skoko let",20);
    //var person = null;
    //if(confirm("you know?")){
       // person = prompt("you name?");
        //alert("hello " + person);
   // }
    //else
    //{  alert("plak plak")}
    
    function info(word)  {
    console.log(word+"?");
    
    }
    info("Hello");
    function summa( a, b){
    var tii = a + b;
    info(tii);
    }
    summa(5 , 7)

    function summe(arr){
        var ipi = 0;

     for(var i =0;i < arr.length;i++)
     ipi +=arr[i];
     console.log(ipi);
    }
    var arre = [6,1,009];
    summe(arre);
    var cou = 0;
    function oclik(el){
        cou++;
        console.log(cou);
        el.innerHTML = "�� ������ �� ������-"+ cou;
        el.style.background =" red";
        el.style.color ="blue";
        el.style.cssText = "border- radius: 5px; border: 0;font-size: 20px"
    //alert("���  �� ���");
    }
    function mous(el){
        if(el.value =="hello")
        alert("Hello");
        


        console.log (el.value);}

        var text =document.getElementById('text');
        text.title = "New text";
        console.log (text.title);

        text.style.color = "red"
        text.style.backgroundColor = "blue"
       // document.getElementById('text').style.color = "white"
       //var  spans = document.getElementsByTagName('span');
       var tui = document.getElementsByClassName('simple-text');
       for(var i = 0;i<tui.length;i++){
        console.log(tui[i].innerHTML);}
function checkForm(el){
      
var name = el.name.value;
var pass = el.pass.value;var repass = el.repass.value;var state = el.state.value;
console.log(pass + "-" + repass + "-" + state);
if(state== "Мужской"){alert("ебать ты ПИДАРАС");
fail = "не правельный род";}

else if ( pass!=repass)
{alert("ебать ты ПИДАРАС введи пароль нормально!!!!!");
fail = "не правельный пароль";}
else if (name.length<=1|| name.length>50 ) {alert("ебать ты сука тупой введи ИМЯ НОРМАЛЬНО!!!!!");
fail = "не правельный имя";}
else if (pass.split("&").length>1)
{alert("не используй этот & символ еблан");
fail = "не правельный символ";}
if(fail !="")

{document.getElementById('error').innerHTML=fail;
window.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    return false;
}else {alert(" ладно молодец всё правильно");


return true;}
}
console.log("ygsuifshdgi");