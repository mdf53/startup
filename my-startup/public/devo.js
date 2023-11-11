
//Build to so that you can use HTML inserts to add the new quotes daily.

const dailyContent = [
    {
        quote: "And it came to pass that I, Nephi, said unto my father: I will go and do the things which the Lord hath commanded, for I know that the Lord giveth no commandments unto the children of men, save he shall prepare a way for them that they may accomplish the thing which he commandeth them.",
        citation: "The Book of Mormon: 1 Nephi 3:7",
        religion: "Church of Jesus Christ of Latter-Day Saints",
        image: "images/LDS.png"

    },
    {
        
      quote: "No one will reap except what they sow.",
      citation: "Quran 6:164",
      religion: "Islam",
      image: "images/islam.png"

    },
    {
        
        quote: "Let all your things be done with charity",
        citation: "The Bible: 1 Corinthians 16:14",
        religion: "Christianity",
        image: "images/christianity.png"
  
      },
    
    {
        quote: "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.",
        citation: "The Bible: Matthew 6:33",
        religion: "Christianity",
        image: "images/christianity.png"

    }
    // Add objects for subsequent days here
  ];


  function updateDailyText() {
    console.log("Function called");
// Get the current date
    const currentDate = new Date();
    
    // Calculate the day of the year (from 0 to 365)
    const dayOfYear = Math.floor(
        (currentDate - new Date(currentDate.getFullYear(), 0, 0)) / 86400000
    );

    //Using day of the year, modulo it so it's an index in your array.
    const dayIndex = dayOfYear % dailyContent.length; 
    const todayQuote = dailyContent[dayIndex].quote;
    const todayCitation = dailyContent[dayIndex].citation;
    const todayReligion = dailyContent[dayIndex].religion;
    const todayImage = dailyContent[dayIndex].image;


    document.getElementById("quote").textContent = todayQuote;
    document.getElementById("citation").textContent = `- ${todayCitation}`;
    document.getElementById("religion").textContent = todayReligion;
    document.getElementById("dailyImage").src = todayImage;
    
  }



// import { checkboxes } from './religions.js'; 

// function checkListType(obj) {
//   return typeof obj === "object" && obj !== null && !Array.isArray(obj);
// }

// // Custom function to filter a NodeList of checkboxes
// function customFilter(checkboxes) {
//   const selectedReligions = [];

//   checkboxes.forEach(checkbox => {
//     if (checkbox.checked) {
//       // Extract the religion name from the checkbox's data attribute
//       const religionName = checkbox.dataset.religion;
//       if (religionName) {
//         selectedReligions.push(religionName);
//       }
//     }
//   });

//   return selectedReligions;
// }


// function updateDailyText() {
//   // Get the current date
//   const currentDate = new Date();

//   // Calculate the day of the year (from 0 to 365)
//   const dayOfYear = Math.floor(
//       (currentDate - new Date(currentDate.getFullYear(), 0, 0)) / 86400000
//   );

//   // Using day of the year, modulo it so it's an index in your array.
//   const dayIndex = dayOfYear % dailyContent.length;
  
//   const selectedReligions = customFilter(checkboxes);

//   // Filter the daily content based on selected religions
//   const filteredContent = dailyContent.filter(entry => selectedReligions.includes(entry.religion));
  
//   // Display the content
//   if (filteredContent.length > 0) {
//       const todayQuote = filteredContent[dayIndex].quote;
//       const todayCitation = filteredContent[dayIndex].citation;
//       const todayReligion = filteredContent[dayIndex].religion;
//       const todayImage = filteredContent[dayIndex].image;

//       document.getElementById("quote").textContent = todayQuote;
//       document.getElementById("citation").textContent = `- ${todayCitation}`;
//       document.getElementById("religion").textContent = todayReligion;
//       document.getElementById("dailyImage").src = todayImage;
//   } else {
//       // Handle the case when no content is available for the selected religions
//       document.getElementById("quote").textContent = "No content available for the selected religions.";
//       document.getElementById("citation").textContent = "";
//       document.getElementById("religion").textContent = "";
//       document.getElementById("dailyImage").src = ""; // You can set a default image or leave it empty
//   }
// }

window.addEventListener('load', updateDailyText);

  
  // Update the text every day at midnight (in milliseconds)
  const millisecondsInADay = 24 * 60 * 60 * 1000;
  setInterval(updateDailyText, millisecondsInADay);
  