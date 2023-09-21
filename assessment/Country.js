document.addEventListener("DOMContentLoaded", function () {
    const countryInput = document.getElementById("country-input");
    const searchButton = document.getElementById("search-button");

    searchButton.addEventListener("click", function () {
        const countryName = countryInput.value;

        if (countryName.trim() !== "") {
            fetchCountryInfo(countryName);
        }
    });
});

function fetchCountryInfo(countryName) {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.length > 0) {
                const country = data[0];

                const countryNameElement = document.getElementById("country-name");
                const countryCapitalElement = document.getElementById("country-capital");
                const countryPopulationElement = document.getElementById("country-population");
                const countryRegionElement = document.getElementById("country-region");
                const countryFlagElement = document.getElementById("country-flag");

                countryNameElement.textContent = country.name.common;
                countryCapitalElement.textContent = country.capital.join(", ");
                countryPopulationElement.textContent = country.population.toLocaleString();
                countryRegionElement.textContent = country.region;

                // Display the flag
                countryFlagElement.src = country.flags.png;
                countryFlagElement.style.display = "block";
            } else {
                alert("Country not found. Please enter a valid country name.");
            }
        })
        .catch((error) => console.error(error));
}
