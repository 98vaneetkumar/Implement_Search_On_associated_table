const Sequelize=require("sequelize")
const sequelize= new Sequelize(process.env.DATABASE_NAME,process.env.DATABASE_USER,process.env.DATABASE_PASSWORD,{
    host:process.env.DATABASE_HOST,
    dialect:process.env.DATABASE_DIALECT,
    port: process.env.DATABASE_PORT,
    logging: false,
    // define: {
	// 		freezeTableName: true,
    //         timestamps: false
	// 	}
})

const connect=()=>{
    sequelize.authenticate().then(() => {
        console.log("Connected with database")
    }).catch((err) => {
        console.log("Error",err)
    });
}
 
const syn=()=>{
    sequelize.sync({ alter:true}).then(()=>{
        console.log("Sync")
    }) 
} 
//connect and syn file is used in app.js file and sequelize is used to models tables
module.exports={sequelize:sequelize,connect:connect,syn:syn} 