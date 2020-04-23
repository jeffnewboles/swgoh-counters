import axios from 'axios';

const getCounters = () => new Promise((resolve, reject) => {
  axios.get('https://v2-api.sheety.co/c8a84476c8b1ec101177cffd8bfc27df/swgohCounters/counters')
    .then((res) => {
      resolve(res.data.counters);
    })
    .catch(err => reject(err));
});

export default { getCounters };
