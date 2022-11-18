const path=require("path");
const express=require("express");
const hbs=require("hbs");
const app=express();

const port=process.env.PORT || 3000;
const geocode=require('./utils/geocode');
const forecast=require('./utils/forecast');

//Define paths for express config
const publicDirectoryPath=path.join(__dirname,"../public");
const viewsPath=path.join(__dirname,'../templates/views')

const partialsPath=path.join(__dirname,'../templates/partials')
//setup handlebars and views location to serve
app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);
//setup static directory to serve
app.use(express.static(publicDirectoryPath));


//request,response
app.get('',(req,res)=>{
      res.render('index',{
         title:'Weather-app',
         name:"Harsh Kumar"
      })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:"About me",
        name:"Harsh Kumar"
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:"Feedback",
        name:"Harsh Kumar"
    })
})

app.get('/weather',(req,res)=>{
   
    res.send({
        forecast:'It is snowing',
        location: 'bathinda',
        address:req.query.address
    })

})



app.get('/products',(req,res)=>{
    if(!req.query.search){
             return res.send({
                 error:'You must provide a search term'
             })  
    }
 
    
})
app.get('/help/*',(req,res)=>{
   res.render('404',{
       title:'404',
       name:'Harsh Kumar',
       errorMsg:"Help article not found"
   })

})

app.get('*',(req,res)=>{
        res.render('404',{
            title:"404",
            name:"harsh",
            errorMsg:"Page not found"
        })
})




app.listen(port,()=>{
    console.log('server is up on port '+port+'.')
})