import React from 'react';
import Latest from '../components/Latest';
import Popular from '../components/Popular';

function Home() {
  return (
    <div>
        <h1>Hello, World</h1>
        <Popular />
        <Latest />
    </div>
  )
}

export default Home;