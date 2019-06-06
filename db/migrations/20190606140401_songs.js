exports.up = function(knex, Promise) {
  return knex.raw(`
    CREATE TABLE songs (
      id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
      title VARCHAR(250),
      duration CHAR(8),
      path VARCHAR(250),
      artist_id INT,
      album_id INT,
      genre_id INT,
      album_order INT,
      plays INT DEFAULT 0,
      FOREIGN KEY(artist_id) REFERENCES artists(id),
      FOREIGN KEY(album_id) REFERENCES albums(id),
      FOREIGN KEY(genre_id) REFERENCES genres(id)
    );
`)
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('songs')
}
