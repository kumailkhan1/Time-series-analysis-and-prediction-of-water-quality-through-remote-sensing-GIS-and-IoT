var tempMsg = document.getElementById('temp-val'),
    turbidityMsg = document.getElementById('turbidity-val'),
    phMsg = document.getElementById('ph-val'),
    dsolidsMsg = document.getElementById('dsolids-val'),
    doxygenMsg = document.getElementById('doxygen-val');

document.getElementById('predictBtn').addEventListener('click', async () => {
    // document.getElementById("headline").innerText = "Form is working!";
    document.getElementById('model-output').textContent = "";
    tempMsg.style.display = "none";
    turbidityMsg.style.display = "none";
    phMsg.style.display = "none";
    dsolidsMsg.style.display = "none";
    doxygenMsg.style.display = "none";

    let temperature = parseFloat(document.getElementById("temperature").value),
        turbidity = parseFloat(document.getElementById("turbidity").value),
        ph = parseFloat(document.getElementById("ph").value),
        dsolids = parseFloat(document.getElementById("dsolids").value),
        doxygen = parseFloat(document.getElementById("doxygen").value);


    // Validate Inputs
    let validation = validateInput(temperature, turbidity, ph, dsolids, doxygen);
    if (!validation) {
        return;
    }
    let data = {
        temperature,
        turbidity,
        ph,
        dsolids,
        doxygen
    };

    console.log(data);

    // Sending this data to python script on gcloud
    document.getElementById('model-output').textContent = "Please wait...";
    let result = await fetch('https://us-central1-openclassroomproj7.cloudfunctions.net/NN_model', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(data)
    });


    result = await result.json();

    document.getElementById('model-output').textContent = "The Water Quality is " + result.result;


});


function validateInput(temperature, turbidity, ph, dsolids, doxygen) {

    let validation = true;
    if (isNaN(temperature) || isNaN(turbidity) || isNaN(ph) || isNaN(dsolids) || isNaN(doxygen)) {
        document.getElementById('model-output').textContent = "Value of WQPs can't be empty.";
        validation = false;
    }


    if (!(temperature >= 0 && temperature <= 50)) {
        tempMsg.innerText = "Temperature value should be in range 0 to 50 °C"
        tempMsg.style.display = "block";

        validation = false;
    }
    if (!(turbidity >= 0 && turbidity <= 1400)) {
        turbidityMsg.innerText = "Turbidity value should be in range 0 to 1400 NTU"
        turbidityMsg.style.display = "block";

        validation = false;
    }
    if (!(ph >= 0 && ph <= 14)) {
        phMsg.innerText = "pH value should be in range 0 to 14"
        phMsg.style.display = "block";

        validation = false;
    }
    if (!(dsolids >= 0 && dsolids <= 500)) {
        dsolidsMsg.innerText = "Dissolved Solids value should be in range 0 to 500 mg/l"
        validation = false;
        dsolidsMsg.style.display = "block";
    }
    if (!(doxygen >= 0 && doxygen <= 200)) {
        doxygenMsg.innerText = "Dissolved Oxygen value should be in range 0 to 200 mg/l"
        validation = false;
        doxygenMsg.style.display = "block";
        
    }
    return validation;
}
