

async function loadModel() {

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

