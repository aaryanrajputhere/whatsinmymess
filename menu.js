let token;

const currentDate = new Date();

const currentDay = currentDate.getDay();

const currentHour = currentDate.getHours();

const currentMinutes = currentDate.getMinutes();

// Sunday
if (currentDay === 0) {
    // Sunday Breakfast
    if (currentHour >= 0 && currentHour < 10) {
        token = 0;
    }
    // Sunday Lunch
    else if (currentHour >= 10 && currentHour < 15) {
        token = 1;
    }
    // Sunday Snacks
    else if (currentHour >= 15 && currentHour < 18) {
        token = 2;
    }
    //Sunday Dinner
    else if (currentHour >= 18 && currentHour < 22) {
        token = 3;
    }
    // Monday Breakfast
    else if (currentHour >= 22 && currentHour < 24) {
        token = 4;
} 
}
// Monday
else if (currentDay === 1) {
    // Monday Breakfast
    if (currentHour >= 0 && currentHour < 10) {
        token = 4;
    }
    // Monday Lunch
    else if (currentHour >= 10 && currentHour < 15) {
        token = 5;
    }
    // Monday Snacks
    else if (currentHour >= 15 && currentHour < 18) {
        token = 6;
    }
    // Monday Dinner
    else if (currentHour >= 18 && currentHour < 22) {
        token = 7;
    }
    // Tuesday Breakfast
    else if (currentHour >= 22 && currentHour < 24) {
        token = 8;
    }
}
// Tuesday
else if (currentDay === 2) {
    // Tuesday Breakfast
    if (currentHour >= 0 && currentHour < 10) {
        token = 8;
    }
    // Tuesday Lunch
    else if (currentHour >= 10 && currentHour < 15) {
        token = 9;
    }
    // Tuesday Snacks
    else if (currentHour >= 15 && currentHour < 18) {
        token = 10;
    }
    // Tuesday Dinner
    else if (currentHour >= 18 && currentHour < 22) {
        token = 11;
    }
    // Wednesday Breakfast
    else if (currentHour >= 22 && currentHour < 24) {
        token = 12;
    }
}
// Wednesday
else if (currentDay === 3) {
    // Wednesday Breakfast
    if (currentHour >= 0 && currentHour < 10) {
        token = 12;
    }
    // Wednesday Lunch
    else if (currentHour >= 10 && currentHour < 15) {
        token = 13;
    }
    // Wednesday Snacks
    else if (currentHour >= 15 && currentHour < 18) {
        token = 14;
    }
    // Wednesday Dinner
    else if (currentHour >= 18 && currentHour < 22) {
        token = 15;
    }
    // Thursday Breakfast
    else if (currentHour >= 22 && currentHour < 24) {
        token = 16;
    }
}
// Thursday
else if (currentDay === 4) {
    // Thursday Breakfast
    if (currentHour >= 0 && currentHour < 10) {
        token = 16;
    }
    // Thursday Lunch
    else if (currentHour >= 10 && currentHour < 15) {
        token = 17;
    }
    // Thursday Snacks
    else if (currentHour >= 15 && currentHour < 18) {
        token = 18;
    }
    // Thursday Dinner
    else if (currentHour >= 18 && currentHour < 22) {
        token = 19;
    }
    // Friday Breakfast
    else if (currentHour >= 22 && currentHour < 24) {
        token = 20;
    }
}
// Friday
else if (currentDay === 5) {
    // Friday Breakfast
    if (currentHour >= 0 && currentHour < 10) {
        token = 20;
    }
    // Friday Lunch
    else if (currentHour >= 10 && currentHour < 15) {
        token = 21;
    }
    // Friday Snacks
    else if (currentHour >= 15 && currentHour < 18) {
        token = 22;
    }
    // Friday Dinner
    else if (currentHour >= 18 && currentHour < 22) {
        token = 23;
    }
    // Saturday Breakfast
    else if (currentHour >= 22 && currentHour < 24) {
        token = 24;
    }
}
// Saturday
else if (currentDay === 6) {
    // Saturday Breakfast
    if (currentHour >= 0 && currentHour < 10) {
        token = 24;
    }
    // Saturday Lunch
    else if (currentHour >= 10 && currentHour < 15) {
        token = 25;
    }
    // Saturday Snacks
    else if (currentHour >= 15 && currentHour < 18) {
        token = 26;
    }
    // Saturday Dinner
    else if (currentHour >= 18 && currentHour < 22) {
        token = 27;
    }
    // Sunday Breakfast
    else if (currentHour >= 22 && currentHour < 24) {
        token = 0;
    }
}



