exports.up = function(knex, Promise) {
  return knex.raw(`
    CREATE TABLE genres (
      id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
      name VARCHAR(50) UNIQUE NOT NULL
    );
`)
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('genres')
}
