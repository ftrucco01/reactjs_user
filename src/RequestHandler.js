import axios from 'axios';
 
export async function save(name, age) 
{
  try{
    const response = await axios.post('/user', {name: name, age: age});
    return response.data;
  }catch(error){
    throw error;
  }
}

export async function update(name, age, id) 
{
  try{
    const response = await axios.put(`/user/${id}`, {name: name, age: age});
    return response.data;
  }catch(error){
    throw error;
  }
}

export async function get( id )
{
  try{
    const response = await axios.get(`/user/${id}`);
    return response;
  }catch(error){
    throw error;
  }
}