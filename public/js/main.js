const btn = document.getElementById('submitbtn');
const cityName = document.getElementById('cityName');
const cityinput = document.getElementById('cityinput');
const temp = document.getElementById('temp');
const today = document.getElementById('today');
const tempicon = document.getElementById('tempicon');
const date = new Date();

const getInfo = async (event)=>{
    event.preventDefault();
    if(cityinput.value === ""){
        cityName.innerHTML = "Input City Name Properly";
    }
    else{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityinput.value}&units=metric&appid=67bd012bb40e678a64edca7fbb48bb07`;
            const response = await fetch(url);
            const data = await response.json();
            temp.innerHTML = `${data.main.temp} C`;
            cityName.innerHTML = data.name;
            today.innerHTML = date.toLocaleDateString();


            const tempMood= data.weather[0].main;
            // condition to check sunny or cloudy
            if(tempMood=="Clear"){
                tempicon.innerHTML=
                    "<i class='fas fa-sun'style='color:#eccc68;'></i>";
                }else if(tempMood=="Clouds"){
                tempicon.innerHTML=
                    "<i class='fas fa-cloud'style='color:#f1f2f6;'></i>";
                }else if(tempMood=="Rain"){
                tempicon.innerHTML=
                    "<i class='fas fa-cloud-rain'style='color:#a4b0be;'></i>";
                }else{
                tempicon.innerHTML=
                    "<i class='fas fa-cloud'style='color:#f1f2f6;'></i>";
            }




        } catch (error) {
            
        cityName.innerHTML = "Input City Name Properly";
        }
    }


}

btn.addEventListener('click', getInfo)