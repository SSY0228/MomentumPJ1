
  const API_KEY = "5d10d102358253edae7c427d62008e53";

  function netGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log('You live in ' + lat + ' ' + lon);
    const Api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(Api);
    fetch(Api)
      .then(response => response.json())
      .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
        city.innerText = data.name;
      });
  };

  function netGeoErr() {
    alert("Can't find you! No weather service for you.");
  }

  navigator.geolocation.getCurrentPosition(netGeoOk, netGeoErr);


