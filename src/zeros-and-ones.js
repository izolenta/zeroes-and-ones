import brain from "brain.js";

const config = {
  hiddenLayers: [5],
  activation: 'sigmoid',
};

const net = new brain.NeuralNetwork(config);

net.train([
  { input: [0, 0, 0, 0, 0], output: [0] },
  { input: [0, 0, 0, 0, 1], output: [0] },
  { input: [0, 0, 0, 1, 0], output: [0] },
  { input: [0, 0, 0, 1, 1], output: [0] },
  { input: [0, 0, 1, 0, 0], output: [0] },
  { input: [0, 0, 1, 0, 1], output: [0] },
  { input: [0, 0, 1, 1, 0], output: [0] },
  { input: [0, 0, 1, 1, 1], output: [1] },
  { input: [0, 1, 0, 0, 0], output: [0] },
  { input: [0, 1, 0, 0, 1], output: [0] },
  { input: [0, 1, 0, 1, 0], output: [0] },
  { input: [0, 1, 0, 1, 1], output: [1] },
  { input: [0, 1, 1, 0, 0], output: [0] },
  { input: [0, 1, 1, 0, 1], output: [1] },
  { input: [0, 1, 1, 1, 0], output: [1] },
  { input: [0, 1, 1, 1, 1], output: [1] },
  { input: [1, 0, 0, 0, 0], output: [0] },
  { input: [1, 0, 0, 0, 1], output: [0] },
  { input: [1, 0, 0, 1, 0], output: [0] },
  { input: [1, 0, 0, 1, 1], output: [1] },
  { input: [1, 0, 1, 0, 0], output: [0] },
  { input: [1, 0, 1, 0, 1], output: [1] },
  { input: [1, 0, 1, 1, 0], output: [1] },
  { input: [1, 0, 1, 1, 1], output: [1] },
  { input: [1, 1, 0, 0, 0], output: [0] },
  { input: [1, 1, 0, 0, 1], output: [1] },
  { input: [1, 1, 0, 1, 0], output: [1] },
  { input: [1, 1, 0, 1, 1], output: [1] },
  { input: [1, 1, 1, 0, 0], output: [1] },
  { input: [1, 1, 1, 0, 1], output: [1] },
  { input: [1, 1, 1, 1, 0], output: [1] },
  { input: [1, 1, 1, 1, 1], output: [1] },
]);

const output = net.run([0, 0, 1, 0, 1]);
console.log(output[0]);