================================================================================
GUÍA DE INICIO RÁPIDO - PROYECTO JWT (BACKEND + FRONTEND)
================================================================================

Este proyecto consta de dos partes principales: un servidor Node.js (Backend) 
y una aplicación React (Frontend).

--------------------------------------------------------------------------------
ESTRUCTURA DE CARPETAS:
- /JWT03: Servidor Node.js con Express, Sequelize y MySQL.
- /frontend: Aplicación React con AuthContext, React Router y Axios.
--------------------------------------------------------------------------------

PASO 1: CONFIGURAR Y ARRANCAR EL BACKEND (JWT03)
1. Abre una terminal en la carpeta 'JWT03'.
2. Instala las dependencias (si es la primera vez):
   > npm install
3. Asegúrate de que tu MySQL esté encendido y que exista la base de datos 'jwt_db'.
4. Arranca el servidor:
   > node server.js
   * El servidor correrá en: http://localhost:3000

PASO 2: CONFIGURAR Y ARRANCAR EL FRONTEND (frontend)
1. Abre otra terminal en la carpeta 'frontend'.
2. Instala las dependencias:
   > npm install
3. Arranca la aplicación:
   > npm start
   * La aplicación se abrirá en: http://localhost:3000 (o 3001 si el 3000 está ocupado)

--------------------------------------------------------------------------------
CÓMO PROBAR LA APLICACIÓN:
1. Una vez cargue el React, ve a la opción "Registro" en la barra de navegación.
2. Crea un usuario nuevo (ejemplo: usuario: admin, clave: admin123).
3. Serás redirigido al "Login". Ingresa con tus nuevas credenciales.
4. Al entrar, verás un mensaje de bienvenida con tu nombre y rol.
5. Haz clic en "Usuario" para ver el contenido protegido que viene del backend.
6. Pulsa "Cerrar sesión" para salir y borrar el token de seguridad.

--------------------------------------------------------------------------------
NOTAS IMPORTANTES:
- PUERTOS: El backend usa el puerto 3000. Si el frontend intenta usar el mismo, 
  te pedirá usar el 3001, lo cual está bien.
- CORS: El backend ya está configurado para permitir peticiones desde el frontend.
- TOKEN: El token se guarda en el 'localStorage' del navegador para que no se 
  cierre la sesión al refrescar la página.
================================================================================
