import sqlite3

# Crear conexión a la base de datos
conn = sqlite3.connect('gastos.db')

# Crear tabla de usuarios
conn.execute('CREATE TABLE users (user_id INTEGER PRIMARY KEY, username TEXT NOT NULL, email TEXT NOT NULL, password TEXT NOT NULL)')

# Crear tabla de categorías
conn.execute('CREATE TABLE categories (category_id INTEGER PRIMARY KEY, name TEXT NOT NULL, user_id INTEGER NOT NULL, FOREIGN KEY (user_id) REFERENCES users (user_id))')

# Crear tabla de gastos
conn.execute('CREATE TABLE expenses (expense_id INTEGER PRIMARY KEY, description TEXT NOT NULL, amount DECIMAL(10, 2) NOT NULL, date DATE NOT NULL, category_id INTEGER NOT NULL, user_id INTEGER NOT NULL, FOREIGN KEY (category_id) REFERENCES categories (category_id), FOREIGN KEY (user_id) REFERENCES users (user_id))')

# Cerrar la conexión a la base de datos
conn.close()