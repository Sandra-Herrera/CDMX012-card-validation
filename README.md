# Tarjeta de crédito válida

[Valida tu tarjeta de crédito](https://sandra-herrera.github.io/CDMX012-card-validation/src/index.html)

## Índice

* [1. Descripción del proyecto](#1-descripción-del-proyecto)
* [2. Usuario](#2-usuario)
* [3. Diseño de interfaz](#3-diseño-de-interfaz)
* [4. Historias de usuario](#4-historias-de-usuario)
* [5. Vista final](#5-vista-final)

***

## 1. Descripción del proyecto

En este proyecto elabore una página web con Javascript, HTML y CSS la cual permite a los usuarios validar el número de su tarjeta de crédito, para efectuar dicha validación utilice el algoritmo de Luhn que es un método de suma de verificación, es utilizado para validar números de identificación; tales como tarjetas de crédito.

En el formato de validación el usuario puede ingresar el número de tarjeta, fecha de expiración y el código de seguridad, en este mismo formato se encuentra simulada una tarjeta en la cual se puede visualizar los datos que están siendo ingresados. Cuenta con un botón que envía la información para proceder a la validación y para corroborar la validación se despliega un modal con el mensaje de "Tarjeta de crédito válida"  o en su defecto "Tarjeta de crédito inválida".



## 2. Usuario

Este proyecto fue pensado para personas que buscan validar su tarjeta de crédito de una manera rápida, eficaz y segura.

Me enfoque en elaborar un formato amigable para los usuarios el cual les permitiera capturar los datos necesarios para la validación de una manera sencilla, incluí también una tarjeta virtual en la cual el usuario puede visualizar en tiempo real los datos que ingresa en el formulario esto con la finalidad de hacer visiblemente más sencillo identificar los datos en la tarjeta física del mismo, se destinó un botón en la parte inferior del formulario en el cual al dar un clic envía la información para ser verificada y posteriormente se despliega un modal en el cual el usuario puede corroborar la validez o invalidez de su tarjeta de crédito.  


## 3. Diseño de interfaz

Se elaboró un prototipo de la interfaz web en Figma priorizando la experiencia de los usuarios.

### Prototipo de alta fidelidad

El diseño principal de la interfaz se encuentra a continuación, este diseño se mostró a una cantidad de usuarios y lo consideraron amigable ya que el formulario en el cual se ingresan los datos para realizar la validación se encuentra visible así como también el botón para enviar dicha información.

![img1-cardValidation](https://github.com/Sandra-Herrera/CDMX012-card-validation/blob/main/src/img/README/img1-cardValidation.JPG)

Los usuarios mencionaron que era necesario contar con mensajes claros y visibles para corroborar la validez de su tarjeta, por lo que se elaboró un modal en el cual se mostraran los siguientes mensajes "Tarjeta de crédito inválida" ó "Tarjeta de crédito válida" según sea el resultado y de esta manera es visiblemente más sencillo conocer el resultado de su validación.

![img2-cardValidation](https://github.com/Sandra-Herrera/CDMX012-card-validation/blob/main/src/img/README/img2-cardValidation.JPG)


![img3-cardValidation](https://github.com/Sandra-Herrera/CDMX012-card-validation/blob/main/src/img/README/img3-cardValidation.JPG)



## 4. Historias de usuario

### HU1: 
Como persona física y usuario de tarjetas de crédito me gustaría contar con un sitio web seguro y eficaz para efectuar la validación de mis tarjetas de crédito.
    
### HU2: 
Como usuario del sitio me gustaría acceder al sitio y visualizar de manera clara el formulario en el cual realizare mi validación. 

### HU3: 
El formulario debe contar con indicaciones adecuadas para que nosotros los usuarios podamos ingresar los datos requeridos para la validación de la tarjeta, deben ser campos de captura específicos para cada dato. 

### HU4:
Una vez capturada la información de mi tarjeta me gustaría contar con un botón de envió y que dicho botón se encuentre cercano y visible a mi formulario de datos. 

### HU5: 
Como usuario del sitio, deseo poder visualizar el resultado de mi validación de manera rápida, clara y visible en pantalla una vez presionado el botón de “validar”.

### HU6: 
Como usuario me será útil contar con un simulador visual de tarjeta en el cual sean visibles los datos que coloco en mi formulario en tiempo real, pues de esta manera corroboro que la información que extraigo de mi tarjeta física es la correcto con respecto a la colocada en el formulario para su posterior validación.

### HU7: 
Deseo poder quitar el mensaje que me aparecerá en pantalla con el resultado de mi validación para posteriormente realizar una validación nueva. 


## 5. Vista final

A continuación se presentan las vistas del sitio web "Ture Cards" terminado. 

### Vista inicial de la interfaz al ingresar al sitio:
![interfaz1-cardValidation](https://github.com/Sandra-Herrera/CDMX012-card-validation/blob/main/src/img/README/interfaz1-cardValidation.JPG)

### Vista con datos del usuario capturados:
![interfaz2-cardValidation](https://github.com/Sandra-Herrera/CDMX012-card-validation/blob/main/src/img/README/interfaz2-cardValidation.JPG)

### Vista de modal con mensaje de "Tarjeta de crédito válida":
![interfaz3-cardValidation](https://github.com/Sandra-Herrera/CDMX012-card-validation/blob/main/src/img/README/interfaz3-cardValidation.JPG)

### Vista de modal con mensaje de "Tarjeta de crédito inválida":
![interfaz4-cardValidation](https://github.com/Sandra-Herrera/CDMX012-card-validation/blob/main/src/img/README/interfaz4-cardValidation.JPG)



