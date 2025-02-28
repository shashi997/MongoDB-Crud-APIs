# MongoDB CRUD API"S 

## Dependencies :- dotenv, express, mongoose

1. Connect to the MongoDB Atlas Cluster in the cloud with the express Application and then run the server is a better choice. 

```
Setup dotenv - require('dotenv').config()
```

### Connect the Application with mongoose and then run the server

```
mongoose.connect(process.env.MongoDB_URI)
.then(() => {
    console.log("Connected to the database");
    app.listen(PORT, () => {
        console.log(`Server is running on port : ${PORT}.`);
    })
})
.catch((error) => {
    console.log(error.message);
})
```

2. Create models, schemas for storing the data in the database 
