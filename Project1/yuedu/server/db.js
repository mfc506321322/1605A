var mysql=require("mysql");

// console.log('process...', JSON.stringify(process.env.ENV));
let env = process.env.ENV;
// 创建连接池
var config = {};
if (env !== 'production'){
  config = {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: '1605a',
    port: 3306
  };
}else{
  config = {
    host: '123.206.55.50',
    user: 'root',
    password: '1601n',
    database: '1605a',
    port: 3306
  };
}
const pool = mysql.createPool(config);

// 连接公用方法
var query=function(sql,options,callback){
    pool.getConnection(function(err,conn){
        if(err){
            callback(err,null,null);
        }else{
            conn.query(sql,options,function(err,results,fields){
                //释放连接
                conn.release();
                //事件驱动回调
                callback(err,results,fields);
            });
        }
    });
};

module.exports=query;
