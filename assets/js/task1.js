const parser = new DOMParser();

function readXml() {
    let xmlDoc = `
<list>
    <student>
    <name lang="en">
        <first>Ivan</first>
    <second>Ivanov</second>
</name>
    <age>35</age>
    <prof>teacher</prof>
</student>
    <student>
        <name lang="ru">
            <first>Петр</first>
            <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
    <student>
        <name lang="en">
            <first>John</first>
            <second>Doe</second>
        </name>
        <age>40</age>
        <prof>engineer</prof>
    </student>
    <student>
        <name lang="ru">
            <first>Анна</first>
            <second>Смирнова</second>
        </name>
        <age>32</age>
        <prof>doctor</prof>
    </student>
    <student>
        <name lang="en">
            <first>Sarah</first>
            <second>Johnson</second>
        </name>
        <age>45</age>
        <prof>lawyer</prof>
    </student>
    <student>
        <name lang="ru">
            <first>Михаил</first>
            <second>Иванов</second>
        </name>
        <age>50</age>
        <prof>manager</prof>
    </student>
    <student>
        <name lang="en">
            <first>Emily</first>
            <second>Williams</second>
        </name>
        <age>28</age>
        <prof>architect</prof>
    </student>
    <student>
        <name lang="ru">
            <first>Екатерина</first>
            <second>Павлова</second>
        </name>
        <age>37</age>
        <prof>accountant</prof>
    </student>
    <student>
        <name lang="en">
            <first>Michael</first>
            <second>Brown</second>
        </name>
        <age>48</age>
        <prof>scientist</prof>
    </student>
    <student>
        <name lang="ru">
            <first>Дмитрий</first>
            <second>Кузнецов</second>
        </name>
        <age>42</age>
        <prof>musician</prof>
    </student>
    <student>
        <name lang="en">
            <first>Lisa</first>
            <second>Miller</second>
        </name>
        <age>30</age>
        <prof>artist</prof>
    </student>
    <student>
        <name lang="ru">
            <first>Ольга</first>
            <second>Алексеева</second>
        </name>
        <age>25</age>
        <prof>designer</prof>
    </student>
</list>`;
    return xmlDoc;
}

const xmlDOM = readXml();
let xmlString = parser.parseFromString(xmlDOM, "text/xml")
let list = new Object(null);
elemStudnet = xmlString.getElementsByTagName("student");
console.log("Task1");
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
        "name:": first + ' ' +second, "Age:": age, "Prof:": prof
    }
    console.log(list);
}
