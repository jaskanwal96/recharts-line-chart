import { createPortal } from "react-dom";

function groupByKey(array, key) {
  return array.reduce((hash, obj) => {
    if (obj[key] === undefined) return hash;
    return Object.assign(hash, {
      [obj[key]]: (hash[obj[key]] || []).concat(obj)
    });
  }, {});
}

let testPolicies = [
  [
    {
      age: 22,
      level: 200,
      stepped: 190
    },
    {
      age: 23,
      level: 300,
      stepped: 810
    },
    {
      age: 24,
      level: 109,
      stepped: 1010
    },
    {
      age: 25,
      level: 120,
      stepped: 210
    },
    {
      age: 26,
      level: 170,
      stepped: 561
    }
  ],
  [
    {
      age: 22,
      level: 100,
      stepped: 180
    },
    {
      age: 23,
      level: 320,
      stepped: 710
    },
    {
      age: 24,
      level: 119,
      stepped: 60
    },
    {
      age: 25,
      level: 156,
      stepped: 917
    },
    {
      age: 26,
      level: 213,
      stepped: 656
    }
  ],
  [
    {
      age: 22,
      level: 456,
      stepped: 466
    },
    {
      age: 23,
      level: 320,
      stepped: 871
    },
    {
      age: 24,
      level: 210,
      stepped: 988
    },
    {
      age: 25,
      level: 120,
      stepped: 210
    },
    {
      age: 26,
      level: 170,
      stepped: 561
    }
  ]
];

// {
//   age: 26,
//   policy0Stepped: 561,
//   policy1Stepped: 561,
//   policy2Stepped: 561,

//   policy0Level: 561,
//   policy1Level: 561,
//   policy2Level: 561,

// }

const isStepped = true;
const isLevel = true;

let combinedPolicies = groupByKey(testPolicies.flat(1), "age");
console.log(combinedPolicies);
const myArray = [];

for (const age in combinedPolicies) {
  const agedPolcies = combinedPolicies[age];

  const accumulatedPolicy = {
    age: age
  };

  for (let i = 0; i < agedPolcies.length; i++) {
    if (isStepped) {
      accumulatedPolicy[`policy${i}Stepped`] = agedPolcies[i].stepped;
    }
    if (isLevel) {
      accumulatedPolicy[`policy${i}Level`] = agedPolcies[i].level;
    }
  }
  myArray.push(accumulatedPolicy);
}

export const policies = myArray;
// console.log(policies);
