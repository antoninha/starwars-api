import mongoose from "mongoose";

const Schema = mongoose.Schema;

const peopleSchema = new Schema ({
    fields: {
        edited: {type : Date},
        name : {type : String},
        created : {type : Date},
        gender : {type : String},
        skin_color : {type : String},
        hair_color : {type : String},
        height : {type : String},
        eye_color : {type : String},
        mass : {type : String},
        Homeworld : {type : Number},
        birth_day : {type : String},
    },
    model : {type : String},
    pk : {type : Number}

  });

peopleSchema.virtual("url").get(function () {
return `/people/${this._id}`;
});

export default mongoose.model("People", peopleSchema);
