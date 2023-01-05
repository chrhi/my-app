import mongoose, { Schema , models } from 'mongoose';

const schema = new Schema({
    title:{
        type: 'string',
        required: true
    },
    content:{
        type: 'string',
        required: true
    },
    image:{
        type: 'string',

    },
    timestamp:{
        type: 'string',
    }

})
export const ArticleSchema = models.Aticle || mongoose.model('Article', schema);