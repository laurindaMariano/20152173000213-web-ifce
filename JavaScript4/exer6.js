function exemplo(argument) {
		var txt;
		if(confirm("Clicou no idbusca1? se foi, click  no OK, se nao, click  em cancelar")){
			document.getElementById("idbusca1").style.color="blue"; 
			document.getElementById("idbusca1").style.backgroundColor="green";
			//txt="click no OK";
			txt="PRIMEIRA CAIXA ATIVADA "; 
		
		}else{
		 	(confirm("Clicou no idbusca2? se foi, click em OK"))
		 	document.getElementById("idbusca2").style.backgroundColor="red";
		 	//txt="click em Cancelar";
		 		txt="PERDEU O FOCO ";
		 	}
			document.getElementById("paragrafoParaLog").innerHTML=txt; 
}	