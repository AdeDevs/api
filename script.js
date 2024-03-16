const imagenames = [
    'assets/1702945777790.jpg',
    'assets/download.jpeg',
    'assets/gothyzm.jpeg',
    'assets/sapa.jpg'
];

displayImages(imagenames);

async function displayImages(imagenames) {
    //declaration of loop
    for (let imagename of imagenames) {
        const response = await fetch(imagename)
        const blob = await response.blob();

        //creation of image element
        const img = document.createElement('img');

        //setting src attribute with blob url
        img.src = URL.createObjectURL(blob);

        //setting styles
        img.width = '200'
        img.style.margin = "0 10px 0 0"

        //appending to html div with id "one"
        document.getElementById("one").appendChild(img);
    }
}

displayYuuji().catch(error => {
    console.log("error loading image")
});

async function displayYuuji() {
    const response = await fetch("./assets/yuuji.webp")
    console.log(response)
    const blob = await response.blob();
    console.log(blob)
    document.getElementById("yuuji").src = URL.createObjectURL(blob)
}

displayApple().catch(error => {
    console.log(`error loading video ${error}`)
})

async function displayApple() {
    const response = await fetch("./assets/large.mp4");
    console.log(response)
    const blob = await response.blob();
    console.log(blob)
    document.getElementById("apple").src = URL.createObjectURL(blob)
}

displayText()
async function displayText() {
    const response = await fetch('./assets/text.doc');
    const text = await response.text();
    document.getElementById("text").innerHTML = text;
}



getTest();

async function getTest() {
    const response = await fetch('./assets/test.csv')
    const data = await response.text();
    console.log(data)
    const sortedData = data.split('\n').splice(1);

    sortedData.forEach(elt => {
        const row = elt.split(',')
        const year = row[0]
        const firstName = row[1]
        const lastName = row[2]
        const age = row[3]
        const pronoun = row[4]
        console.log(`${firstName} ${lastName} was born in ${year}, and ${pronoun} is ${age} years old`)

        const paragraph = document.createElement('p');
        paragraph.textContent = `${firstName} ${lastName} was born in ${year}, and ${pronoun} is ${age} years old`;

        document.getElementById('data').appendChild(paragraph);
    })
}