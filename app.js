var damage_number = 0;

// Damage and Catchphrase function
function hero_name(catchphrase, damage) {
    var hero_name = document.createElement("div");
    hero_name.innerHTML=catchphrase;
    // hero_name.addEventListener("click", function () {
    //     increase_damage(damage);
    // })
    increase_damage(damage);
    document.body.querySelector(".main").appendChild(hero_name);

}

//Calculating total damage function
function increase_damage(val) {
    damage_number = damage_number+val;
    document.body.querySelector(".damage").innerHTML="Total Damage = "+damage_number;
}

// Dispaly Catch phrase and total damage
document.body.querySelector(".clicker").addEventListener("click", function () {
    document.body.querySelector(".main").innerHTML="";
    hero_name("Avengers Assemble!!!!!", 20)
})

document.body.querySelector(".clicker2").addEventListener("click", function () {
    document.body.querySelector(".main").innerHTML="";
    hero_name("I am Iron Man!!!!", 30);
})

document.body.querySelector(".clicker3").addEventListener("click", function () {
    document.body.querySelector(".main").innerHTML="";
    hero_name("This Would Be A Cool Way To Die!!!!", 15);
})

document.body.querySelector(".clicker4").addEventListener("click", function () {
    document.body.querySelector(".main").innerHTML="";
    hero_name("You Took Everything From Me!!!!!!!!!!!", 40);
})

// Reset to clear both catch phrase and total damage
document.body.querySelector(".clicker5").addEventListener("click", function () {
    document.body.querySelector(".main").innerHTML="";
    document.body.querySelector(".damage").innerHTML="Total Damage = 0";
    damage_number = 0;
})