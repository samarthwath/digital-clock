setInterval(() => {
    let dateObject = new Date();
    let timeZone = document.querySelector(`#time-zone`);
    let weekDay = document.querySelector(`#week-day`);
    let displayHour = document.querySelector(`#display-hour`);
    let displayDate = document.querySelector(`#display-date`);
    let setTimeZone = `AM`;
    let parseHourValue = dateObject.getHours();
    if (12 <= dateObject.getHours() && dateObject.getHours() <= 24) {
        parseHourValue = dateObject.getHours() % 12;
        setTimeZone = `PM`;
    }
    let daysInfo = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`];
    let monthsInfo = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
    timeZone.innerText = setTimeZone;
    timeZone.setAttribute(`style`, `color: white`);
    weekDay.innerText = daysInfo[dateObject.getDay()];
    timeZone.setAttribute(`style`, `color: white`);
    let hoursMinutesAndSeconds = `${parseHourValue}:  ${dateObject.getMinutes()}: ${dateObject.getSeconds()}`
    displayHour.innerText = hoursMinutesAndSeconds;
    displayHour.setAttribute(`style`, `color: white`);
    let formattedDate = `${dateObject.getDate()} ${monthsInfo[dateObject.getMonth()]} ${dateObject.getFullYear()}`;
    displayDate.innerText = formattedDate;
    displayDate.setAttribute(`style`, `color: white`);
}, 1000);