'use strict';

(function IndexScope() {
    document.addEventListener('DOMContentLoaded', () => {
        const now = new Date();
        const thisYear = now.getFullYear();
        const thisMonth = now.getMonth();
        const thisDay = now.getDate();
        const numberOfDaysInMonths = [{
                "January": 31
            },
            {
                "February": 28
            },
            {
                "March": 31
            },
            {
                "April": 30
            },
            {
                "May": 31
            },
            {
                "June": 30
            },
            {
                "July": 31
            },
            {
                "August": 31
            },
            {
                "September": 30
            },
            {
                "October": 31
            },
            {
                "November": 30
            },
            {
                "December": 31
            }
        ];
        const month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";
        document.querySelector('.title').innerHTML = `${month[thisMonth]} - ${thisYear}`;
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let weeks = [{
                "Mondays": []
            },
            {
                "Tuesdays": []
            },
            {
                "Wednesdays": []
            },
            {
                "Thursdays": []
            },
            {
                "Fridays": []
            },
            {
                "Saturdays": []
            },
            {
                "Sundays": []
            },
        ];
        let numberOfDays = null;
        let allDays;
        let mondays = document.querySelector('.monday');
        let tuesdays = document.querySelector('.tuesday');
        let wednesdays = document.querySelector('.wednesday');
        let thursdays = document.querySelector('.thursday');
        let fridays = document.querySelector('.friday');
        let saturdays = document.querySelector('.saturday');
        let sundays = document.querySelector('.sunday');
        const green = document.querySelector('.green');
        const red = document.querySelector('.red');
        const purple = document.querySelector('.purple');
        let color = "green";
        let dates = null;

        function getHowLongTheMonth(month) {
            for (const days in month) {
                if (month.hasOwnProperty(days)) {
                    numberOfDays = month[days];
                }
            }
        }

        function createThisMonth() {
            for (let index = 1; index < numberOfDays + 1; index++) {
                allDays = new Date(thisYear, thisMonth, index);
                switch (dayNames[allDays.getDay()]) {
                    case "Monday":
                        weeks[0].Mondays.push(allDays);
                        break;
                    case "Tuesday":
                        weeks[1].Tuesdays.push(allDays);
                        break;
                    case "Wednesday":
                        weeks[2].Wednesdays.push(allDays);
                        break;
                    case "Thursday":
                        weeks[3].Thursdays.push(allDays);
                        break;
                    case "Friday":
                        weeks[4].Fridays.push(allDays);
                        break;
                    case "Saturday":
                        weeks[5].Saturdays.push(allDays);
                        break;
                    case "Sunday":
                        weeks[6].Sundays.push(allDays);
                        break;
                    default:
                        break;
                }
            }
            fillCalendar();
        }

        function fillCalendar() {
            for (let i = 0; i < weeks.length; i++) {
                for (const day in weeks[i]) {
                    if (weeks[i].hasOwnProperty(day)) {
                        for (let j = 0; j < weeks[i][day].length; j++) {
                            let element = weeks[i][day][j];
                            let newElement = document.createElement('div');
                            switch (day) {
                                case "Mondays":
                                    newElement.classList.add('week-date');
                                    newElement.innerHTML = element.getDate();
                                    mondays.appendChild(newElement);
                                    break;
                                case "Tuesdays":
                                    newElement.classList.add('week-date');
                                    newElement.innerHTML = element.getDate();
                                    tuesdays.appendChild(newElement);
                                    break;
                                case "Wednesdays":
                                    newElement.classList.add('week-date');
                                    newElement.innerHTML = element.getDate();
                                    wednesdays.appendChild(newElement);
                                    break;
                                case "Thursdays":
                                    newElement.classList.add('week-date');
                                    newElement.innerHTML = element.getDate();
                                    thursdays.appendChild(newElement);
                                    break;
                                case "Fridays":
                                    newElement.classList.add('week-date');
                                    newElement.innerHTML = element.getDate();
                                    fridays.appendChild(newElement);
                                    break;
                                case "Saturdays":
                                    newElement.classList.add('week-date');
                                    newElement.innerHTML = element.getDate();
                                    saturdays.appendChild(newElement);
                                    break;
                                case "Sundays":
                                    newElement.classList.add('week-date');
                                    newElement.innerHTML = element.getDate();
                                    sundays.appendChild(newElement);
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                }
            }
            dates = document.querySelectorAll('.week-date');
            getToday();
        }

        function getToday() {
            for (let i = 0; i < dates.length; i++) {
                if (dates[i].innerHTML === thisDay.toString()) {
                    dates[i].classList.add('active');
                }
            }
        }

        function createCalendar() {
            getHowLongTheMonth(numberOfDaysInMonths[thisMonth]);
            createThisMonth();
            listenDates();
        }

        function listenDates() {
            if (dates === null) {
                setTimeout(() => {
                    listenDates();
                }, 300);
            } else {
                for (let i = 0; i < dates.length; i++) {
                    dates[i].addEventListener('click', (el) => {
                        if (dates[i].classList.contains(color)) {
                            dates[i].classList.remove('green');
                            dates[i].classList.remove('red');
                            dates[i].classList.remove('purple');
                        } else {
                            dates[i].classList.remove('green');
                            dates[i].classList.remove('red');
                            dates[i].classList.remove('purple');
                            dates[i].classList.add(color);
                        }
                    })
                }
            }
        }

        green.addEventListener('click', () => {
            color = 'green';
            resetActiveColor();
            green.classList.add('active-color');
        })

        red.addEventListener('click', () => {
            color = 'red';
            resetActiveColor();
            red.classList.add('active-color');
        })

        purple.addEventListener('click', () => {
            color = 'purple';
            resetActiveColor();
            purple.classList.add('active-color');
        })

        function resetActiveColor() {
            green.classList.remove('active-color');
            red.classList.remove('active-color');
            purple.classList.remove('active-color');
        }

        createCalendar();

    });
}.bind({})());