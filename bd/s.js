
const e =require("express")
const b =require("cors")
const my =require("mysql2")


const g =e();

g.use(b());
g.use(e.json())

const mysql = my.createConnection({
    host:'localhost',
    user:'root',
    password:'@sys004',
    database:"parthi"
}
)
mysql.connect(()=>{

    console.log('database coonect succ')
})
g.post('/additems',(req,rep)=>{
    console.log(req.body)
    const sql = "INSERT INTO daft (da) VALUES (?)";
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
  console.log('the succesfully complete')
})
g.listen(3000, ()=>{console.log('succefulff com');
    console.log("this i sijsvnlkjk;lfdsskvl;")
})