

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
            "Nan Chhole",
            "Cornflex",
            "Bread Butter & Jam",
            "Milk",
        ],
        [
            // Sunday Lunch
            "Aloo Matar Sabji",
            "Dal",
            "Rice",
            "Chapati",
            "Curd",
            "Salad",
            "Lassi"
        ],
        [
            // Sunday Snacks
            "Coffee",
        ],
        [
            // Sunday Dinner
            "Kadhai Paneer / Butter Chicken",
            "Dal",
            "Rice",
            "Roti",
            "Salad",
            "Rasmalai"

        ],
        [
            // Monday Breakfast
            "Aloo Parantha",
            "Butter / Curd",
            "Cornflex",
            "Bread Butter & Jam",
            "Milk",
            "Tea",

        ],
        [
            // Monday Lunch
            "Black Channa",
            "Chappati",
            "Rice",
            "Salad",
            "Raita",
            "Lassi"
        ],
        [
            // Monday Snacks
            "Banana Shake",
           
        ],
        [
            // Monday Dinner
            "Mix Veg",
            "Arhar Daal",
            "Rice",
            "Chapati",
            "Salad",
            "Choclate Kulfi",
        ],
        [
            // Tuesday Breakfast
            "Besan Chilla",
            "Cornflex",
            "Bread Butter & Jam",
            "Milk",
            "Tea",
            
        ],
        [
            // Tuesday Lunch
            "Kadhi Pakoda",
            "Papad",
            "Rice",
            "Chapati",
            "Salad",
            "Lassi"
        ],
        [
            // Tuesday Snacks
            "Aloo Tikki",
            "Tea"
        ],
        [
            // Tuesday Dinner
            "Matar Paneer",
            "Dal Fry",
            "Rice",
            "Chapati",
            "Salad",
            "Halwa",
        ],
        [
            // Wednesday Breakfast
            "Poha / Sattu Parantha",
            "Bread Omelette",
            "Cornflex",
            "Bread Butter & Jam",
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
            "Tea",
        ],
        [
            // Wednesday Dinner
            "Shahi Paneer / Gravy Chicken",
            "Rice",
            "Dal",
            "Butter Naan",
            "Salad",
            "Gulab Jamun"
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
            "Soya Chaap",
            "Maa Sabut Daal",
            "Rice",
            "Chapati",
            "Salad",
            "Curd",
            "Lassi"
        ],
        [
            // Thursday Snacks
            "Paneer Kulche",
            "Tea",
        ],
        [
            // Thursday Dinner
            "Chana Masala",
            "Moong Dal",
            "Rice",
            "Chapati",
            "Salad",
            "Custard",
        ],
        [
            // Friday Breakfast
            "Puri",
            "Aloo Sabzi",
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
            "Noodle",
            "Tea",
        ],
        [
            // Friday Dinner
            "Egg Curry / Chilli Paneer",
            "Chilli Souce",
            "Masar Dal",
            "Fried Rice",
            "Chapati",
            "Salad",
            "Ice Cream"
        ],
        [
            // Saturday Breakfast
            "Dosa / Uttapam",
            "Sambhar",
            "Moongfali Chatni",
            "Cornflex",
            "Bread Butter & Jam",
            "Milk",
            "Tea",
        ],
        [
            // Saturday Lunch
            "Rajma",
            "Sambhar",
            "Rice",
            "Chapati",
            "Salad",
            "Lassi",
        ],
        [
            // Saturday Snacks
            "Samosa Chana",
            "Tea",
        ],
        [
            // Saturday Dinner
            "Aloo Tomato Matar",
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
        

        var dishElement = document.createElement("li");
        dishElement.id = "dish" + dishIndex;
        dishElement.innerHTML = menu[token][dishIndex];

        menuContainer.appendChild(dishElement); 

        var line = document.createElement("hr");
        line.id = "line" + dishIndex;
        line.className = "horizontal-line";
        menuContainer.appendChild(line);;
    }
}

function delMenu() {
    
    var menuContainer = document.getElementById("menuContainer"); 

    for (var dishIndex in menu[token]) {
       
        tagName = "dish" + dishIndex;
        var dishElement = document.getElementById(tagName);
        
        var line = document.getElementById("line" + dishIndex)

        line.remove()
        
        dishElement.remove();
    }
}

fillMenu();

function nextMeal() {

    delMenu();
    
    if (token === 27)
    {
        token = 0;       
        
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



