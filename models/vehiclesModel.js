import mongoose from "mongoose";

const Schema = mongoose.Schema;

const vehiclesSchema = new Schema ({
    fields : {
        vehicle_class: {type : String},
        pilot : {type: Array}
        
    },
    model : {type :String},
    pk : {type :Number}

  });

  vehiclesSchema.virtual("url").get(function () {
return `/vehicles/${this._id}`;
});

export default mongoose.model("Vehicles", vehiclesSchema);
