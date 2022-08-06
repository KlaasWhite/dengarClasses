var devmode = false;
var selectedClass = "Voodoo";
var classes;
var svgPlus =
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path d='M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z'></path></svg>";
var svgMin =
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path d='M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z'></path></svg>";

const displaySelectedClass = () => {
    let ctwClass = classes.find((ctwClass) => ctwClass.name === selectedClass);
    let html = `<table><tr>`;
    html += `<td><h2 ">${ctwClass.name}</h2></td>`;
    html += `<tr><td class="health">Health:`;
    for (let i = 0; i < ctwClass.health / 2; i++) {
        html += `<img src="pictures/hp.png" class="health-img"/>`;
    }
    html += `(${ctwClass.health})`;
    html += `</td></tr><tr><td class="description">`;
    html += `${ctwClass.description}`;
    html += `</td></tr>`;
    ctwClass.dengarModifiers.forEach((modifier) => {
        html += `<tr><td class="modifier-element"><table class="modifier"><tr class="modifier-dengar"><td class="modifier-icon"><img
        src="pictures/Dengar.png"/></td>`;
        html += `<td class="modifier-desc">`;
        html += `${modifier}`;
        html += `</td></tr></table></td></tr>`;
    });
    ctwClass.positiveModifiers.forEach((modifier) => {
        html += `<tr><td class="modifier-element"><table class="modifier"><tr class="modifier-positive"><td class="modifier-icon">
        ${svgPlus}</td>`;
        html += `<td class="modifier-desc">`;
        html += `${modifier}`;
        html += `</td></tr></table></td></tr>`;
    });
    ctwClass.negativeModifiers.forEach((modifier) => {
        html += `<tr><td class="modifier-element"><table class="modifier"><tr class="modifier-negative"><td class="modifier-icon">
        ${svgMin}</td>`;
        html += `<td class="modifier-desc">`;
        html += `${modifier}`;
        html += `</td></tr></table></td></tr>`;
    });
    html += `</table>`;
    document.getElementById("class-display").innerHTML = html;
    document.getElementById(
        "class-display"
    ).style.border = `#${ctwClass.color} 10px solid`;
};

const setEventListeners = (classes) => {
    classes.forEach((ctwClass) => {
        let icon = document.getElementById(`class-icon-${ctwClass.name}`);
        icon.addEventListener("click", (event) => {
            let className = event.currentTarget.id.substring(11);
            selectedClass = className;
            displaySelectedClass();
        });
    });
};

const generate = (classes) => {
    let baseHtml = `<div id="class-display"></div><div id="class-icons"></div>`;
    document.getElementById("root").innerHTML = baseHtml;

    let classIconsHtml = "<table id='class-icon-table'>";
    classes.forEach((ctwClass, index) => {
        if (index % 10 === 0) {
            classIconsHtml += "<tr>";
        }
        classIconsHtml += `<td class="class-icon-element" id="class-icon-${
            ctwClass.name
        }">
                <img src="pictures/icons/${ctwClass.name
                    .toLowerCase()
                    .split(" ")
                    .join("")}.png" class="class-icon"/>
            </td>`;

        if (index % 10 === 9) {
            classIconsHtml += "</tr>";
        }
    });
    classIconsHtml += "</table>";
    console.log(classIconsHtml);
    document.getElementById("class-icons").innerHTML = classIconsHtml;
};

const getData = () => {
    return new Promise((resolve, reject) => {
        if (devmode) {
            resolve(data);
        } else {
            $.getJSON("data.json", function (json) {
                resolve(json);
            });
        }
    });
};

const init = async () => {
    let classData = await getData();
    console.log(classData);

    classes = classData.classes;

    generate(classData.classes);
    setEventListeners(classData.classes);
    displaySelectedClass();
};

init();

// generate();

// let html = "";
// html += "<table>";
// json.classes.forEach((ctwClass) => {
//     html += `<tr><td class="top-td"><table><tr>`;
//     html += `<td><h2>${ctwClass.name}</h2></td>`;
//     html += `<tr><td class="health">Health:`;
//     for (let i = 0; i < ctwClass.health / 2; i++) {
//         html += `<img src="pictures/hp.png" class="health-img"/>`;
//     }
//     html += `(${ctwClass.health} / ${
//         ctwClass.health > 20
//             ? `+${ctwClass.health - 20}`
//             : `-${20 - ctwClass.health}`
//     })`;
//     html += `</td></tr><tr><td class="description">`;
//     html += `${ctwClass.description}`;
//     html += `</td></tr>`;
//     ctwClass.dengarModifiers.forEach((modifier) => {
//         html += `<tr><td class="modifier-element"><table class="modifier"><tr><td class="modifier-dengar"><img
//         src="pictures/Dengar.png"/></td>`;
//         html += `<td class="modifier-desc">`;
//         html += `${modifier}`;
//         html += `</td></tr></table></td></tr>`;
//     });
//     ctwClass.positiveModifiers.forEach((modifier) => {
//         html += `<tr><td class="modifier-element"><table class="modifier"><tr><td class="modifier-positive">
//         <div>+</div></td>`;
//         html += `<td class="modifier-desc">`;
//         html += `${modifier}`;
//         html += `</td></tr></table></td></tr>`;
//     });
//     ctwClass.negativeModifiers.forEach((modifier) => {
//         html += `<tr><td class="modifier-element"><table class="modifier"><tr><td class="modifier-negative">
//         <div>-</div></td>`;
//         html += `<td class="modifier-desc">`;
//         html += `${modifier}`;
//         html += `</td></tr></table></td></tr>`;
//     });
//     html += `</table></td></tr>`;
//     html += `</table>`;
// });
