import { PORT } from 'babel-dotenv';
import app from './app';

app.set('port', PORT || 7777);

const server = app.listen(app.get('port'), () => {
  console.log(`Server running on: ${server.address().port}`);
});
