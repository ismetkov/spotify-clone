exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('artists')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('artists').insert([
        { id: 1, name: 'Kygo' },
        { id: 2, name: 'Martin Garrix' },
        { id: 3, name: 'Calvin Harris' },
        { id: 4, name: 'Robin Schulz' },
        { id: 5, name: 'Lost Frequencies' },
        { id: 6, name: 'Mr Probz' },
        { id: 7, name: 'Axwell' },
        { id: 8, name: 'Kshmr' },
        { id: 9, name: 'Afrojack' },
        { id: 10, name: 'Avicii' }
      ])
    })
}
