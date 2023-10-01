const validation = (data) =>{
let errors ={};
if(!data.email.includes("@")){
    errors.e1 = 'Ingresa un email válido';
    
}
if(!data.email){
    errors.e2 = 'Este campo es obligatorio';
}
if(!data.email.lenght > 35){
     errors.e3= 'De ser menor a 35 caracteres';
}
if(!/\d/.test(data.password)){
errors.p1='Debe tener un numero';
}
if(data.password.lenght <6 || data.password.lenght > 10){
errors.p2='Debe tener mas de 6 y menos de 10 caracteres';
}
return errors;
} ;

export  default validation;