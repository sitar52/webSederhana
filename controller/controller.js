const modelIndex = require('../models/index.js')

class Controller{

    static rootHandler(req,res){
        res.render('home')
    }

    static loginHandler(req,res){
        // res.render('login')
        modelIndex.Login.create({
            username: '_user',
            password: 'user'
        })
        
        .then(()=>{})
        .catch(err=>{
            res.send(err)
        })
    }

    static postLoginHandler(req,res){
       
        modelIndex.Login.findOne({
            where: {
                username: req.body.username,
                password: req.body.password

            },
            //include: modelIndex.Product
            
        })
        .then ((data)=>{
            console.log(JSON.stringify(data, null, 2))
            res.send(req.body)
        })

        .catch((err)=>{
            res.send(err)
        })

        // Post.findAll({
        //     where: {
        //       authorId: 12
        //       status: 'active'
        //     }
        //   });
        

    }

}
module.exports = Controller