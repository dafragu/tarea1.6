var n1=document.getElementById("calculo").addEventListener("click", calcular);
var txt=document.getElementById("txt_num");
var lbl=document.getElementById("lbl_res");

	function calcular()
	{
		R=parseFloat(txt.value);
		var volumen;
		var pi = 3.14159;
		volumen = (4.0/3)* pi * Math.pow(R,3);
		lbl.textContent ="";
		lbl.textContent+=volumen.toFixed(4);
	}
