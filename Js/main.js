const searchButton = document.querySelector("#search-btn");
const countryInput = document.querySelector("#country-input");

searchButton.addEventListener("click", () => {
  let countryName = countryInput.value;
  let countryURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(countryURL);
  fetch(countryURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0]);
      console.log(data[0].capital[0]);
      console.log(data[0].flags.svg);
      console.log(data[0].continents[0]);
      console.log(Object.keys(data[0].currencies)[0]);
      console.log(data[0].name.common);
      console.log(data[0].borders);
      console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
      console.log(
        Object.values(data[0].languages).toString().split(",").join(", ")
      );
      result.innerHTML = `
       <img src="${data[0].flags.svg}" class="flags-container">  
       <h2>${data[0].name.common}</h2> 
       <div class="wrapper">
        <div class="data-wrapper-list">
         <h3>Capital : </h3>
         <h3>${data[0].capital[0]}</h3>
        </div>
        <div class="data-wrapper-list">
         <h3>Continents : </h3>
         <h3>${data[0].continents[0]}</h3>
        </div>
         <div class="data-wrapper-list">
         <h3>Population : </h3>
         <h3>${data[0].population.toLocaleString("tr-TR")}</h3>
        </div>
        <div class="data-wrapper-list">
         <h3>Currency : </h3>
         <h3>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${
        Object.keys(data[0].currencies)[0]
      }</h3>
        </div>
        <div class="data-wrapper-list">
         <h3>Common Lnaguages : </h3>
         <h3>${Object.values(data[0].languages)
           .toString()
           .split(",")
           .join(", ")}</h3>
        </div>
      </div>
`;
    })
    .catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `
            <h3 id="noContentArea">The input field cannot be empty !!</h3>
            `;
      } else {
        result.innerHTML = `
            <h3 id="noContentArea">Please enter a valid country name !!</h3>
            `;
      }
    });
});
