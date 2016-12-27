var synaptic = require('synaptic');
var Neuron = synaptic.Neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;
var quadzor = require('./quadzor');
var myPer = quadzor.makeQuad( );

console.log(myPer.activate([0,0,0,0]));
console.log(myPer.activate([1,0,1,0]));
console.log(myPer.activate([0,0,0,1]));
