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
  module.exports={saludoControlGastos}