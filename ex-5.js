let crimeRecordNames = ["Theodora Milenko", "Tinashe Benigno", "Mahalia Priyanka", "Maisy Sudhir"];

function searchCrimeRecord(name) {
  if(crimeRecordNames.indexOf(name) > 0){
    return name + " has crime record !!!"
  }else{
    return name + " no crime record"
  }

}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ไม่เคยมีประวัติเกี่ยวกับอาชญากรรม
console.log(searchCrimeRecord("Dilan Sandra")); //"Dilan Sandra has no crime record"

//ในกรณีที่เคยมีประวัติเกี่ยวกับอาชญากรรม
console.log(searchCrimeRecord("Tinashe Benigno")); //"Tinashe Benigno has crime record !!!"