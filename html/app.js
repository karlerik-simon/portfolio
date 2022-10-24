const express = require('express');
const mustache = require('mustache-express');

const app = express();

app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/projects', (req, res) => {
    res.render('projects/index');
});

app.get('/projects/:id', (req, res) => {
    const id = req.params.id

    // make api request in order to retrieve data about project
    const data = {
        id: id,
        name: "Calory Management App",
        description: "A web based app that let\'s the user create a montly food plan based on their daily calory intake. The user can then define certain parameters, such as price range, quality of food, nutrition, types of food and much more",
        cover: 'https://localhost/sfwoehsdajo234jasdhjo.png'
    };

    res.render('projects/single', data);
});

app.listen(8181, () => console.log("now running at port 8181"));