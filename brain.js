var synaptic = require('synaptic');
var Neuron = synaptic.Neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;

var data=[
    { input: [ 0, 0, 0, 0 ], output: [ 0, 0 ] },
    { input: [ 0, 0, 0, 1 ], output: [ 0, 1 ] },
    { input: [ 0, 0, 1, 0 ], output: [ 0, 1 ] },
    { input: [ 0, 0, 1, 1 ], output: [ 0, 0 ] },
    { input: [ 0, 1, 0, 0 ], output: [ 1, 0 ] },
    { input: [ 0, 1, 0, 1 ], output: [ 1, 1 ] },
    { input: [ 0, 1, 1, 0 ], output: [ 1, 1 ] },
    { input: [ 0, 1, 1, 1 ], output: [ 1, 0 ] },
    { input: [ 1, 0, 0, 0 ], output: [ 1, 0 ] },
    { input: [ 1, 0, 0, 1 ], output: [ 1, 1 ] },
    { input: [ 1, 0, 1, 0 ], output: [ 1, 1 ] },
    { input: [ 1, 0, 1, 1 ], output: [ 1, 0 ] },
    { input: [ 1, 1, 0, 0 ], output: [ 0, 0 ] },
    { input: [ 1, 1, 0, 1 ], output: [ 0, 1 ] },
    { input: [ 1, 1, 1, 0 ], output: [ 0, 1 ] },
    { input: [ 1, 1, 1, 1 ], output: [ 0, 0 ] }
    ];

var defaults = {
        iterations: 100000,
        log: false,
        shuffle: true,
        cost: Trainer.cost.MSE
    };
var myPer = new Architect.Perceptron( 4, 5, 2 );
var myTrain = new Trainer( myPer );
myTrain.train( data, defaults );

console.log(myPer.activate([0,0,0,0]));
console.log(myPer.activate([1,0,1,0]));
console.log(myPer.activate([0,0,0,1]));
