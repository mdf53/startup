//Build to so that you can use HTML inserts to add the new quotes daily.
const dailyContent = [
    {
        quote: "And it came to pass that I, Nephi, said unto my father: I will go and do the things which the Lord hath commanded, for I know that the Lord giveth no commandments unto the children of men, save he shall prepare a way for them that they may accomplish the thing which he commandeth them.",
        citation: "The Book of Mormon: 1 Nephi 3:7",
        religion: "Christianity (Church of Jesus Christ of Latter-Day Saints",
        image: "LDS.png"

    },
    {
        
      quote: "No one will reap except what they sow.",
      citation: "Quran 6:164",
      religion: "Islam",
      image: "islam.png"

    },
    {
        
        quote: "Let all your things be done with charity",
        citation: "The Bible: 1 Corinthians 16:14",
        religion: "Christianity",
        image: "christianity.png"
  
      },
    
    {
        quote: "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.",
        citation: "The Bible: Matthew 6:33",
        religion: "Christianity",
        image: "christianity.png"

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
  
  // Call the updateDailyText function initially
  updateDailyText();
  
  // Update the text every day at midnight (in milliseconds)
  const millisecondsInADay = 24 * 60 * 60 * 1000;
  setInterval(updateDailyText, millisecondsInADay);
  