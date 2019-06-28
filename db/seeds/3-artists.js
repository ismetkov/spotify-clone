exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('artists')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('artists').insert([
        {
          id: 1,
          name: 'Kygo',
          artistCover:
            'https://www.billboard.com/files/styles/1296x857_gallery/public/media/Kygo-press-photo-03-by-Johannes-Lovund-2017-billboard-1548.jpg'
        },
        {
          id: 2,
          name: 'Martin Garrix',
          artistCover:
            'https://www.billboard.com/files/styles/article_main_image/public/media/martin-garrix-press-2018-cr-Louis-van-Baar-billboard-1548.jpg'
        },
        {
          id: 3,
          name: 'Calvin Harris',
          artistCover:
            'https://pmcvariety.files.wordpress.com/2018/06/calvin-harris-pr-20181.jpg?w=1000&h=563&crop=1'
        },
        {
          id: 4,
          name: 'Robin Schulz',
          artistCover:
            'https://www.billboard.com/files/styles/article_main_image/public/media/03-Robin-Schulz-press-photo-by-Robert-Wunsch-2017-billboard-1548.jpg'
        },
        {
          id: 5,
          name: 'Lost Frequencies',
          artistCover:
            'https://www.exitfest.org/wp-content/uploads/2019/01/klot_lost-frequencies-1000x560.jpg'
        },
        {
          id: 6,
          name: 'Mr Probz',
          artistCover:
            'http://img2-ak.lst.fm/i/u/arO/a5afa7e3a0344e8c92da67a8d9508560'
        },
        {
          id: 7,
          name: 'Axwell',
          artistCover:
            'https://dancingastronaut.com/wp-content/uploads/2018/11/artist-image-axwell2-1100x598.jpg'
        },
        {
          id: 8,
          name: 'Kshmr',
          artistCover:
            'https://www.waves.com/1lib/images/homepage/1280/kshmr-giving-dance-music-the-human-touch.jpg'
        },
        {
          id: 9,
          name: 'Afrojack',
          artistCover:
            'https://amp.businessinsider.com/images/5c094ea298a66e1ba5372913-750-563.jpg'
        },
        {
          id: 10,
          name: 'Avicii',
          artistCover:
            'https://mixmag.net/assets/uploads/images/_full/aviciiobit.jpg'
        }
      ]);
    });
};
