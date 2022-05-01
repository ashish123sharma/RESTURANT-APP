import navbar from "../nav/nav.js";

document.getElementById("navbar").innerHTML = navbar();


let read = (id) => {
    return document.getElementById(id).value
}
let creat = (id) => {
    return document.createElement(id);
}
let get = (id) => {
    return document.getElementById(id);

}

get("daily").addEventListener("click", daily)

async function daily() {
    event.preventDefault()
    try {
        //    const q = read("query");
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`);
        const data = await res.json();
        // console.log(data);
           append(data.meals);

    }


    catch (err) {
        console.log(err);

    }
};


function append(data) {

    console.log(data);

    get("container").innerHTML=null


    data.forEach((el) => {
        console.log(el);

        let div = creat('div');

        var img1 = creat('img');
        img1.src = el.strMealThumb;
        var p = creat("h4");
        p.innerText = el.strMeal;
        var h3 = creat('p');
         h3.innerText=el.strInstructions

        div.append(img1, p,h3);
        get("container").append(div);





    })
}



