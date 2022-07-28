import server from './src/app.js'

const PORT = 3001

// Start the server

server.listen(PORT, () => {
    console.log('listening at ', PORT);
  });
  