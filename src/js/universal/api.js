import axios from "axios";

export const url = "https://test-nest-api-iqy9.onrender.com/api";

export async function registerUser(email, password, url) {
  try {
    const res = await axios.post(url, { email, password });
    const data = res.data;

    if (url !== 'https://test-nest-api-iqy9.onrender.com/api/users' && data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('isAuthenticated', 'true');
    } 

    return data; 
  } catch (err) {
    if (err.response) {
      throw new Error(err.response.data.message);
    } else {
      console.error( err.message);
      throw err;
    }
  }
}


export async function deleteQuantityOnServer(path, token) {
  console.log(token);
  try {
    const res = await axios.delete(url + path, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log('Response from server:', res.data);
    return res.data;
  } catch (err) {
    console.error( err.response?.data || err.message);
    return null;
  }
}

export async function loadCart(path, token ) {

  try {
    const res = await axios.get(url + path, {
    headers: {
    Authorization: `Bearer ${token}`
  }
  
})

    return res.data; 
    
  } catch (err) {
    console.error( err.response?.data || err.message);
    return null; 
  }
}

export async function loadCartDinamic(path, token ) {
  try {
    const res = await axios.get(url + path, {
    headers: {
    Authorization: `Bearer ${token}`
  }
})
  
    return res.data; 
  } catch (err) {
    console.error( err.response?.data || err.message);
    return null; 
  }
}

export async function updateQuantityOnServer(path, quantity, token, id) {
  try {
    const res = await axios.put(
      url + path,
      {
        id,         
        quantity   
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    console.log( res.data);
    return res.data;
  } catch (err) {
    console.error( err.response?.data || err.message);
    return null;
  }
}
