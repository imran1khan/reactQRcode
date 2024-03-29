import express from 'express';
import multer from 'multer';
import qr from 'qrcode';
import cors from 'cors'
const PORT = 3000;
const app = express();

app.use(cors());
const upload = multer({ dest: 'uploads/' })
app.get('/qr-code',(req,res)=>{
    const {url} = req.query as {url:string};
    qr.toDataURL(url, (err, url) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json({url});
    });
});
app.post('/uploadFolder',upload.single(),(req,res)=>{
    const {url} = req.query as {url:string};
    qr.toDataURL(url, (err, url) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json({url});
    });
});


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
});