// js_assessment.js (items_web2)


// Function to accept user input for data file that then spits out lines and keys, then converts to JSON
function readDataAndConvertToJSON(dataFile) {
    fetch(dataFile).then((res) => {
        return res.text;
    }).then((data) => {
        // const lines = data.split("\n");
        // const keys = lines.shift().split(",");

        var myObj = JSON.stringify(data);
    }).catch((err) => {
        console.log("\n\n\nError: bad read.\n\n\n")
    });

    console.log(lines, keys);

    // cleanUpJSONAndMakeItPretty(lines, keys, myObj);
}

function cleanUpJSONAndMakeItPretty(dataLines, dataKeys, myJSONObject) {

}

readDataAndConvertToJSON("MOCK_DATA.csv");