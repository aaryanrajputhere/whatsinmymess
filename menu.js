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



let meal = [
    "Sunday's Breakfast",
    "Sunday's Lunch",
    "Sunday's Snacks",
    "Sunday's Dinner",
    
    "Monday's Breakfast",
    "Monday's Lunch",
    "Monday's Snacks",
    "Monday's Dinner",
    
    "Tuesday's Breakfast",
    "Tuesday's Lunch",
    "Tuesday's Snacks",
    "Tuesday's Dinner",
    
    "Wednesday's Breakfast",
    "Wednesday's Lunch",
    "Wednesday's Snacks",
    "Wednesday's Dinner",
    
    "Thursday's Breakfast",
    "Thursday's Lunch",
    "Thursday's Snacks",
    "Thursday's Dinner",
    
    "Friday's Breakfast",
    "Friday's Lunch",
    "Friday's Snacks",
    "Friday's Dinner",
    
    "Saturday's Breakfast",
    "Saturday's Lunch",
    "Saturday's Snacks",
    "Saturday's Dinner"
  ];
  

let timings =
    [
      //Sunday
      "8:30 a.m. - 10:00 a.m.",
      "1:00 p.m. - 2:30 p.m.",
      "5:15 p.m. - 6:00 p.m.",
      "8:00 p.m. - 9:30 p.m.",
  
      //Monday
      "7:45 a.m. - 9:00 a.m.",
      "12:30 p.m. - 2:00 p.m.",
      "5:15 p.m. - 6:00 p.m.",
      "8:00 p.m. - 9:30 p.m.",
  
      //Tuesday
      "7:45 a.m. - 9:00 a.m.",
      "12:30 p.m. - 2:00 p.m.",
      "5:15 p.m. - 6:00 p.m.",
      "8:00 p.m. - 9:30 p.m.",
  
      //Wednesday
      "7:45 a.m. - 9:00 a.m.",
      "12:30 p.m. - 2:00 p.m.",
      "5:15 p.m. - 6:00 p.m.",
      "8:00 p.m. - 9:30 p.m.",
  
      //Thursday
      "7:45 a.m. - 9:00 a.m.",
      "12:30 p.m. - 2:00 p.m.",
      "5:15 p.m. - 6:00 p.m.",
      "8:00 p.m. - 9:30 p.m.",
  
      //Friday
      "7:45 a.m. - 9:00 a.m.",
      "12:30 p.m. - 2:00 p.m.",
      "5:15 p.m. - 6:00 p.m.",
      "8:00 p.m. - 9:30 p.m.",
  
      //Saturday
      "8:30 a.m. - 10:00 a.m.",
      "1:00 p.m. - 2:30 p.m.",
      "5:15 p.m. - 6:00 p.m.",
      "8:00 p.m. - 9:30 p.m.",
  
    ];

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
            "Mater Masroom",
            "Dal",
            "Rice",
            "Chapati",
            "Raita",
            "Salad",
            "Lassi"
        ],
        [
            // Sunday Snacks
            "Sandwich",
            "Tea",
        ],
        [
            // Sunday Dinner
            "Kadhai Paneer / Chicken",
            "Dal",
            "Rice",
            "Rumali Roti",
            "Salad",
            "Ladoo"

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
            "Lassi"
        ],
        [
            // Monday Snacks
            "Burger",
            "Tea",
        ],
        [
            // Monday Dinner
            "Mix Veg",
            "Moong Daal",
            "Rice",
            "Chapati",
            "Salad",
            "Kulfi",
        ],
        [
            // Tuesday Breakfast
            "Banana Milk",
            "Cornflex",
            "Bread Butter & Jam",
            "Milk",
            "Tea",
            
        ],
        [
            // Tuesday Lunch
            "Kadhi Pakora",
            "Papad",
            "Rice",
            "Chapati",
            "Salad",
            "Lassi"
        ],
        [
            // Tuesday Snacks
            "Fruit Chat",
            "Tea"
        ],
        [
            // Tuesday Dinner
            "Manchurian",
            "Dal Fry",
            "Rice",
            "Chapati",
            "Salad",
            "Halwa",
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
            "Lassi"
        ],
        [
            // Wednesday Snacks
            "Spring Roll",
            "Tea",
        ],
        [
            // Wednesday Dinner
            "Shahi Paneer / Gravy Chicken",
            "Rice",
            "Dal",
            "Butter Naan",
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
            "Lassi"
        ],
        [
            // Thursday Snacks
            "Samosa",
            "Tea",
        ],
        [
            // Thursday Dinner
            "Chana Masala",
            "Chana Dal",
            "Rice",
            "Chapati",
            "Salad",
            "Custard",
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
            "Egg Curry / Chilli Paneer",
            "Arhar Dal",
            "Rice",
            "Chapati",
            "Salad",
            "Ice Cream"
        ],
        [
            // Saturday Breakfast
            "Dosa",
            "Uttapam",
            "Sambhar",
            "Cornflex",
            "Bread Butter & Jam",
            "Milk",
            "Tea",
        ],
        [
            // Saturday Lunch
            "Rajma",
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
            "Kheer",
        ],

    ]

const currentMeal = document.getElementById("currentMeal");

const currentTiming = document.getElementById("currentTiming");



const menuLength = menu[token].length;

console.log(menuLength)

function fillMenu() {
    currentMeal.textContent = meal[token];
    currentTiming.textContent = timings[token];
    console.log(menu[token]);

    var menuContainer = document.getElementById("menuContainer"); 

    for (var dishIndex in menu[token]) {
        

        var dishElement = document.createElement("h3");
        dishElement.id = "dish" + dishIndex;
        dishElement.innerHTML = menu[token][dishIndex];

        menuContainer.appendChild(dishElement); 
    }
}

function delMenu() {
    
    var menuContainer = document.getElementById("menuContainer"); 

    for (var dishIndex in menu[token]) {
       
        tagName = "dish" + dishIndex;
        var dishElement = document.getElementById(tagName);
        
        
        dishElement.remove();
    }
}

fillMenu();

function nextMeal() {

    delMenu();
    
    if (token === 27)
    {
        token = 0;
        token = token + 1;
        
        fillMenu();
    }
    else
    {
        token = token + 1;
        
        fillMenu();
    }
}

function previousMeal() {
    
    delMenu();
    if (token === 0)
    {
        token = 27;
        token = token - 1;
        
        fillMenu();
    }
    else
    {
        token = token - 1;
        
        fillMenu();
    }
}

const next = document.getElementById("Next");

next.addEventListener("click", nextMeal);

const previous = document.getElementById("Previous");

previous.addEventListener("click", previousMeal);




