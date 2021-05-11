

document.getElementById('predictBtn').addEventListener('click', async () => {
    // document.getElementById("headline").innerText = "Form is working!";


    let temperature = parseFloat(document.getElementById("temperature").value),
        turbidity = parseFloat(document.getElementById("turbidity").value),
        ph = parseFloat(document.getElementById("ph").value),
        dsolids = parseFloat(document.getElementById("dsolids").value),
        doxygen = parseFloat(document.getElementById("doxygen").value);


    // Validate Inputs
    let validation = validateInput(temperature,
        turbidity,
        ph,
        dsolids,
        doxygen);

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


function validateInput(temperature,turbidity,ph,dsolids,doxygen) {

    if (isNaN(temperature) || isNaN(turbidity) || isNaN(ph) || isNaN(dsolids) || isNaN(doxygen)) {
        document.getElementById('model-output').textContent = "Value of WQPs can't be empty.";
        return;
    }
    let tempMsg = document.getElementById('temp-val'),
        turbidityMsg = document.getElementById('turbidity-val'),
        phMsg = document.getElementById('ph-val'),
        dsolidsMsg = document.getElementById('dsolids-val'),
        doxygenMsg = document.getElementById('doxygen-val');

    if (!(0 < temperature < 50)) {
        tempMsg.innerText = "Temperature value should be in range 0 to 50"
    }

    if (!(0 < temperature < 50)) {
        turbidityMsg.innerText = "Temperature value should be in range 0 to 50"
    }
}
