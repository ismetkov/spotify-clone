exports.up = function(knex, Promise) {
  return knex.raw(`
    CREATE TABLE albums (
      id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
      title VARCHAR(100),
      artist_id INT,
      genre_id INT,
      artwork_path VARCHAR(500),
      FOREIGN KEY(artist_id) REFERENCES artists(id),
      FOREIGN KEY(genre_id) REFERENCES genres(id)
    );
`)
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('albums')
}
