import sqlite3

# Crear conexión a la base de datos
conn = sqlite3.connect('gastos.db')

# Obtener los datos del nuevo usuario
username = 'usuario1'
email = 'usuario1@example.com'
password = 'contraseña1'

# Ejecutar una sentencia SQL para insertar el nuevo usuario en la tabla 'users'
conn.execute('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', (username, email, password))

# Guardar los cambios en la base de datos
conn.commit()

# Cerrar la conexión a la base de datos
conn.close()