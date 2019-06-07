require('dotenv').config()

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'a',
          email: 'a@a.com',
          password:
            '$2a$10$CjRQiy8rUxVvv6te3kKm4.WvwDu27pH.s00ZMxT4TMSiGP8b2ZtNq'
        },
        {
          id: 2,
          username: 'b',
          email: 'b@b.com',
          password:
            '$2a$10$1qsveIAxTqYJj4/JSJwrt.RyD43zdeWIUUiWwa9Gq.PlOjHcDLh3m'
        }
      ])
    })
}
