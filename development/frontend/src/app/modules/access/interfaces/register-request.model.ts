export interface RegisterRequestModel {
    nombre: string;
    apellido1: string;
    apellido2: string;
    tipoDocumento: 'dni' | 'pasaporte';
    identificacion: string;    
    prefijo: string;
    telefono: string;
    email: string;
    password: string;
    repeatPassword: string;
    ciudad?: string; // el # indica que el campo es opcional
    cp?: string;
    direccion?: string;
    fechaNacimiento?: string;
    genero?: string;
    sector?: string;
    terminos: boolean;
}
