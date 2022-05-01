import navbar  from "../nav/nav.js";

document.getElementById("navbar").innerHTML=navbar();

// helper

let read=(id)=>{
    return document.getElementById(id).value
 }
 let creat=(id)=>{
     return document.createElement(id);
 }
 let get=(id)=>{
 return document.getElementById(id);
 
 }

 get("btn1").addEventListener("click",food)



  let mealsday = get("daily").addEventListener("click",food);
  

//  www.themealdb.com/api/json/v1/1/search.php?s=chicken

 async function food(){

 try{
    const q = read("query");
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`);
    const data = await res.json();
    // console.log(data);
    append(data.meals);

 }


 catch(err){
     console.log(err);

 }
};


function append(data){
    get("container").innerHTML=null;
    // console.log(data);


    data.forEach((el)=>{
     
        // console.log(el);
    //   get("container").style.backgroundColor="red";
    //   get("query").style.display="block";
    let div = creat('div');
   

    var img1 = creat('img');
    img1.src=el.strMealThumb;
    img1.style.height="350px"
    img1.style.weight="350px"
   var p = creat("h4");
      p.innerText =el.strMeal;

      div.append(img1,p);
      get("container").append(div);


      


    })
}



// get("daily").addEventListener("click", daily)

// async function daily() {
//     try {
//         //    const q = read("query");
//         const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`);
//         const data = await res.json();
//         // console.log(data);
//            append(data.meals);

//     }


//     catch (err) {
//         console.log(err);

//     }
// };


// function append(data) {

//     console.log(data);


//     data.forEach((el) => {
//         console.log(el);

//         let div = creat('div');

//         var img1 = creat('img');
//         img1.src = el.strMealThumb;
//         var p = creat("h4");
//         p.innerText = el.strMeal;
//         var h3 = creat('p');
//          h3.innerText=el.strInstructions

//         div.append(img1, p,h3);
//         get("container").append(div);





//     })
// }




       








