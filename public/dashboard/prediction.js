

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('predictBtn').addEventListener('click', async () => {
        // document.getElementById("headline").innerText = "Form is working!";

        let temperature = document.getElementById("temperature").value,
            turbidity = document.getElementById("turbidity").value,
            ph = document.getElementById("ph").value,
            dsolids = document.getElementById("dsolids").value,
            doxygen = document.getElementById("doxygen").value

        let data = {
            temperature,
            turbidity,
            ph,
            dsolids,
            doxygen
        };

        console.log(data);

        // Sending this data to python script on gcloud

        let result = await fetch('https://us-central1-openclassroomproj7.cloudfunctions.net/hello_http', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(data)
        });

        console.log(result,result.result);


    });
});
