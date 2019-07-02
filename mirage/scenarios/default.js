export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);
  // server.db.loadData({
  //   movies: [
  //     { title: 'Interstellar' },
  //     { title: 'Inception' },
  //     { title: 'Dunkirk' },
  //   ]
  // })
  // server.create('movie', {
  //   title: 'Interstellar',
  // });
  server.create('movie', {
    actors: server.createList('actor', 5),
  });

  // server.create('movie');
  // server.createList('actor', 5);
}
