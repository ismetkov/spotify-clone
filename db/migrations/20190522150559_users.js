exports.up = function(knex, Promise) {
  return knex.raw(`
    CREATE TABLE users (
      id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
      username VARCHAR(100) UNIQUE NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      avatar VARCHAR(100),
      password VARCHAR(100),
      created_at TIMESTAMP DEFAULT NOW()
    );
  `)
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
}
