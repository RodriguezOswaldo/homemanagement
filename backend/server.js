const express = require('express');
const mongose = require('mongoose')
const cors = require('cors')


const app = express()
const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors())
app.use(express.json())

//Connect to MongoDB
mongose.connect('mongodb://localhost:27017/home_schedule', {
    useNewUrlParse: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected')
    .catch(err => console.log(err))
);

//Routes
app.use('/tasks', require('./routes/tasks'));
app.use('/projects', require('./routes/project'));
app.use('/questions', require('./routes/questions'));
app.use('/calendars', require('./routes/calendars'));

app.listen(PORT, () => {
    console.log(`Server is runnig on port: ${PORT}`)
})