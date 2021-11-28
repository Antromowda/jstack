import React from 'react';

import Header from './Header';
import Post from './Post';

function App() {
  return (
    <>
      <Header title="Bananinha Blog">
        <h2>Posts da Semana</h2>
      </Header>

      <hr />

      <Post
        post={{
          title: 'Título da Notícia 01',
          subtitle: 'Subtítulo da Notícia 01',
        }}
      />
      <Post
        post={{
          title: 'Título da Notícia 02',
          subtitle: 'Subtítulo da Notícia 02',
        }}
      />
      <Post
        post={{
          title: 'Título da Notícia 03',
          subtitle: 'Subtítulo da Notícia 03',
        }}
      />
    </>
  );
}

export default App;
