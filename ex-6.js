const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  let message = "";
  if (!carCollection.includes(carBrand)) {
    carCollection.push(carBrand);
    message = "new car collection is : " + carCollection + ".";
  } else {
    message =
      carBrand +
      " has already existed in position  " +
      (carCollection.indexOf(carBrand) + 1) +
      " of the car collection.";
  }
  return message;
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.
