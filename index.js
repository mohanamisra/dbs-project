const express= require("express")
const mongoose= require("mongoose")
const cors= require("cors")

const userModel= require('./model/userSchema.js')
const app= express()
app.use(express.json())

app.use(cors())

mongoose.connect("mongodb+srv://harshitastanwar:U9mfKryZgIRVakTt@cluster0.8elwvlo.mongodb.net/user")

app.post('/register',(req, res)=>
{
    const{email}= req.body;
    userModel.findOne({email:email})
    .then(user=>
    
    {
        if(user)
        {
            res.json("User already exists")
        }

        else{
            
userModel.create(req.body)
.then(User=> res.json(User))
 .catch(err=> res.json(err))

        }
    })

})



app.post('/login', (req,res)=>
{
    const {email,password}= req.body;
    userModel.findOne({email:email})
    .then(user=>
    {
        if(user)
        {
            if(user.password=== password)
            {
                res.json("Successfully logged in");
            }
            else{
                res.json("Invalid password")
            }
        }

        else{
            res.json("Email not registered")
        }
    })
})



app.listen(3001,()=>
{
    console.log("Server is running")
})