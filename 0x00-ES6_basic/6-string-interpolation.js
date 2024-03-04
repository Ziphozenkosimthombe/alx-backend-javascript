export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return `As of ${year}, it was the seventh-highest income country in the Unites States, with a per capital personal income of ${budget.income}. As of 2015, San Francisco had a GBD of ${budget.gbd}, and a GDP per capital of ${budget.capital}.`;
}
