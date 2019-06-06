exports.seed = function(knex, Promise) {
  return knex('songs')
    .del()
    .then(function() {
      return knex('songs').insert([
        {
          id: 1,
          title: 'Kygo - Firestone ft. Conrad Sewell (Official Video)',
          duration: '3:43',
          path: '/music/1.mp3',
          artist_id: 1,
          album_id: 2,
          genre_id: 3,
          album_order: 1,
          plays: 10
        },
        {
          id: 2,
          title: 'Kygo - Happy Now ft. Sandro Cavazza',
          duration: '4:04',
          path: '/music/2.mp3',
          artist_id: 1,
          album_id: 2,
          genre_id: 5,
          album_order: 1,
          plays: 1
        },
        {
          id: 3,
          title: 'Martin Garrix - Live Tomorrowland 2018',
          duration: '56:41',
          path: '/music/3.mp3',
          artist_id: 2,
          album_id: 3,
          genre_id: 2,
          album_order: 1,
          plays: 0
        },
        {
          id: 4,
          title:
            'Martin Garrix & Dua Lipa - Scared To Be Lonely (Official Video)',
          duration: '3:50',
          path: '/music/4.mp3',
          artist_id: 2,
          album_id: 1,
          genre_id: 1,
          album_order: 0,
          plays: 23
        },
        {
          id: 5,
          title: 'Martin Garrix & Jay Hardway - Wizard (Original Mix)',
          duration: '4:41',
          path: '/music/5.mp3',
          artist_id: 2,
          album_id: 1,
          genre_id: 2,
          album_order: 121,
          plays: 12
        },
        {
          id: 6,
          title: 'Martin Garrix & Julian Jordan - Glitch (Official Video)',
          duration: '3:05',
          path: '/music/6.mp3',
          artist_id: 2,
          album_id: 1,
          genre_id: 3,
          album_order: 221,
          plays: 112
        },
        {
          id: 7,
          title: 'Martin Garrix Presents ANIMA (Live Amsterdam RAI 2018)',
          duration: '1:48:48',
          path: '/music/7.mp3',
          artist_id: 2,
          album_id: 3,
          genre_id: 4,
          album_order: 21,
          plays: 1122
        }
      ])
    })
}
