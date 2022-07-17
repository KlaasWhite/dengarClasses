const generate = () => {
    $.getJSON("data.json", function (json) {
        let html = "";
        html += "<table>";
        json.classes.forEach((ctwClass) => {
            html += `<tr><td class="top-td"><table><tr>`;
            html += `<td><h2>${ctwClass.name}</h2></td>`;
            html += `<tr><td class="health">Health:`;
            for (let i = 0; i < ctwClass.health / 2; i++) {
                html += `<img src="pictures/hp.png" class="health-img"/>`;
            }
            html += `(${ctwClass.health} / ${
                ctwClass.health > 20
                    ? `+${ctwClass.health - 20}`
                    : `-${20 - ctwClass.health}`
            })`;
            html += `</td></tr><tr><td class="description">`;
            html += `${ctwClass.description}`;
            html += `</td></tr>`;
            ctwClass.dengarModifiers.forEach((modifier) => {
                html += `<tr><td class="modifier-element"><table class="modifier"><tr><td class="modifier-dengar"><img
                src="pictures/Dengar.png"/></td>`;
                html += `<td class="modifier-desc">`;
                html += `${modifier}`;
                html += `</td></tr></table></td></tr>`;
            });
            ctwClass.positiveModifiers.forEach((modifier) => {
                html += `<tr><td class="modifier-element"><table class="modifier"><tr><td class="modifier-positive">
                <div>+</div></td>`;
                html += `<td class="modifier-desc">`;
                html += `${modifier}`;
                html += `</td></tr></table></td></tr>`;
            });
            ctwClass.negativeModifiers.forEach((modifier) => {
                html += `<tr><td class="modifier-element"><table class="modifier"><tr><td class="modifier-negative">
                <div>-</div></td>`;
                html += `<td class="modifier-desc">`;
                html += `${modifier}`;
                html += `</td></tr></table></td></tr>`;
            });
            html += `</table></td></tr>`;
            html += `</table>`;
        });
        document.getElementById("root").innerHTML = html;
    });
};

generate();
