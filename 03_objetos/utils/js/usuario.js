class usuario{
    nombre;
    apellido;
    edad;
    conocimientos;
    empresa;

    constructor(nombre,apellido,edad,empresa){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.empresa = empresa;
        this.conocimientos = [];
    
    }

    añadirConocimiento(conocimiento){
        this.conocimientos.push(conocimiento);
    }

    mostrarDatos(){
        console.log(this.nombre);
        console.log(this.apellido);
        console.log(this.edad);
    }

    get getNombre(){
        return this.nombre;
    }

    set setNombre(nombre) {
        this.nombre = nombre;
    }
}
/* 
let usuarioUno = new usuario ('andres','lopez',21);
usuarioUno.nombre = 'juan';

usuarioUno.mostrarDatos(); */