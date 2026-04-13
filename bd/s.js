
const e =require("express")
const b =require("cors")
const my =require("mysql2")


const g =e();

g.use(b());
g.use(e.json())

const mysql = my.createConnection({
    host:'localhpost',
    user:'root',
    password:'@sys004',
    database:"Itemdata"
}
)
mysql.connect(()=>{

    console.log('database coonect succ')
})
g.post('/additems',(res,rep)=>{
    console.log(res.path)
  //mysql.query(` insert into dat(da) value(${res.path})`);
  console.log('the succesfully complete')
})
g.listen(3000, ()=>{console.log('succefulff com');
    console.log("this i sijsvnlkjk;lfdsskvl;")
})