const express = require('express'),
session = require('express-session'),
MongoStore = require('connect-mongo')(session),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
passport = require('passport'),
passportConfig = require('./config/passport'),

MONGO_URL = 'mongodb://127.0.0.1:27017/auth',
app = express();

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error',(err)=>{
  throw err;
  process.exit(1);
});

app.use(session({
  secret: 'ESTO ES SECRETO',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({
    url: MONGO_URL,
    autoReconnect: true
  })
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req,res)=>{
  req.session.cuenta = req.session.cuenta ? req.session.cuenta +1 : 1;
  res.send(`Hola! Has visto esta página: ${req.session.cuenta}`);
});

const controladorUsuario = require('./controller/user');
app.post('/signup',controladorUsuario.postSignup);
app.post('/login',controladorUsuario.postLogin);
app.get('/logout',passportConfig.isAuth,controladorUsuario.logout);
app.get('/usuarioInfo',passportConfig.isAuth,(req,res)=>{
  res.json(req.user);
});

// Started Server
app.listen(3000,()=> console.log("Escuchando en el puerto 3000"));

/* 
const Usuario = require('./models/user'),
user = new Usuario({
  email: 'jose@gmail.com',
  nombre: 'José Hernández',
  password: '123456'
});

user.save().then(()=>console.log('Saved successfully')).catch((err)=>console.log(err));

*/