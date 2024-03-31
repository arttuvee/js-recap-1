const data = {
  name: 'Arttu',
  job: 'Student, Sales promoter',
};

// GET request
(async () => {
  try {
    const response = await fetch('https://reqres.in/api/unknown/23');
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }
    console.log('Data:', await response.json());
  } catch (e) {
    console.log('GET Error:', e);
  }
})();

// POST request
(async () => {
  try {
    const response = await fetch('https://reqres.in/api/unknown/23', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'},
    });
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }
    console.log('Data:', await response.json());
  } catch (e) {
    console.log('POST Error:', e);
  }
})();

// PUT request
(async () => {
  try {
    const response = await fetch('https://reqres.in/api/unknown/23', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    } else {
      console.log('Data:', await response.json());
    }
  } catch (e) {
    console.log('PUT error: ' + e);
  }
})();

// DELETE request
(async () => {
  try {
    const response = await fetch('https://reqres.in/api/unknown/23', {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    } else {
      console.log('Data:', await response.json());
    }
  } catch (e) {
    console.log('DELETE Error: ' + e);
  }
})();
