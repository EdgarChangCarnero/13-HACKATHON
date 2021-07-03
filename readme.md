¿Por qué evitar los callbacks en las llamadas asíncronas?

Por que las funciones que son asincrónicas y usan callbacks no devuelven nada de inmediato. Hay que recordar que un CallBack es una función llamada de otra función.

En lugar de devolver inmediatamente un resultado como la mayoría de las funciones, las funciones que utilizan callbacks toman un tiempo para producir un resultado. La palabra “asíncrono”, también conocido como “async” solo significa “requiere algo de tiempo” o “sucede en el futuro, no en este momento”. Por lo general, los callbacks solo se utilizan al hacer Input/Output, por ejemplo descargar cosas, leer archivos, hablar con bases de datos, etc.

¿Qué es una promesa?

Las promesas es algo que debería cumplirse y tienen 2 caminos: se Cumplen o no se cumplen.

¿Qué es el callback hell?

Callback hell es cuando las personas intentan escribir JavaScript de forma tal que la ejecución se realiza visualmente de arriba a abajo. Mucha programadores comete este error, en otros lenguajes como C, Java o Python, existe la expectativa de que todo lo que sucede en la línea 1 finalizará antes de que el código en la línea 2 comience a ejecutarse, así sucesivamente en el archivo y JavaScript es diferente.

Muchos programadores quedan atrapados en el callback hell debido a malas prácticas de programación, realmente no planean la estructura de su código y no se dan cuenta de lo mal que está estructurado hasta que es demasiado tarde. Al igual que con cualquier código que escribes, deberías detenerte y pensar que se puede hacer para que sea más simple y legible antes, durante y después de escribirlo. 
Para que sea más simple y legible antes, durante y después de escribirlo se tendría que utilizar un Diseño modular, nombrar tus funciones y declararlas al principio.
