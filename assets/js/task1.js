const parser = new DOMParser();

function readXml(xmlFile) {
    var xmlDoc;
    if (typeof window.DOMParser != "undefined") {
        xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", xmlFile, false);
        if (xmlhttp.overrideMimeType) {
            xmlhttp.overrideMimeType('text/xml');
        }
        xmlhttp.send();
        xmlDoc = xmlhttp.responseXML;
    } else {
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = "false";
        xmlDoc.load(xmlFile);
    }
    return xmlDoc;
}

const xmlDOM = readXml('../assets/addfiles/listTask1.xml');

let list = new Object(null);
elemStudnet = xmlDOM.getElementsByTagName("student");

for (let i = 0; i < elemStudnet.length; i++) {
    let first = elemStudnet[i]
        .getElementsByTagName("name")[0]
        .childNodes[1]
        .firstChild.nodeValue;
    let second = elemStudnet[i]
        .getElementsByTagName("name")[0]
        .childNodes[3]
        .lastChild.nodeValue;
    let age = elemStudnet[i]
        .getElementsByTagName("age")[0]
        .childNodes[0]
        .nodeValue;
    let prof = elemStudnet[i]
        .getElementsByTagName("prof")[0]
        .childNodes[0]
        .nodeValue;
    list = {
        "FName:": first, "SName:": second, "Age:": age, "Prof:": prof
    }
    console.log("Task1",list);
}
