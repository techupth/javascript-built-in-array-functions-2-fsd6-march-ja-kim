const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  let newCar;
  const check = carCollection.filter((item) => {
    return item == carBrand;
  });
  if (check.length == 0) {
    newCar = "New car collection is: " + carCollection.concat(carBrand);
  } else {
    newCar = `${carBrand} already exists in position ${
      carCollection.indexOf(carBrand) + 1
    } of the car collection.`;
  }
  return newCar;
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.
