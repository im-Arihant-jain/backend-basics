const mockdata = require('./MOCK_DATA.json');
const instadata = require('./data.json');
const express = require("express");
const app = express();
const port = 8000;
const fs = require('fs')
    let arr = Math.floor(Math.random()*6  +1 ) 
    app.use(express.static("public"));
    app.set("view engine","ejs");
    app.get('/:username',(req,res)=>{
        let {username} = req.params;
        const data = instadata[username];       
         // instagrma ;
        res.render("home.ejs",{data});
    })      
    app.use(express.urlencoded({extended: false}));
    app.get('/',(req,res)=>{
        res.setHeader('X-Myheader',"heldlsjflkj");
        const html = `
        <ul>
            ${mockdata.map((data) => `<li>${data.first_name}</li>`).join('')}
        </ul>
    `;
    
        return res.send(html);
    })
    app.post("/about ",(req,res)=>{
     let body = req.body;
        body = {...body,id:mockdata.length+1};
        mockdata.push(body);
        fs.writeFile('./MOCK_DATA.json',JSON.stringify(mockdata),(err)=>{
            if(err){
                console.log("error occured ");   
            }
        }); 
        console.log(body);
        return res.send({status:"pending"});    
    })
    app.patch("/edit",(req,res)=>{
        let body = req.body;

        console.log(body);
        const modi = mockdata.filter((data)=>{
            return data.id!= body.id;       
        })
        fs.writeFile('./MOCK_DATA.json',JSON.stringify(modi),(err)=>{
            if(err){
                console.log("error occured");   
            }
        });
        return res.send({status:"pending"});  
    })
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });               