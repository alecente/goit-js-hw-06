/*Escriba un script para controlar el formulario de acceso.

    El procesamiento de form.login-form debe ser por el evento submit.
    La página no debe recargarse cuando se envía el formulario.
    Si hay espacios en blanco en el formulario, aparecerá alert con una advertencia
     diciendo que todos los espacios deben ser rellenados.
    Si el usuario ha rellenado todos los espacios y ha enviado el formulario, reúne
     los valores de los espacios en donde el nombre del espacio es el nombre de la 
     propiedad y el valor del espacio es la propiedad. Use la propiedad elements para
      acceder a los elementos del formulario.
    Muestre el objeto con los datos introducidos en la consola y borre los valores de
     los camposespacio del formulario usando el método reset.*/


     const refs = {
        form: document.querySelector(".login-form"),
        inputEmail: document.querySelector("[name=email]"),
        inputPassword: document.querySelector("[name=password]"),
        button: document.querySelector(".login-form > button"),
      };
      
      const onFormSubmitting = (event) => {
        event.preventDefault();
        const dataArray = {};
        const {
          elements: { email, password },
        } = event.currentTarget;
        if (email.value === "" || password.value === "") {
          return alert("Всі поля повинні бути заповнені!");
        }
      
        dataArray[email.getAttribute("name")] = email.value;
        dataArray[password.getAttribute("name")] = password.value;
      
        console.log(dataArray);
        event.currentTarget.reset();
      };
      
      refs.form.addEventListener("submit", onFormSubmitting);
      