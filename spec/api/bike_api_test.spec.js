var Bike = require('../../models/bike');
var request = require('request');
var server = require('../../bin/www');

describe('Bike API', () => {
    describe('GET BIKES /post', () => {
        it('Status 200', () => {
            expect(Bike.allBikes.length).toBe(0);

            var bike = new Bike(1,'Pink','Urban', [-34.437048, -58.788649]);
            Bike.add(bike);

            request.get('http://localhost:5000/api/bikes', function(error, response, body){
               expect(response.statusCode).toBe(200);
            });
        });
    });

    describe('POST BIKES /create', () => {
        it('STATUS 200', (done) => {
            var headers = {'content-type': 'application/json'};
            var bike = '{"id": 10, "color": "red", "model": "urban", "lat":-34, "lng":-54 }';
            request.post({
                headers: headers,
                url: 'http://localhost:5000/api/bikes/create',
                body: bike
            }, function(error, response, body){
                expect(response.statusCode).toBe(200);
                expect(Bike.findById(10).color).toBe("red");
                done();
            });
        });
    });


    describe('DELETE BIEKS /delete', () => {
        it('STATUS 204', (done) => {
            var headers = {'content-type' : 'application/json'};
            var id = '{"id": 1}';
            request.delete({
                headers: headers,
                url: 'http://localhost:5000/api/bikes/delete',
                body: id
            }, function (error, response, body){
                expect(response.statusCode).toBe(204);
                expect(Bike.allBikes.length).toBe(1);
                done();
            });
        });
    });

    describe('UPDAPTE BIKE /post', () => {
        it('STATUS 200', (done) => {
            var headers = {'content-type': 'application/json'};
            var bike = '{"id": 3, "color": "pink", "model": "mountain", "lat":-34, "lng":-54 }';
            request.post({
                headers: headers,
                url: `http://localhost:5000/api/bikes/update/${10}`,
                body: bike
        }, function(error, response,body){
                expect(response.statusCode).toBe(200);
                var targetBike = Bike.findById(3);
                expect(targetBike.color).toBe('pink');
                expect(targetBike.model).toBe('mountain');
                done();
            });
        });
    });
});