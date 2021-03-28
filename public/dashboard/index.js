

async function loadModel() {
    // fetch tf object
    // let data = [11.0, 22.0, 7.64, 304.0, 3.6, 36.700001, 11.0, 24.0, 7.19, 335.0, 3.8, 36.099998, 11.0, 28.0, 7.10, 347.0, 3.6, 34.700001, 11.0, 24.000000, 7.38, 374.0, 3.3, 35.799999]
    // const pred = await fetch('http://localhost:3000/dashboard/predict', {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data)
    // });
    // const content = await pred.json();
    // document.getElementById("dd").innerText = content;

    // GCLOUD Python Function test
    let hello = await fetch('https://us-central1-openclassroomproj7.cloudfunctions.net/hello_http', {
    }).then((result) =>
        result.json()
    )
        .catch((err) => {
            console.log(err)
        });;
    document.getElementById("dd").innerText = hello.name;

}

document.addEventListener('DOMContentLoaded', async () => {
    await loadModel();
}, false);