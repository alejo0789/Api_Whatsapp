function saludoControlGastos() {
    const saludos = [
      "¡Hola! Estoy aquí para ayudarte con el control de tus gastos.",
      "¡Bienvenido! Con mi ayuda, puedes establecer un presupuesto y llevar un control efectivo de tus gastos.",
      "¡Hola! Soy tu asistente de control de gastos. Estoy aquí para ayudarte a administrar tus finanzas.",
      "¡Buen día! Con mi ayuda, puedes tomar el control de tus gastos y establecer un presupuesto que funcione para ti.",
      "¡Hola y bienvenido! ¿Necesitas ayuda para controlar tus gastos y administrar tus finanzas de manera efectiva? ¡Estoy aquí para ayudarte!",
      "¡Hola! Si estás listo para tomar el control de tus finanzas, has venido al lugar correcto. ¡Estoy aquí para ayudarte!",
      "¡Bienvenido! Con mi asistencia, puedes tomar decisiones financieras informadas y controlar tus gastos de manera efectiva.",
      "¡Hola! Estoy aquí para ayudarte a establecer un presupuesto y llevar un control de gastos efectivo. ¿En qué puedo asistirte hoy?"
    ];
  
    // Obtener un mensaje de saludo aleatorio
    const saludo = saludos[Math.floor(Math.random() * saludos.length)];
  
    return saludo;
  }

  function generateGoodbyeMessage() {
    const goodbyeMessages = [
      "¡Gracias por utilizar nuestro servicio de control de gastos! ¡Nos vemos pronto!",
      "¡Espero que te haya sido útil nuestro servicio! ¡Hasta la próxima!",
      "¡No olvides seguir controlando tus gastos! ¡Hasta luego!",
      "¡Fue un placer ayudarte a mantener tus finanzas en orden! ¡Adiós!",
      "¡No dudes en contactarnos si necesitas ayuda adicional con tus gastos! ¡Hasta pronto!",
      "¡Recuerda que cada pequeño ahorro cuenta! ¡Vuelve pronto!",
      "¡Que tengas un buen día y no te olvides de ahorrar! ¡Hasta la próxima!",
      "¡Gracias por confiar en nosotros para ayudarte a controlar tus gastos! ¡Adiós!"
    ];
  
    // Genera un número aleatorio entre 0 y la longitud del array de mensajes de despedida
    const goodbyeMessage = goodbyeMessages[Math.floor(Math.random() * goodbyeMessages.length)];
  
    // Devuelve el mensaje de despedida aleatorio correspondiente al índice generado
    return goodbyeMessage;
  }
   function generatesaveinformation() {
    const messages_save = [
      "¡Guardado exitoso! ¡Sigue así y mantén el control de tus finanzas!",
      "¡Excelente! La información se ha guardado. Continúa haciendo un seguimiento de tus finanzas para lograr tus metas financieras.",
      "¡Muy bien! Los datos se han guardado. Recuerda continuar monitoreando tus finanzas para tomar decisiones financieras informadas.",
      "¡Hecho! Los datos se han almacenado correctamente. No te olvides de llevar un seguimiento de tus finanzas para mejorar tu situación financiera.",
      "¡Perfecto! La información se ha guardado satisfactoriamente. Sigue monitoreando y controlando tus finanzas para lograr la estabilidad financiera que deseas.",
      "¡Listo! Los datos han sido guardados. Mantén el control de tus finanzas y alcanza tus metas financieras.",
      "¡Genial! Seguimiento iniciado con éxito. Continúa controlando tus finanzas para lograr la libertad financiera que buscas.",
      "¡Guardado! ¡Sigue así y alcanza tus objetivos financieros!",
      "¡Listo! ¡Continúa monitoreando tus finanzas para tomar decisiones acertadas!",
      "¡Hecho! ¡Sigue controlando tus gastos para lograr la estabilidad financiera!",
      "¡Excelente! ¡Toma el control de tus finanzas y alcanza la libertad financiera!",
      "¡Genial! ¡La información se ha guardado! ¡Sigue el seguimiento y toma el control de tus finanzas!",
      "¡Listo! ¡Los datos se han guardado correctamente! ¡Continúa monitoreando tus finanzas para lograr tus metas!",
      "¡Perfecto! ¡La información ha sido almacenada! ¡No dejes de controlar tus finanzas para mejorar tu situación financiera!"
    ];
  
    // Genera un número aleatorio entre 0 y la longitud del array de mensajes de despedida
    const save_message = messages_save[Math.floor(Math.random() * messages_save.length)];
  
    // Devuelve el mensaje de despedida aleatorio correspondiente al índice generado
    return save_message ;
  }




  module.exports={saludoControlGastos, generateGoodbyeMessage, generatesaveinformation}
