let db = require("../databaseConfig.js");

exports.studentSave = (req, res) => {
  let Name = req.body.Name;
  let Father = req.body.Father;
  let Mother = req.body.Mother;
  let Age = req.body.Age;
  let Mobile = req.body.Mobile;
  let Address = req.body.Address;
  let Class = req.body.Class;

  let value = [[Name, Father, Mother, Age, Mobile, Address, Class]];
  db.query(
    "insert into student( Name,Father, Mother, Age, Mobile,Address, Class ) values ?",
    [value],
    (err, result) => {
      if (err) throw err;
      else {
        res.send("data saved");
      }
    }
  );
};


exports.getStudent = (req, res) => {
  let sql = "select * from student";
  db.query(sql, (err, result) => {
    if (err) throw err;
    else {
      res.json(result);
    }
  });
};

exports.deleteStudent = (req, res) => {
  let id = req.params.id;
  let sql = "delete  from student where id =?";
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    else {
      res.send("data deleted");
    }
  });
};

exports.updateStudent = (req, res) => {
  let id = req.params.id;
  let newdata = req.body;
  let sql = "update student set ? where id = ?";
  db.query(sql, [newdata, id], (err, result) => {
    if (err) throw err;
    else {
      res.send("data updated");
    }
  });
};

exports.getStudentById=(req, res)=>{
  let id = req.params.id
  let sql = 'select * from student where id = ?'
  db.query(sql,[id] , (err, result)=>{
    if(err) throw err
    else{
      res.json(result)
    }

  })
}


exports.searchStudent=(req,res)=>{
  let inp = req.params.inp
  let sql = 'select * from student where  Name like ?'
  db.query(sql,['%'+ inp+ '%'], (err,result)=>{
    if(err) throw err 
    else{
      res.json(result)
    }
  } )

}