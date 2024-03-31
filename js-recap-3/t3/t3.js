function displayInfo() {
  // Browser name and version
  const browserinfo = navigator.userAgent;

  // Screen dimensions
  const screenWidth = screen.width;
  const screenHeight = screen.height;
  const screenAvaibleWidth = screen.availWidth;
  const screenAvaibleHeight = screen.availHeight;

  // Windows dimensions
  const osName = navigator.platform;

  // Current time
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const date = new Date().toLocaleDateString('fi-FI', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Put the info in the div
  const target = document.querySelector('#target');
  target.innerHTML = `
        <p>Screen width: ${screenWidth}</p>
        <p>Screen height: ${screenHeight}</p>
        <p>Screen available width: ${screenAvaibleWidth}</p>
        <p>Screen available height: ${screenAvaibleHeight}</p>
        <p>Browser info: ${browserinfo}</p>
        <p>Operating System: ${osName}</p>
        <p>Current date: ${date}</p>
        <p>Current time: ${hours}:${minutes}:${seconds}</p>
    `;
  // Displayinfo calls itself again after 1 second
  setTimeout(displayInfo, 1000);
}

// Call the function displayInfo
displayInfo();
