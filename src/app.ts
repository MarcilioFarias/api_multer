import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import router from './routes/routes';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.get('/', (req, res)=>{
    res.send('Server is running');
});

app.listen(3000, ()=>{
    console.log('Server is running on http://localhost:3000');
}); 