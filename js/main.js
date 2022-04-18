//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const lat = document.querySelector('#latInput').value
  const long = document.querySelector('#longInput').value
  
  console.log(lat,long)
  const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}date=today&formatted=0`


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log('sunrise:', data.results.sunrise)
        console.log('sunset:', data.results.sunset)
        
        // this should come up as a new Date but returns an empty object
        let sunrise = new Date(data.results.sunrise)
        // console.log(sunrise.toLocaleTimeString())
        console.log(sunrise)
        // can't do any methods on the date object

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

class Date {
  constructor(day, month, year) {

  }
}
