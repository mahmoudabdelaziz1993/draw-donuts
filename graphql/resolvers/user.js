const User = require('../../models/User')

module.exports ={
    
    createUser: async (args) => {
        try {
            console.log("object", { ...args.input })
            let user = new User({ ...args.input })
            if(!user) throw Error (' incorrect data ')
            await user.save()
            return user
        } catch (error) {
            throw error
        }
    },
    login : async({email,password})=>{
        try {
            if (!email.length||!password.length) throw Error ('missing parameter')
            let user = await User.isValidUser(email,password)
            return user
        } catch (error) {
            return error
            
        }
    },
    user : async(args,req)=>{

        try {
            if(!req.isAuth) throw Error('unauthorized')
            let user = await User.findById(req.user)
            if(!user) throw new Error("unauthorized")
            return user
        } catch (error) {
            throw error
        }       
    },createGraph:async (args ,req)=>{
        try {
            if(!req.isAuth) throw Error('unauthorized')
            let user = await User.findById(req.user)
            if(!user) throw new Error("unauthorized")
            user.createdGraphs.push({...args})
            await user.save();
            return user           
        } catch (error) {
            throw error
        }
    },deleteGraph : async ({id},req)=>{
        try {
            if(!req.isAuth) throw Error('unauthorized')
            let user = await User.findById(req.user)
            if(!user.createdGraphs.length) throw new Error(" No Donuts to delete ")
            user.createdGraphs = user.createdGraphs.filter((g)=>g.id!==id)
            await user.save();
            return user      
        } catch (error) {
            throw error
        }
    }
}