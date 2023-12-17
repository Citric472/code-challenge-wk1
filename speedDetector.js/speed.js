// speedDetector.js

function speedDetector(speed) {
    const speedLimit = 70;
    const demeritPointsPer5Km = 1;
  
    if (speed < speedLimit) {
      console.log("Ok");
    } else {
      const demeritPoints = Math.floor((speed - speedLimit) / 5);
      
      if (demeritPoints > 12) {
        console.log("License suspended");
      } else {
        console.log(`Points: ${demeritPoints}`);
      }
    }
  }
  
  // Example usage
  speedDetector(80);
  