exports.seed = function(knex, Promise) {
  return knex('albums')
    .del()
    .then(function() {
      return knex('albums').insert([
        {
          id: 1,
          title: "Dreamin' by Garrix",
          artist_id: 2,
          genre_id: 2,
          artwork_path: '/images/artwork/11.jpeg'
        },
        {
          id: 2,
          title: 'Kygo Live',
          artist_id: 1,
          genre_id: 1,
          artwork_path: '/images/artwork/5.jpeg'
        },
        {
          id: 3,
          title: 'Tomorrowland Martin Garrix',
          artist_id: 2,
          genre_id: 4,
          artwork_path: '/images/artwork/3.jpeg'
        },
        {
          id: 4,
          title: 'Carry on',
          artist_id: 3,
          genre_id: 3,
          artwork_path: '/images/artwork/4.jpeg'
        },
        {
          id: 5,
          title: 'Good Ones Go',
          artist_id: 5,
          genre_id: 5,
          artwork_path: '/images/artwork/2.jpeg'
        },
        {
          id: 6,
          title: 'rowValue1',
          artist_id: 10,
          genre_id: 2,
          artwork_path: '/images/artwork/6.jpeg'
        },
        {
          id: 7,
          title: 'I wanna run',
          artist_id: 4,
          genre_id: 1,
          artwork_path: '/images/artwork/7.jpeg'
        },
        {
          id: 8,
          title: 'Full circle',
          artist_id: 8,
          genre_id: 4,
          artwork_path: '/images/artwork/8.jpeg'
        },
        {
          id: 9,
          title: 'famous',
          artist_id: 9,
          genre_id: 1,
          artwork_path: '/images/artwork/9.jpeg'
        },
        {
          id: 10,
          title: 'Indie Radar',
          artist_id: 2,
          genre_id: 2,
          artwork_path: '/images/artwork/10.jpeg'
        }
      ])
    })
}
