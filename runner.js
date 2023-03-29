// const Orange = require('./orange');
// const OrangeTree = require('./orange-tree');

const orange = new Orange();
const tree = new OrangeTree();
const reportsBlock = document.getElementById('reports');

// Let seasons pass until the tree is ready to bear fruit.
while (!tree.isMature()) {
  tree.passGrowingSeason();
}

// Report yearly harvest information for the lifetime of the tree.
while (!tree.isDead()) {
  tree.passGrowingSeason();
  let harvestedOranges = [];

  while (tree.hasOranges()) {
    harvestedOranges.push(tree.pickAnOrange());
  }

  let sumOrangesDiameters = 0;
  for (let i = 0; i < harvestedOranges.length; i += 1) {
    sumOrangesDiameters += harvestedOranges[i].diameter;
  }

  const averageOrangeDiameter = (sumOrangesDiameters / harvestedOranges.length);

  // averageOrangeDiameter = Need to calculate the average diameter for the harvest.

  const report = document.createElement('div');
  report.innerHTML = `
      <b>HARVEST_REPORT</b>
      <br/>
      YEAR ${tree.age} REPORT
      <br/>
      Height: ${tree.height} feet.
      <br/>
      Harvest: ${harvestedOranges.length} oranges with an average
      <br/>
      diameter of ${Math.round(averageOrangeDiameter, -2)} inches.
      <br/>
      <br/>
      -----------------------
      <br/>
      <br/>
    `;
  reportsBlock.appendChild(report);
}

const lastReport = document.createElement('div');
lastReport.innerHTML = '<h2>Alas, the tree, she is dead!</h2>';
reportsBlock.appendChild(lastReport);
