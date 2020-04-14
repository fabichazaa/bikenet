var Bike = require("../../models/bike");

beforeEach(() => {Bike.allBikes = []; });

describe('Bike.allBikes', () => {
    it('starts void', () => {
        expect(Bike.allBikes.length).toBe(0);
    });
});

describe('Bike.add', () => {
    it('adds a bike', () => {
        var bike1 = new Bike(1,'Pink','Urban', [-34.437048, -58.788649]);
        Bike.add(bike1);

        expect(Bike.allBikes.length).toBe(1);
        expect(Bike.allBikes[0]).toBe(bike1);
    });
});

describe('Bike.findById', () => {
    it('finds a bike by id', () => {
        var bike1 = new Bike(1,'Pink','Urban', [-34.437048, -58.788649]);
        var bike2 = new Bike(2, 'Blue', 'Mountain',[-34.397443, -58.670814]);

        Bike.add(bike1);
        Bike.add(bike2);

        var targetBike = Bike.findById(2);
        expect(targetBike).toBe(bike2);
        expect(targetBike.color).toBe('Blue');
    });
});

describe('Bike.delete', () => {
    it('delete a bike by id', () => {
        var bike1 = new Bike(1,'Pink','Urban', [-34.437048, -58.788649]);
        var bike2 = new Bike(2, 'Blue','Mountain',[-34.397443, -58.670814]);

        Bike.add(bike1);
        Bike.add(bike2);
        expect(Bike.allBikes.length).toBe(2);


        Bike.removeById(2);
        expect(Bike.allBikes.length).toBe(1);
    })
})