var cidade = document.getElementById("cidades");
cidade.addEventListener("change", () => {
    console.log(cidade.options[cidade.value].text);

    chamadaWheather(cidade.options[cidade.value].text);
});

function chamadaWheather(nome_cidade) {
    const nomeCidade = nome_cidade != null ? nome_cidade : "São Paulo";

    const url = "https://wttr.in/" + nomeCidade + "?format=j1";

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            document.querySelector("#cidade").innerHTML =
                data.nearest_area[0].areaName[0].value +
                " / " +
                data.current_condition[0].FeelsLikeC +
                "°C";

            text_custom =
                "Previsão para os próximos dias: " +
                data.weather[0].date.substring(5, data[-1]).replace("-", "/") +
                " - " +
                data.weather[0].avgtempC +
                "°C  <span><img src='../../assets/light.png' style='height:20px;margin:0 12px 4px' /></span> " +
                " | " +
                data.weather[1].date.substring(5, data[-1]).replace("-", "/") +
                " - " +
                data.weather[1].avgtempC +
                "°C  <span><img src='../../assets/cloud.png' style='height:20px;margin:0 12px 4px' /></span> " +
                " | " +
                data.weather[2].date.substring(5, data[-1]).replace("-", "/") +
                " - " +
                data.weather[2].avgtempC +
                "°C  <span><img src='../../assets/summer.png' style='height:20px;margin:0 12px 4px' /></span> ";

            document.querySelector("#texto-rotativo").innerHTML = text_custom;
            document.querySelector("#texto-rotativo-2").style.display = "none";
        })
        .catch((error) => {
            document.querySelector("#texto-rotativo").style.display = "none";
            document.querySelector("#texto-rotativo-2").style.display = "block";
            document.querySelector("#texto-rotativo-2").innerHTML =
                "ocorreu um erro ao realizar a chamada de api, por favor, tente novamente mais tarde";
        });
}

chamadaWheather(cidade.options[cidade.value].text);