//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const lat = document.querySelector('#latInput').value
  const long = document.querySelector('#longInput').value
  
  console.log(lat,long)
  const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}date=today`


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
