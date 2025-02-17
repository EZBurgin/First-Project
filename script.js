const convertbutton = document.querySelector(".convertButton")
const currencySelect = document.querySelector("#toConverted")
const currencySelect1 = document.querySelector("#selectToConvert")



function convertValues() {

    const currencyValue = document.querySelector(".input").value
    const currencyValueToConnvert = document.querySelector(".valor-da-moeda") //Valor em real
    const currencyValueConverted = document.querySelector(".valor-da-moeda2") //Aparece o valor das outras moedas

    const dollarToday = 5.69
    const euroToday = 6.16
    const libraToday = 7.4
    const btcToday = 383225.30

    if (currencySelect1.value == "real"){
        
        currencyValueToConnvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(currencyValue)

        if (currencySelect.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(currencyValue / dollarToday)
        }
        if (currencySelect.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(currencyValue / euroToday)
        }
        if (currencySelect.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(currencyValue / libraToday)
        }
        if (currencySelect.value == "bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style:"currency",
                currency:"BTC"
            }).format(currencyValue / btcToday)
        }
        if (currencySelect.value == "real"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(currencyValue)
        }
    }


    if (currencySelect1.value == "dolar"){
        currencyValueToConnvert.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"USD"
        }).format(currencyValue)

        if (currencySelect.value == "real"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style:"currency",
                currency:"BRL"
            }).format(currencyValue * dollarToday)
        }
        if (currencySelect.value == "euro"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style:"currency",
                currency:"EUR"
            }).format(currencyValue * 0.92)
        }
        if (currencySelect.value == "libra"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style:"currency", 
                currency:"GBP"
            }).format(currencyValue * 0.77)
        }
        if (currencySelect.value == "bitcoin"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style:"currency",
                currency:"BTC"
            }).format(currencyValue / 67540.56)
        }
        if (currencySelect.value == "dolar"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style:"currency", 
                currency:"USD"
            }).format(currencyValue)
        }
    }

    if (currencySelect1.value =="euro"){
        currencyValueToConnvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"EUR"
        }).format(currencyValue)

        if (currencySelect.value == "real"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style:"currency",
                currency:"BRL"
            }).format(currencyValue * euroToday)
        }
        if (currencySelect.value == "dolar"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style:"currency", 
                currency:"USD"
            }).format(currencyValue * 1.08)
        }
        if (currencySelect.value == "libra"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style:"currency", 
                currency:"GBP"
            }).format(currencyValue * 0.83)
        }
        if (currencySelect.value == "bitcoin"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style:"currency",
                currency:"BTC"
            }).format(currencyValue / 62419.82)
        }
        if (currencySelect.value == "euro"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style:"currency", 
                currency:"EUR"
            }).format(currencyValue)
        }
    }

    if (currencySelect1.value == "libra"){
        currencyValueToConnvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style:"currency", 
            currency:"GBP"
        }).format(currencyValue)

        if (currencySelect.value == "real"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style:"currency", 
                currency:"BRL"
            }).format(currencyValue * 7.39)
        }
        if (currencySelect.value == "dolar"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style:"currency",
                currency:"USD"
            }).format(currencyValue * 1.3)
        }
        if (currencySelect.value == "euro"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style:"currency",
                currency:"EUR"
            }).format(currencyValue * 1.2)
        }
        if (currencySelect.value == "bitcoin"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style:"currency",
                currency:"BTC"
            }).format(currencyValue / 51969.74)
            
        }
        if (currencySelect.value == "libra"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style:"currency",
                currency:"GBP"
            }).format(currencyValue)
        }
    }

    if (currencySelect1.value == "bitcoin"){
        currencyValueToConnvert.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"BTC"
        }).format(currencyValue)

        if (currencySelect.value == "real"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style:"currency", 
                currency:"BRL"
            }).format(currencyValue * 383570.31)
        }
        if (currencySelect.value == "dolar"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style:"currency", 
                currency:"USD"
            }).format(currencyValue * 67364.43)
        }
        if (currencySelect.value == "euro"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style:"currency",
                currency:"EUR"
            }).format(currencyValue * 62284.72)
        }
        if (currencySelect.value == "libra"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style:"currency",
                currency:"GBP"
            }).format(currencyValue * 51870.96)
        }
        if (currencySelect.value == "bitcoin"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style:"currency", 
                currency:"BTC"
            }).format(currencyValue)
        }

    }

}

function changeCurrency() {
    const currencyName = document.getElementById("currencyName")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./img/eua.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./img/euro.png"
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./img/libra.png"
    }
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./img/bitcoin.png"
    }
    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "./img/brasil.png"
    }

    convertValues()
}

function changeCurrency2() {
    const currencyName2 = document.querySelector("#currencyName2")
    const currencyImg2 = document.querySelector(".currency-img2")

    if(currencySelect1.value == "real"){
        currencyImg2.src = "./img/brasil.png"
        currencyName2.innerHTML = "Real"
    }
    if (currencySelect1.value == "dolar"){
        currencyName2.innerHTML = "Dólar Americano"
        currencyImg2.src = "./img/eua.png"
    }
    if (currencySelect1.value == "euro"){
        currencyImg2.src = "./img/euro.png"
        currencyName2.innerHTML = "Euro"
    }
    if (currencySelect1.value == "libra"){
        currencyImg2.src = " ./img/libra.png"
        currencyName2.innerHTML = "Libra"
    }
    if (currencySelect1.value == "bitcoin"){
        currencyImg2.src = "./img/bitcoin.png"
        currencyName2.innerHTML = "Bitcoin"
    }

    convertValues()
}

currencySelect1.addEventListener("change", changeCurrency2)
currencySelect.addEventListener("change", changeCurrency)
convertbutton.addEventListener("click", convertValues)