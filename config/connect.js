//connect to database mongoose
const mongoose = require ('mongoose')


const connectdb =async () =>{
    try {
        await mongoose.connect("mongodb+srv://alaeddine_garbaa:*Garbaa8@cluster0.incfz3b.mongodb.net/?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to the DB')
    } catch (error) {
        console.log(err)
    }
};

module.exports = connectdb;