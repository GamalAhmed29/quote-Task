

let quotes = [
  "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "The best way to predict the future is to invent it. - Alan Kay",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "Whether you think you can or you think you can’t, you’re right. - Henry Ford",
  "I have learned over the years that when one's mind is made up, this diminishes fear. - Rosa Parks",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "The harder you work for something, the greater you'll feel when you achieve it. - Anonymous",
  "Dream big and dare to fail. - Norman Vaughan",
  "Don’t wait. The time will never be just right. - Napoleon Hill",
  "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
  "Act as if what you do makes a difference. It does. - William James",
  "The best revenge is massive success. - Frank Sinatra",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "A person who never made a mistake never tried anything new. - Albert Einstein",
  "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
  "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
  "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
  "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
  "In order to be irreplaceable one must always be different. - Coco Chanel",
  "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
];


let lastRandomIndex = -1; 
document.getElementById("button").addEventListener("click", function () {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === lastRandomIndex); 

  let randomQuote = quotes[randomIndex];
  document.querySelector(".my-quote").textContent = randomQuote;

  lastRandomIndex = randomIndex; 
});

document.getElementById("darkThemeBtn").addEventListener("click", function () {
     let currentIcon = this.querySelector("i");
     
     if (currentIcon.classList.contains("fa-toggle-on")) {
       currentIcon.classList.remove("fa-toggle-on");
         currentIcon.classList.add("fa-toggle-off");
          document.documentElement.style.setProperty(
            "--main-color",
            "rgb(10, 21, 47)"
          );
          document.documentElement.style.setProperty(
            "--text-color",
            "rgb(255, 255, 255)"
         );

     } else {
       currentIcon.classList.remove("fa-toggle-off");
         currentIcon.classList.add("fa-toggle-on");
         document.documentElement.style.setProperty(
           "--main-color",
           "rgb(248, 249, 250)"
         );
         document.documentElement.style.setProperty(
           "--text-color",
           "rgb(10, 21, 47)"
         );
         
    }
    

});