let meal = 
    [
        "Sunday's Breakfast 8:30 a.m. - 10:00 a.m.",
        "Sunday's Lunch 1:00 p.m. - 2:30 p.m.",
        "Sunday's Snacks 5:15 p.m. - 6:00 p.m.",
        "Sunday's Dinner 8:00 p.m. - 9:30 p.m.",
        
        "Monday's Breakfast 7:45 a.m. - 9:00 a.m.",
        "Monday's Lunch 12:30 p.m. - 2:00 p.m.",
        "Monday's Snacks 5:15 p.m. - 6:00 p.m.",
        "Monday's Dinner 8:00 p.m. - 9:30 p.m.",
        
        "Tuesday's Breakfast 7:45 a.m. - 9:00 a.m.",
        "Tuesday's Lunch 12:30 p.m. - 2:00 p.m.",
        "Tuesday's Snacks 5:15 p.m. - 6:00 p.m.",
        "Tuesday's Dinner 8:00 p.m. - 9:30 p.m.",

        "Wednesday's Breakfast 7:45 a.m. - 9:00 a.m.",
        "Wednesday's Lunch 12:30 p.m. - 2:00 p.m.",
        "Wednesday's Snacks 5:15 p.m. - 6:00 p.m.",
        "Wednesday's Dinner 8:00 p.m. - 9:30 p.m.",
        
        "Thursday's Breakfast 7:45 a.m. - 9:00 a.m.",
        "Thursday's Lunch 12:30 p.m. - 2:00 p.m.",
        "Thursday's Snacks 5:15 p.m. - 6:00 p.m.",
        "Thursday's Dinner 8:00 p.m. - 9:30 p.m.",
        
        "Friday's Breakfast 7:45 a.m. - 9:00 a.m.",
        "Friday's Lunch 12:30 p.m. - 2:00 p.m.",
        "Friday's Snacks 5:15 p.m. - 6:00 p.m.",
        "Friday's Dinner 8:00 p.m. - 9:30 p.m.",

        "Saturday's Breakfast 8:30 a.m. - 10:00 a.m.",
        "Saturday's Lunch 1:00 p.m. - 2:30 p.m.",
        "Saturday's Snacks 5:15 p.m. - 6:00 p.m.",
        "Saturday's Dinner 8:00 p.m. - 9:30 p.m.",
    ]



