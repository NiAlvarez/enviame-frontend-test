// JSON
const values = {
  1: {
    carrier: "CCH",
    service: "DEX",
  },
  2: {
    carrier: "CCH",
    service: "express",
  },
  3: {
    carrier: "CCH",
    service: "priority",
  },
  15: {
    carrier: "CHP",
    service: "nextday",
  },
  16: {
    carrier: "CHP",
    service: "sameday",
  },
  17: {
    carrier: "CHP",
    service: "express",
  },
};

// JSON
const json = {
  data: {
    BUIN: [
      {
        limit: 1,
        over_carrier_service_id: 17,
        under_carrier_service_id: 17,
      },
      {
        limit: 2,
        over_carrier_service_id: 15,
        under_carrier_service_id: 15,
      },
    ],
    LAJA: [
      {
        limit: 2,
        over_carrier_service_id: 1,
        under_carrier_service_id: 1,
      },
      {
        limit: 5,
        over_carrier_service_id: 2,
        under_carrier_service_id: 2,
      },
      {
        limit: 1,
        over_carrier_service_id: 17,
        under_carrier_service_id: 17,
      },
    ],

    LEBU: [
      {
        limit: 2,
        over_carrier_service_id: 1,
        under_carrier_service_id: 1,
      },
      {
        limit: 6,
        over_carrier_service_id: 3,
        under_carrier_service_id: 3,
      },
      {
        limit: 5,
        over_carrier_service_id: 2,
        under_carrier_service_id: 2,
      },
      {
        limit: 4,
        over_carrier_service_id: 16,
        under_carrier_service_id: 16,
      },
    ],

    LOTA: [
      {
        limit: 2,
        over_carrier_service_id: 15,
        under_carrier_service_id: 15,
      },
      {
        limit: 4,
        over_carrier_service_id: 16,
        under_carrier_service_id: 16,
      },
      {
        limit: 1,
        over_carrier_service_id: 17,
        under_carrier_service_id: 17,
      },
    ],
  },
};

module.exports = {
    values,
    json
}


// let result = {
//     BUIN: {
//         limit: 2,
//         over: {
//             carrier: "CHP",
//             service: "nextday",
//         },
//         under: {
//             carrier: "CHP",
//             service: "nextday",
//         }
//     },
//     LAJA: {
//         limit: 5,
//         over: {
//             carrier: "CCH",
//             service: "express",
//         },
//         under: {
//              carrier: "CCH",
//             service: "express",
//         }
//     },
//     LEBU: {
//         limit: 6,
//         over: {
//             carrier: "CCH",
//             service: "priority",
//         },
//         under: {
//              carrier: "CCH",
//             service: "priority",
//         }
//     },
//     LOTA: {
//         limit: 4,
//         over: {
//             carrier: "CHP",
//             service: "sameday",
//         },
//         under: {
//             carrier: "CHP",
//             service: "sameday",
//         }
//     }
// } 