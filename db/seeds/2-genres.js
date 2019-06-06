exports.seed = function(knex, Promise) {
  return knex('genres')
    .del()
    .then(function() {
      return knex('genres').insert([
        { id: 1, name: 'Dance' },
        { id: 2, name: 'Deep house' },
        { id: 3, name: 'Electro house' },
        { id: 4, name: 'Future bass' },
        { id: 5, name: 'Tropical house' }
      ])
    })
}