let menu = 
    [
        [
            // Sunday Breakfast
            "Nan Chhote",
            "Cornflex",
            "Bread Butter & Jam",
            "Milk",
        ],
        [
            // Sunday Lunch
            "Matar Mushroom",
            "Dal",
            "Rice",
            "Chapati",
            "Rayta",
            "Salad",
        ],
        [
            // Sunday Snacks
            "Spring Roll",
            "Tea",
        ],
        [
            // Sunday Dinner
            "Kadhai Paneer",
            "Chicken",
            "Dal",
            "Rice",
            "Rumali Roti",
            "Salad",   
        ],
        [
            // Monday Breakfast
            "Aloo Parantha",
            "Curd",
            "Cornflex",
            "Bread Butter & Jam",
            "Milk",
            "Tea",

        ],
        [
            // Monday Lunch
            "Black Channa",
            "Chappati",
            "Fried Rice",
            "Salad",
            "Raita",
        ],
        [
            // Monday Snacks
            "Aloo Tikki",
            "Tea",
        ],
        [
            // Monday Dinner
            "Aloo Gobhi",
            "Moong Daal",
            "Rice",
            "Chapati",
        ],
        [
            // Tuesday Breakfast
            "Pav Bhaji",
            "Cornflex",
            "Bread Butter & Jam",
            "Tea",
            
        ],
        [
            // Tuesday Lunch
            "Kadhi Pakora",
            "Papad",
            "Rice",
            "Chapati",
            "Salad",
        ],
        [
            // Tuesday Snacks
            "Samosa",
            "Tea"
        ],
        [
            // Tuesday Dinner
            "Aloo Shimla Mirch",
            "Dal Fry",
            "Rice",
            "Chapati",
            "Salad",
        ],
        [
            // Wednesday Breakfast
            "Poha",
            "Cornflex",
            "Bread Butter & Jam",
            "Bread Omelette",
            "Milk",
            "Tea",
        ],
        [
            // Wednesday Lunch
            "Rajma",
            "Rice",
            "Chapati",
            "Salad",
            "Curd",
        ],
        [
            // Wednesday Snacks
            "Sandwich",
            "Tea",
        ],
        [
            // Wednesday Dinner
            "Shahi Paneer / Gravy Chicken",
            "Rice",
            "Dal",
            "Tandoori Roti",
            "Salad",
        ],
        [
            // Thursday Breakfast
            "Chole Bhature",
            "Cornflex",
            "Bread Butter & Jam",
            "Milk",
            "Tea",
        ],
        [
            // Thursday Lunch
            "Matar Paneer",
            "Rice",
            "Chapati",
            "Salad",
            "Curd",
        ],
        [
            // Thursday Snacks
            "Patties",
            "Tea",
        ],
        [
            // Thursday Dinner
            "Chana Masala",
            "Chana Dal",
            "Rice",
            "Chapati",
            "Salad",
        ],
        [
            // Friday Breakfast
            "Aloo Parantha",
            "Cornflex",
            "Bread Butter & Jam",
            "Milk",
            "Tea",
        ],
        [
            // Friday Lunch
            "Dal Makhani",
            "Aloo Jeera",
            "Rice",
            "Chapati",
            "Salad",
            "Lassi"
        ],
        [
            // Friday Snacks
            "Maggi",
            "Tea",
        ],
        [
            // Friday Dinner
            "Egg Curry",
            "Chilli Paneer",
            "Arhar Dal",
            "Rice",
            "Chapati",
            "Salad",
        ],
        [
            // Saturday Breakfast
            "Dosa",
            "Uttapam",
            "Sambar",
            "Cornflex",
            "Bread Butter & Jam",
            "Milk",
            "Tea",
        ],
        [
            // Saturday Lunch
            "Ghiya Chana",
            "Masoor Saboot Dal",
            "Rice",
            "Chapati",
            "Salad",
            "Lassi",
        ],
        [
            // Saturday Snacks
            "Paneer Kulche",
            "Tea",
        ],
        [
            // Saturday Dinner
            "Aloo Matar",
            "Arhar Daal",
            "Rice",
            "Chapati",
            "Salad",
        ],

    ]




const currentMeal = document.getElementById("currentMeal");

const currentMenu = document.getElementById("currentMenu");

currentMeal.textContent = meal[token];

currentMenu.textContent = menu[token];

function nextMeal() {
    if (token === 27)
    {
        token = 0;
        token = token + 1;

        currentMeal.textContent = meal[token];

        currentMenu.textContent = menu[token];

    }
    else
    {
        token = token + 1;
        
        currentMeal.textContent = meal[token];

        currentMenu.textContent = menu[token];

    }
}

function previousMeal() {
    if (token === 0)
    {
        token = 27;
        token = token - 1;

        currentMeal.textContent = meal[token];

        currentMenu.textContent = menu[token];

    }
    else
    {
        token = token - 1;
        
        currentMeal.textContent = meal[token];

        currentMenu.textContent = menu[token];

    }
}




const next = document.getElementById("Next");

next.addEventListener("click", nextMeal);

const previous = document.getElementById("Previous");

previous.addEventListener("click", previousMeal);





















 




