function mensagem() {
		var valor = document.getElementById("idCampo1").value; 

		if(valor>=0 && valor<10){
			alert ("Insulficiente")
		}else if (valor>= 10 && valor<14){
		 alert ("Bom")	
		}else if (valor>= 14){
		 alert ("Muito bom")	
		}
		
	}