/*var posts = [];*/
window.addEventListener("load", function(){
    var botonPostear = document.getElementById("js-btn-postear");
    var opcionTexto = document.getElementById("js-opcionTexto");
    var opcionCita = document.getElementById("js-opcionCita");
    var opcionMeme = document.getElementById("js-opcionMeme");
    var opcionFrase = document.getElementById("js-opcionFrase");
    var textArea = document.createElement("textarea");
    var btnPosts = document.createElement("button");
    var inputTitulo = document.createElement("input");
    var contenedorBtn = document.getElementById("contenedorBtn");
    var contenedor = document.createElement("div");
    var horaPosts = document.createElement ("div");
    textArea.setAttribute("id","textareaPublicar");
    textArea.setAttribute("placeholder" , "Añadir contenido");
    contenedor.setAttribute("id" , "contenedorPost");
    btnPosts.setAttribute("id", "btnPublicar");
    btnPosts.innerHTML = "Publicar";
    inputTitulo.setAttribute("id", "inputTitulo");
    botonPostear.addEventListener("click", function (e){
        e.preventDefault();
        var options = document.getElementById("js-opciones");
        options.style.display ="block";
        });
    
    function box (){
        contenedorBtn.appendChild(contenedor);
        var titulo = contenedor.appendChild(inputTitulo);
        var contenedorPublicado = contenedor. appendChild(textArea);
        var btnPublicado = contenedor.appendChild(btnPosts); 
        document.getElementById("textareaPublicar").value = "";
    };
    
    
/*    horaPosts.innerHTML  = texto.value;
    function horaPublicacion (horaPosts){
        var horaActual = new Date ();
        var hora = horaActual.getHours();
        var minuto = horaActual.getMinutes();
        var horaActual = hora + ":"+ minuto;
        var horaContenedor = document.createElement("div");
        horaContenedor.innerHTML = horaActual;
        horaPosts.insertBefore(horaContenedor, horaPosts.childNodes[0]);
    };*/
    
    
    opcionTexto.addEventListener("click", contenidoTexto);
    function contenidoTexto (){
        box();
    }
    
    opcionCita.addEventListener("click",contenidoCita);
    function contenidoCita (){
       box();
    }
    
    opcionMeme.addEventListener("click", contenidoMeme);
    function contenidoMeme (){
        box();      
    }
    
    opcionFrase.addEventListener("click", contenidoFrase);
    function contenidoFrase (){
        box();
    }; 
});




    
    

