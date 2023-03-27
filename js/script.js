window.addEventListener("load", function(){
    const h1 = document.querySelector("h1");

    const flavors = ["Vanilla", "Pistachio", "Mango", "Cheescake", "coffee"]
    flavors.forEach(function(flavor){
        const p = document.createElement("p");
        p.append(flavor);
        h1.after(p);
        
    });
});






















