const express= require("express")

const router = express.Router()
const conn=require('../lib/database')

router.get('/',(req,res,)=>{
    res.render("projectfill")  
})
router.post('/create',(req,res)=>{
    const data={
        project_title:req.body.project_title,
        project_description: req.body.project_description,
        project_start_dt: req.body.start_date,
        project_due_dt: req.body.due_date

    }
    conn.query(`INSERT INTO projects SET ? ;`,data,(err,rows)=>{
            if(err) throw (err)
             if(!err) {
                 res.redirect('/projects')
             }
            
    })
})

router.get('/show',(req,res)=>{
    conn.query(`SELECT * FROM classwork.projects;`, (err,rows)=>{
        if (err) throw (err)
        if(!err){
            res.render('project_table',{projects:rows})
        }
    })
})


module.exports= router






