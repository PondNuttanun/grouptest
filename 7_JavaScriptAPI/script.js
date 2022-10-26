document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#er").onsubmit = function () {
        var myHeaders = new Headers();
        myHeaders.append("apikey", "m3K70PQtu3ZsqRKKw6B7kTXQccV9PzNf");

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };

        fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=thb&base=eur", requestOptions)
        .then(response => response.json())
        .then(result => {
            const rate = result.rates.THB
            document.querySelector("#exchange").innerHTML = `1 EUR = ${rate} baht`;
            let THB = document.querySelector("#THB").value;

            function convert () {
                return THB / rate;
            }
            document.querySelector("#EUR").innerHTML = `${convert().toFixed(2)}`;
        })
        .catch(error => console.log('error', error));
        return false;
    };
});