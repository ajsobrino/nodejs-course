import {Router,Request,Response} from 'express';
import MySQL from '../db/mysql';

const router = Router();

router.get('/heroes',(req:Request,resp:Response)=>{
    resp.json({
        ok:true,
        message:'Good idea'
    })
});

router.get('/heroes/:id',(req:Request,resp:Response)=>{
    const id = req.params.id;
    const scapeId = MySQL.instance.cnn.escape(id);
    const query = `Select * from heroe where id=${scapeId}`;
    MySQL.executeQuery(query,(err:any,heroes:Object[])=>{
        if(err) resp.status(500).json.({
            message:err
        });

        resp.json(heroes);
    })
    resp.json({
        ok:true,
        message:'Good idea, the id is '+id
    })
});

export default router;