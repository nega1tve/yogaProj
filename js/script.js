'use strict';

window.addEventListener('DOMContentLoaded', function () {
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    descriptionBtn(i);
                    break;
                }
            }
        }

    });

    // Timer

    let deadline = '2021-09-01';

    function getTimeRemaining(deadline) {
        let t = Date.parse(deadline) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        return {
            'total': t,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours
        };
    }

    function setClock(id, deadline) {
        let timer = document.getElementById(id);
        let hours = timer.querySelector('.hours');
        let minutes = timer.querySelector('.minutes');
        let seconds = timer.querySelector('.seconds');
        let timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(deadline);
            hours.textContent = ("0" + t.hours).slice(-2);
            minutes.textContent = ("0" + t.minutes).slice(-2);
            seconds.textContent = ("0" + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadline);

    //Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    function descriptionBtn(t) {
        let descriptionBtn = document.querySelectorAll('.description-btn')[t];

        descriptionBtn.addEventListener('click', function () {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    }

});