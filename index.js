import express from 'express';
import cors from 'cors';
import UserRoute from './routers/UserRoute.js'; 
import LayananRoute from './routers/LayananRoute.js';
import InfoRoute from './routers/InfoRoute.js';
import BulanRoute from './routers/BulanRoute.js';
import PelangganRoute from './routers/PelangganRoute.js'; // tambah
import PakaiRoute from './routers/PakaiRoute.js';         // tambah
import TagihanRoute from './routers/TagihanRoute.js';     // tambah
import PembayaranRoute from './routers/PembayaranRoute.js';// tambah

import './models/relasi.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(LayananRoute);
app.use(InfoRoute);
app.use(BulanRoute);
app.use(PelangganRoute);   
app.use(PakaiRoute);       
app.use(TagihanRoute);     
app.use(PembayaranRoute);  
app.listen(5000, ()=> console.log('server up and running...'));