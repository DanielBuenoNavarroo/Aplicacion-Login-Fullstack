import { connect } from 'mongoose';

export async function connectDB() {
    try{
        await connect('mongodb://localhost/merndb')
        console.log(">>> DB is conected")
    }catch(error){
        console.log(error)
    }
}