export default class Alumno {
    constructor(username, dni, edad){
        this.username = username
        this.dni = dni
        this. edad = edad
    }
    toString() {
        return `Nombre: ${this.username}, DNI: ${this.dni}, Edad: ${this.edad}`
    }
}