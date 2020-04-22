import axios from 'axios';

const getTeams = () => new Promise((resolve, reject) => {
  axios.get('https://v2-api.sheety.co/c8a84476c8b1ec101177cffd8bfc27df/swgohCounters/teams')
    .then((res) => {
      resolve(res.data);
    })
    .catch(err => reject(err));
});

export default { getTeams };
