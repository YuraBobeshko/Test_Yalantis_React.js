import axios from 'axios';

export default async function loadUser() {
  const users = await axios.get(`https://yalantis-react-school.herokuapp.com/api/task0/users`)
  return users;
}
