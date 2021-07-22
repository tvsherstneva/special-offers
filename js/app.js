/*'use strict';
function addOffer(parentEl, offer) {
    const imageEl = document.createElement('img');
    imageEl.src = offer.image;
    parentEl.appendChild(imageEl);

    if (offer.remainingDays) {
        const remainingDaysEl = document.createElement('span');
        console.log(offer.remainingDays);
        const daysString =convertToDaysString(offer.remainingDays);
        remainingDaysEl.textContent = `${offer.remainingDays} ${daysString}`;
        parentEl.appendChild(remainingDaysEl);
    }
    const titleEl = document.createElement('h3');
    titleEl.textContent = offer.title;
    parentEl.appendChild(titleEl);

    const descriptionEl = document.createElement('p');
    descriptionEl.textContent = offer.description;
    parentEl.appendChild(descriptionEl);
}
function convertToDaysString(totalDays) {
    const declinationDay = {
        0: 'дней',
        1: 'день',
        2: 'дня',
        3: 'дня',
        4: 'дня',
        5: 'дней',
        6: 'дней',
        7: 'дней',
        8: 'дней',
        9: 'дней',
    };
    if (totalDays > 14) {
        return declinationDay[totalDays % 10];
    }
    if (totalDays < 11) {
        return declinationDay[totalDays % 10];
    }
    return 'дней';
}


*/
'use strict';



function addOffer(parentEl, offer) {
    const imageEl = document.createElement('img');
    imageEl.src = offer.image;
    parentEl.appendChild(imageEl);

    if (offer.remainingDays !== 0) {
        const remainingDaysEl = document.createElement('span');
        remainingDaysEl.textContent = offer.remainingDays + convertToDaysString(txtDay);
        parentEl.appendChild(remainingDaysEl);

    }

    const titleEl = document.createElement('h3');
    titleEl.textContent = offer.title;
    parentEl.appendChild(titleEl);

    const descriptionEl = document.createElement('p');
    descriptionEl.textContent = offer.description;
    parentEl.appendChild(descriptionEl);
}


let offer = {
    image: 'https://js-rosbank.ru/assets/offer-school.png',
    remainingDays: 1,
    title: 'Школьные выплаты на карту #МожноВСЁ',
    description: 'Получите 10 000 Р от государства + 1500 Р от Росбанка',
};


let txtDay = offer.remainingDays;

function convertToDaysString(txtDay) {
    txtDay = txtDay % 10;
    if (txtDay == 1) {
        return txtDay = ' день';
    } else if (txtDay == 2 && !(offer.remainingDays === 12)) {
        return txtDay = ' дня';
    } else if (txtDay == 3 && !(offer.remainingDays === 13)) {
        return txtDay = ' дня';
    } else if (txtDay == 4 && !(offer.remainingDays === 14)) {
        return txtDay = ' дня';
    } else {
        return txtDay = ' дней';
    }
}

addOffer(document.body, offer);




