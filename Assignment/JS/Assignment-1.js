// // Conditional and Loops
// // Question-1

// let unit = 150;
// let bill = 0;
// if(unit >= 50){
//     bill = (50*20);
//     unit -= 50;
// }   else{
//     bill = (20*unit);
//     unit = 0;
// }
// if(unit >= 100){
//     bill += (50*25);
//     unit -= 50;
// }   else{
//     bill += (25*unit);
//     unit = 0;
// }
// if(unit >= 200){
//     bill += (100*30);
//     unit -= 100;
// }   else{
//     bill += (30*unit);
//     unit = 0;
// }
// bill += (35*unit);
// console.log("Bill is : $" + (bill/100));


// // Question-6
// let result = "";
// let n = 5;
// for(let i=1; i<=5; i++){
//     for(let j=1; j<=i; j++){
//         result += (j+" ");
//     }
//     result += "\n";
// }
// console.log(result);

// Question-11

// const stations = ["San Francisco","22nd Street","Bayshore","South San Francisco","San Bruno","Millbrae Transit Center","Broadway Weekend only","Burlingame","San Mateo","Hayward Park","Hillsdale","Belmont","San Carlos","Redwood City","Menlo Park","Palo Alto","Stanford","California Ave.","San Antonio","Mountain View","Sunnyvale","Lawrence","Santa Clara","College Park","San Jose Diridon"];

// const firstStations = ["San Francisco","22nd Street","Bayshore","South San Francisco","San Bruno"];
// const secondStations = ["Millbrae Transit Center","Broadway Weekend only","Burlingame","San Mateo","Hayward Park","Hillsdale","Belmont","San Carlos","Redwood City"];
// const thirdStations = ["Menlo Park","Palo Alto","Stanford","California Ave.","San Antonio","Mountain View","Sunnyvale"];
// const fourthStations = ["Lawrence","Santa Clara","College Park","San Jose Diridon"];
// // part - a  -->
// stations.push("Tamein");
// console.log(stations);








const sum = (...x) => x.reduce((sum, num) => sum + num, 0);
console.log(sum(1,2,3,4,5));
