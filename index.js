import server from './src/app.js'
import 'dotenv/config.js'

const PORT = process.env.PORT || 3001

// Start the server

server.listen(PORT, () => {
    console.log('listening at ', PORT);
  });
  