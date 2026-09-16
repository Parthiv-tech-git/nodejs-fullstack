
const e =require("express")
const b =require("cors")
const my =require("mysql2")


const g =e();

g.use(b());
g.use(e.json())

const mysql = my.createConnection({
    host:'localhost',
    user:'root',
    password:'Parthiv56',
    database:"authenti"
}
)
mysql.connect(()=>{

    console.log('database coonect succ')
})
g.post('/additems',(req,rep)=>{
    console.log(req.body)
    const sql = "INSERT INTO itemm (itemss)VALUES (?)";
    const values = [req.body.count];

    mysql.query(sql, values, (err, result) => {
        if (err) {
            console.error("Query Error:", err);
            return rep.status(500).send("Database Error");
        }
        console.log('Insert successful');
        rep.status(200).send("Data added successfully");
        
    });
 // mysql.query(` insert into daft(da) value(${req.body.count})`);




  
})

    g.get('/additems',(req,res )=>{
        const se ="select * from itemm";
        mysql.query(se,(err,resul)=>{
             if (err) {
            console.error("Query Error:", err);
            return rep.status(500).send("Database Error");
        }
    res.send(resul);
      console.log(resul)
        })
    })







g.listen(3000, ()=>{console.log('succefulff com');
    
})