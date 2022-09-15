Happy Paws - Petshop de Funes.

Proyecto creado por Joana Marrón. Año 2022.

Este es un simulador para el negocio Happy Paws dedicado a la venta de productos para mascotas. 
En el mismo se pueden observar precios de productos, material con el que fue fabricado, beneficios de sus usos, compra de los mismos por medio de tarjeta de crédito, apartados para logearse y un sector exclusivo con imágenes de los clientes habituales.
También pueden visitar por medio de redes sociales las novedades del local, contactarse por whatsapp y/o llegarse hasta el local gracias a la información proporcionada.

Cada script lleva el nombre que se condice con su html.

----Explicación---

CSS: En este proyecto se encuentran dos archivos CSS. 
-En el archivo "generales.css" se crearon class cuyo objetivo es simplificar la creación de elementos. Se generaron class generalizadas.
A modo de ejemplo:

.right{
display: flex;
justify-content:flex-end;
}

<p class="right">Soy una frase a la izquierda</p> //        Soy una frase a la izquierda//

-En el archivo "styles.css" se encuentran las class pertinentes para dar estilo al proyecto.

*index.html* 
General: En esta page se puede visualizar los productos que están a la venta, materiales con los que fueron confeccionados y precios para su compra. También se ubicó un button que lleva a la page "salonDeLaFama".

Link: Dentro de esta page se encuentran linkeados los dos archivos CSS, el archivo js llamado "index.js" y los script de Bootstrap y Sweetalert.

js: index.js - Se trabajó con clase constructora, array y se le integró un sweetalert en el título para las personas más curiosas.

*login.html*
General: Dentro de esta page se simula el ingreso de datos para crear un usuario.

Link: Dentro de esta page se encuentran linkeados los dos archivos CSS, el archivo js llamado "login.js" y el script de Bootstrap.

js: login.js - Se trabajó con el almacenamiento de datos en el local localStorage/sessionStorage y la eliminación de los datos de cada apartado.

*compra.html*
General: Dentro de esta page se simula la compra de productos que ofrece el sitio web. Si realiza la compra, el button lo envía a la page "tarjeta.html". También puede vaciar el carrito de compra.

Link: Dentro de esta page se encuentran linkeados los dos archivos CSS, el archivo js llamado "compra.js" y los script de Bootstrap y Sweetalert.

js: compra.js - Se trabajó con Sweetalert para preguntar si quiere vaciar el carrito.

*tarjeta.html*
General: Dentro de esta page se simula la compra por medio de tarjeta de crédito. Se llenan los campos vacíos y se permiten guardar los datos ingresados.

Link: Dentro de esta page se encuentran linkeados los dos archivos CSS, el archivo js llamado "tarjeta.js" y los script de Bootstrap, Sweetalert y cleave.

js: tarjeta.js - Se crearon las variables necesarias (nombre,número,mes,año,vencimientos, entre otros). Con onInput se trabajó para que el usuario pueda visualizar en la tarjeta lo que está ingresando en el input.
Con onmouseenter se trabajó para que la tarjeta que está de muestra voltee para que se le ingresen los datos del código de seguridad.
Con la librería cleave se trabajó para armar los bloques de los números de la tarjeta dependiendo de la empresa y colocarle el logo correspondiente.
Finalmente, con Sweetalert se le pregunta al usuario si quiere guardar los datos de la tarjeta.

*contacto.html*
General: Dentro de esta page se simula un formulario para realizar consultas. Se ingresan datos, se envía la consulta y/o se recuerda.

Link: Dentro de esta page se encuentran linkeados los dos archivos CSS, el archivo js llamado "contacto.js" y los script de Bootstrap y Sweetalert.

js: contacto.js - Se trabajó con el almacenamiento de datos en el local localStorage/sessionStorage y la eliminación de los datos de cada apartado. Luego, con la Sweetalert se le consultó al usuario si quería guardar sus datos y si deseaba enviar el formulario.

*salonDeLaFama.html*
General: Dentro de esta page se muestra los animales que son recurrentes en el pet shop.

Link: Dentro de esta page se encuentran linkeados los dos archivos CSS, el archivo js llamado "salonDeLaFama.js" y el script de Bootstrap.

js: salonDeLaFama.js - Aquí se creó un fetch para llamar al archivo base.json en donde se almacena la base de datos de las mascotas recurrentes en el comercio.

*.gitignore*
Archivo creado para ignorar:
*.rar
desktop.ini



