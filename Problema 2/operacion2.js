var calculo=document.getElementById("calculo").addEventListener("click", calcular);
var x=document.getElementById("txt_X");
var y=document.getElementById("txt_Y");
var lbl=document.getElementById("lbl_res");
	var X, Y;
	function calcular()
	{
		X=parseFloat(x.value);
		Y=parseFloat(y.value);

			      if(Y==0 && X==0)
			      {
			      	lbl.textContent ="";
					lbl.textContent+="Origen";
			      }
			      else if(Y==0 && X!=0)
			      {
			      	lbl.textContent ="";
					lbl.textContent+="Eje X";
			      }
			      else if(Y!=0 && X==0)
			      {
			      	lbl.textContent ="";
					lbl.textContent+="Eje Y"; 
			      }
			      else if(Y>0 && X>0)
			      {
			      	lbl.textContent ="";
					lbl.textContent+="Q1";
			      }
			      else if(Y<0 && X>0)
			      {
			      	lbl.textContent ="";
					lbl.textContent+="Q4";
			      }
			      else if( Y>0 && X<0)
			      {
			      	lbl.textContent ="";
					lbl.textContent+="Q2";
			      }
			      else if(Y<0 && X<0)
			      {
			      	lbl.textContent ="";
					lbl.textContent+="Q3";
			      }
	}