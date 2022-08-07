const data = require('../data/index.js');

const getItemMaxLimit = (values) => {
  return values.reduce((max, item) => {
    if (max === undefined || max.limit < item.limit) {
      return item
    }
    return max
  })
}

const calulate = () => {
  const { json, values } = data;
  const regions = Object.keys(json.data)
  return regions.reduce((out, region) => {
    const itemMax = getItemMaxLimit(json.data[region])
    out[region] = {
      limit: itemMax.limit,
      over: values[itemMax.over_carrier_service_id],
      under: values[itemMax.under_carrier_service_id],
    }
    return out
  }, {})
}

const defineCommand = (program) => {
  program.command('calculate-json')
  .description('Get the resultan JSON from a mix of two previous ones')
  .action(() => {
    const out = calulate();
    console.log(out)
  });
}

module.exports = defineCommand