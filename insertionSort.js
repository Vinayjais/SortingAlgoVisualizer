

async function insertionSort(delay = 600){

  let bars = document.querySelectorAll(".bar");
   bars[0].style.backgroundColor = 'green';

   for( var i=1; i<bars.length; i++){

    var j = i - 1;

         var key = parseInt(bars[i].childNodes[0].innerHTML);

         var height = bars[i].style.height;

         var barValue = document.getElementById("ele");

         barValue.innerHTML = `<h3> Element Selected is : ${key} </h3>`;
              
           // selected eleemnt***************
         bars[i].style.backgroundColor = "yellow";
         

         await new Promise((resolve) => 
          setTimeout(() => {
            resolve();
          },600)
         );
  
         while( j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key){
          bars[j].style.backgroundColor = ' red';
            bars[ j + 1].style.height = bars[j].style.height;
            bars[j + 1].childNodes[0].innerHTML = bars[j].childNodes[0].innerHTML;

            j = j - 1;
            await new Promise((resolve) => 
            setTimeout(() => {
              resolve();
            },600)
            );

            for(var k=i; k>=0 ; k--){
              bars[k].style.backgroundColor = "green";
            }
         }

         bars[j + 1 ].style.height = height;
         bars[ j + 1].childNodes[0].innerHTML = key;

         await new Promise((resolve) => 
          setTimeout(() => {
            resolve();
          },600)
         );

         bars[i].style.backgroundColor = "green";
        
   

   }
   
   barValue.innerHTML = `<h3> Array Sorted </h3>`;
  

}