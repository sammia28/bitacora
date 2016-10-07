var posts = [];
window.addEventListener("load", function(){
    var botonPostear = document.getElementById("js-btn-postear");
    var opcionTexto = document.getElementById("js-opcionTexto");
    var opcionCita = document.getElementById("js-opcionCita");
    var opcionMeme = document.getElementById("js-opcionMeme");
    var opcionFrase = document.getElementById("js-opcionFrase");
    var textArea = document.createElement("textarea");
    var btnPosts = document.createElement("button");
    var inputTitulo = document.createElement("input");
	var publicacion = document.createElement("div");
	/*var contenedorPost = document.createElement("div");*/
    var contenedorBtn = document.getElementById("contenedorBtn");
    var contenedor = document.createElement("div");
	var row= document.getElementsByClassName("row")[2];
    
    textArea.setAttribute("id","textareaPublicar");
    textArea.setAttribute("placeholder" , "Añadir contenido");
    contenedor.setAttribute("id" , "contenedorPost");
    btnPosts.setAttribute("id", "btnPublicar");
    btnPosts.innerHTML = "Publicar";
    inputTitulo.setAttribute("id", "inputTitulo");
	publicacion.setAttribute("id", "publicacion");
/*	contenedorPost.setAttribute("id", "js-publicado")*/
    botonPostear.addEventListener("click", function (e){
        e.preventDefault();
        var options = document.getElementById("js-opciones");
        options.style.display ="block";
        });
//	contenedor.appendChild(document.getElementsByTagName("section")[1]);
    
    function box (){
		var contenedorPost = document.createElement("div");
		contenedorPost.setAttribute("id", "js-publicado")
        contenedorBtn.appendChild(contenedor);
        var titulo = contenedor.appendChild(inputTitulo).value;
        var contenedorPublicado = contenedor. appendChild(textArea).value;
        var btnPublicado = contenedor.appendChild(btnPosts);
		btnPosts.addEventListener("click", function(e){
			e.preventDefault();
			row.appendChild(contenedorPost);
			var contenedorMensajes= document.createElement("div");
			contenedorMensajes.setAttribute("id", "mensaje");
			contenedorMensajes.innerHTML= inputTitulo.value + "<br>" +textArea.value + horaPublicacion(contenedorMensajes);
			contenedorPost.insertBefore(contenedorMensajes,contenedorPost.firstElementChild);
			contenedor.style.display = "none";
			/*var horaActual = horaPublicacion(contenedorMensajes);*/
			textArea.value = "";
			inputTitulo.value = ""; 
				
		});
    };

	    function horaPublicacion (content){
			var horaPosts = document.createElement ("div");
			var horaActual = new Date ();
			horaPosts.innerHTML = horaActual.getHours() + ":"+ horaActual.getMinutes();
			content.insertBefore(horaPosts, content.children[2]);
			return horaPosts;
			
    };
	
    opcionTexto.addEventListener("click", contenidoTexto);
    function contenidoTexto (){
		contenedor.style.display = "block";
        box();
	};    
    opcionCita.addEventListener("click",contenidoCita);
    function contenidoCita (){
		contenedor.style.display = "block";
        box();
    };
    
    opcionMeme.addEventListener("click", contenidoMeme);
    function contenidoMeme (){
		contenedor.style.display = "block";
        box();      
    };
    
    opcionFrase.addEventListener("click", contenidoFrase);
    function contenidoFrase (){
		contenedor.style.display = "block";
        box();
    }; 
});




    
    

