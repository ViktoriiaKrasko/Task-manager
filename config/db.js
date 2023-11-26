import mongoose from 'mongoose';

const URI =
    'mongodb+srv://vivary:v34e67ry35st96ro84ng@cluster0.zfuamt9.mongodb.net/?retryWrites=true&w=majority';

mongoose
    .connect(URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((e) => {
        console.error(e);
    });
