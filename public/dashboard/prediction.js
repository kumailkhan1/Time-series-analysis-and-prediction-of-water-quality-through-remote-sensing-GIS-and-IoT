

document.getElementById('predictBtn').addEventListener('click', async () => {
    // document.getElementById("headline").innerText = "Form is working!";

    let temperature = parseFloat(document.getElementById("temperature").value),
        turbidity = parseFloat(document.getElementById("turbidity").value),
        ph = parseFloat(document.getElementById("ph").value),
        dsolids = parseFloat(document.getElementById("dsolids").value),
        doxygen = parseFloat(document.getElementById("doxygen").value)

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

