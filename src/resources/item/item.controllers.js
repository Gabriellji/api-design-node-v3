//import { crudControllers } from '../../utils/crud'
import { Item } from './item.model'
import mongoose from 'mongoose';

import { connect } from '../../utils/db';

const run = async () => {
    await connect('mongodb://localhost:27017/api-test')

    const item = await Item.create({
        name: 'clean up',
        createdBy: mongoose.Types.ObjectId(),
        list: mongoose.Types.ObjectId()
    })

    console.log(await (await Item.find({})))


    const updated = await Item.findByIdAndUpdate(
        item._id, 
        { name: 'eat' }, 
        { new: true }
        )
    console.log(updated)


    const removed = await Item.findByIdAndRemove(item._id)
    console.log(removed)
}

run()

//export default crudControllers(Item)
