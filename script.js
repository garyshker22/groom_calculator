function calculator() {
    let education = document.getElementById("education");
    let family = document.getElementById("family");
    let skills = document.getElementsByClassName('skills')
    let ages = document.getElementsByClassName('ages')
    let gossips = document.getElementsByClassName('gossips')
    let result = document.getElementById('Result');
    let btnShow = document.querySelector("button");
    let sum = 500;
    sum *= education.value * family.value
    for (i = 0; i < 4; i++) {
        if (skills[i].checked === true) {
            sum += parseInt(skills[i].value);
        }
    }
    for (i = 0; i < 3; i++) {
        if (gossips.checked === true) {
            if (gossips.value !== "200") {
                sum *= Number(gossips.value);
            } else {
                sum -= Number(gossips.value);
            }
        }
        if (ages.checked === true) {
            sum *= Number(ages.value);
        }
    }
    result.innerText = sum + "$";
};