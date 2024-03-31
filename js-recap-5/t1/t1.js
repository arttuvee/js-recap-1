async function getData(url) {
  console.log('Fetching...');
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('Data:', data);
  } catch (e) {
    console.error('Error:', e);
  } finally {
    console.log('Ready!');
  }
}

getData('https://reqres.in/api/users/1');
