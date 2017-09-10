\c todos_db_dev;
DROP TABLE todos;

CREATE TABLE IF NOT EXISTS todos (
  id SERIAL PRIMARY KEY,
  title TEXT,
  status VARCHAR(255) DEFAULT 'TO DO',
  category VARCHAR(255),
  description VARCHAR(255)
);