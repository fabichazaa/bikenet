var Bike = function(id, color, model, location){
    this.id = id;
    this.color = color;
    this.model = model;
    this.location = location;
}

Bike.prototype.toString = function(){
    return 'id: ' + this.id + " | color: " + this.color;
}

Bike.allBikes =[];
Bike.add = function(aBike){
    Bike.allBikes.push(aBike);
}

Bike.removeById = function(bikeId){
    for(var i = 0; i < Bike.allBikes.length; i++){
        if (Bike.allBikes[i].id == bikeId){
            Bike.allBikes.splice(i,1);
            break;
        }
    }
}

Bike.findById = function(bikeId){
    var bike = Bike.allBikes.find(x => x.id == bikeId);
    if(bike)
        return bike;
    else
        throw new Error(`The bike with id=${bikeId} doesn't exist`);
}

/*
var a = new Bike(1,'Pink','Urban', [-34.437048, -58.788649]);
var b = new Bike(2, 'Blue', 'Urban',[-34.397443, -58.670814]);

Bike.add(a);
Bike.add(b);
 */

module.exports = Bike;