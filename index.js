"use strict";

let wrap = document.querySelector('.wrapper');

let btn = document.querySelector("#btn");

btn.onclick = function () {
    let textC = 0;
    let textA = randomNumber(0, 1);

    while (textC <= 480) {
        let divA = document.createElement('div');
        let titleA = document.createElement('p');
        titleA.innerHTML = '"A" (рондомное число от 0 до 1) =';
        let mainA = document.createElement('p')
        mainA.innerHTML = textA;

        wrap.append(divA);
        divA.append(titleA);
        divA.append(mainA);


        if (textA <= 0.8) {
            let textB = randomNumber(10, 15);
            let divB = document.createElement('div');
            let titleB = document.createElement('p');
            titleB.innerHTML = '"B" (рондомное число от 10 до 15) =';
            let mainB = document.createElement('p');
            mainB.innerHTML = textB;

            wrap.append(divB);
            divB.append(titleB);
            divB.append(mainB);

            textC = textC + textB;

        } if (textA > 0.8) {
            let textB = randomNumber(16, 23);
            let divB = document.createElement('div');
            let titleB = document.createElement('p')
            titleB.innerHTML = '"B" (рондомное число от 16 до 23) =';
            let mainB = document.createElement('p')
            mainB.innerHTML = textB;

            wrap.append(divB);
            divB.append(titleB);
            divB.append(mainB);

            textC = textC + textB;
        }

        let divC = document.createElement('div');
        let titleC = document.createElement('p');
        titleC.innerHTML = '"C" (Итоговое число) =';
        let mainC = document.createElement('p')
        mainC.innerHTML = textC;

        wrap.append(divC);
        divC.append(titleC);
        divC.append(mainC);
    }

};


function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}