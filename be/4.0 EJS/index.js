import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const today = new Date();
    const day = today.getDay();
    let dayType = "a week day";
    let adv = "It's time to work hard";
    
    if(day === 0 || day ===6){
        dayType =  "the Weekend";
        adv = "It's time to have fun";
    }
    res.render("index.ejs",{
        dayType : dayType,
        advice : adv,
    });    
});

app.listen(port, () => {
    console.log(`Server runing on port ${port}.`);
});
