   //  Arrays 

   const myArray = [0, 1, 2, 3, 4, 5 ];
   const MyHeros = ['Batman', 'Superman', 'Spiderman', 'Iron Man', 'Hulk', 'Wolverine', 'Captain America', 'Thor', 'Black Widow', 'Hawkeye'];

   const myArray2 = new Array(1, 2, 3, 4, 5, 6 );


   //console.log(myArray[0]);
   

   // Arraay methods

   //myArray.push(6);
   //myArray.push(7);
   //myArray.pop();

  // myArray.unshift(9);
  // myArray.shift();

  //console.log(myArray.includes(6));
  //console.log(myArray.indexOf(3));
  

  //const newArray = myArray.join();
   //console.log(myArray);
  // console.log(newArray);
   

  // Slice , splice

  console.log("A", myArray);
  
  const myn1 = myArray.slice(1 , 3);

  console.log(myn1);
  console.log("B", myArray);

  const myn2 = myArray.splice(1, 3);
  console.log("c", myArray);
  console.log(myn2);

  