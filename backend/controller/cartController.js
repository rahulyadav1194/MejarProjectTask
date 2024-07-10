let db = require("../databaseConfig.js");

exports.cartSave = (req, res) => {
  let Name = req.body.Name;
  let Father = req.body.Father;
  let Mother = req.body.Mother;
  let Age = req.body.Age;
  let Mobile = req.body.Mobile;
  let Address = req.body.Address;
  let Class = req.body.Class;

  let value = [[Name, Father, Mother, Age, Mobile, Address, Class]];
  let sql='insert into cart( Name,Father, Mother, Age, Mobile,Address, Class ) values ?'
  db.query(sql,
    [value],
    (err, result) => {
      if (err) throw err;
      else {
        res.send(true);
      }
    }
  );
};

exports.getCart=(req,res)=>{
    let sql = 'select * from cart'
    db.query(sql , (err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    } )
}

exports.deleteCart=(req , res)=>{
    let id = req.params.id
    let sql = 'delete from cart where id =?'
    db.query(sql, [id], (err , result)=>{
        if(err) throw err
        else{
            res.send('data deleted')
        }
    })
}