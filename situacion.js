let país
let temperatura
let estatura
do{
    país =(prompt("Ingrese su país, Colombia o Estados Unidos"))
}while(país, "Colombia" && país, "Estados Unidos")
if (país == "Colombia") {
    do{
        estatura=Number(prompt("¿Cuánto mide? (m)"))
    }while (isNaN(estatura)&&estatura>3&& temperatura<=0);
    do{
        temperatura=Number(prompt("¿A que temperatura está? (C°) "))
    }while (isNaN(condition) && temperatura>38 && temperatura<=0);
}
if (pais=="Usa") {
    do {
        estatura=Number(prompt("How tall are you? (ft) "))
    } while (isNaN(estatura)&&estatura>4,6 && estatura<=0);
    do{
        temperatura=Number(prompt("What temperature is (F°)?"))
    } while (isNaN(temperatura)&&temperatura>100,4 && temperatura<=0);
    estatura=estatura/3,281
    temperatura=(temperatura=32)*5/9
    }
    do{
        acompañante=prompt("¿Tiene acompañante? (si/no)")
    } while (acompañamte!="si" && acompañante!="no");

    if (temperatura>38) {
        entrada="No puede entrar"
        if (estatura<1,4 && acompañante=="si") {
            entrada="No puede entrar"
        }else {
            entrada="Si puede entrar"
        }
    }
    document.getElementById ("Respuesta").innerHTML=entrada

