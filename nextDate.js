/* The function is translated version of the Java Code in Chapter 2.3.3 of the textbook */

function nextDate(month, day, year) {
    let tomorrowDay, tomorrowMonth, tomorrowYear;
    
    // Initialize tomorrowMonth and tomorrowYear with current values
    tomorrowMonth = month;
    tomorrowYear = year;

    switch (month) {
        // 31 day months (except Dec.)
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
            if (day < 31) {
                tomorrowDay = day + 1;
            } else {
                tomorrowDay = 1;
                tomorrowMonth = month + 1;
            }
            break;

        // 30 day months
        case 4:
        case 6:
        case 9:
        case 11:
            if (day < 30) {
                tomorrowDay = day + 1;
            } else {
                tomorrowDay = 1;
                tomorrowMonth = month + 1;
            }
            break;

        // December
        case 12:
            if (day < 31) {
                tomorrowDay = day + 1;
            } else {
                tomorrowDay = 1;
                tomorrowMonth = 1;
                if (year === 2042) {
                    console.log("Date beyond 2042");
                } else {
                    tomorrowYear = year + 1;
                }
            }
            break;

        // February
        case 2:
            if (day < 28) {
                tomorrowDay = day + 1;
            } else {
                if (day === 28) {
                    if (isLeap(year)) {  // Added year parameter
                        tomorrowDay = 29;
                    } else {
                        tomorrowDay = 1;
                        tomorrowMonth = 3;
                    }
                } else if (day === 29) {
                    tomorrowDay = 1;
                    tomorrowMonth = 3;
                }
            }
            break;
    }

    return { day: tomorrowDay, month: tomorrowMonth, year: tomorrowYear };
}

// leap year calculation
function isLeap(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(nextDate(2,28,2025))