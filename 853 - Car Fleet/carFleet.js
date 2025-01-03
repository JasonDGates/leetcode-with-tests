// Implementation of Car Fleet
export function carFleet(target, position, speed) {
    const n = position.length;
    const cars = position.map((pos, i) => [pos, speed[i]]);
  
    // Sort cars by position in descending order
    cars.sort((a, b) => b[0] - a[0]);
  
    let fleets = 0;
    let timeToReach = 0; // Time taken by the current fleet to reach the target
  
    for (let i = 0; i < n; i++) {
      const [pos, spd] = cars[i];
      const time = (target - pos) / spd;
  
      if (time > timeToReach) {
        // This car forms a new fleet
        fleets++;
        timeToReach = time;
      }
    }
  
    return fleets;
  }