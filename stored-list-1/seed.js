require('dotenv').config();
console.log(process.env.MONGODB_URI);

const mongoose = require('mongoose');
const Item = require('./models/Item');

mongoose.connect(process.env.MONGODB_URI, {
    dbName: 'storedList'
})

    .then(async function () {

        await Item.deleteMany({});

        await Item.insertMany([
            { text: 'Pizza' },
            { text: 'Ice Cream' },
            { text: 'Chips' },
            { text: 'Chocolate' },
            { text: 'Cookies' },
            { text: 'Candy' },
            { text: 'Soda' },
            { text: 'Popcorn' },
            { text: 'Pretzels' },
            { text: 'Nuts' },
            { text: 'Fruit Snacks' },
            { text: 'Granola Bars' },
            { text: 'Trail Mix' }
        ]);

        console.log('Snack data added!');

        mongoose.connection.close();
    })

    .catch(function (error) {
        console.log(error);
    });