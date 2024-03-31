async function postUserData(url, data) {
  console.log('Posting...');
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(url, options);
    const result = await response.json();
    console.log('Result:', result);
  } catch (e) {
    console.error('Error:', e);
  } finally {
    console.log('Ready!');
  }
}

const data = {
  name: 'Arttu',
  job: 'Student, Sales promoter',
};

const url = 'https://reqres.in/api/users';
postUserData(url, data);
