document.addEventListener("DOMContentLoaded", function(){
    
    
    // menu
    
    var hide = document.querySelectorAll(".hide");
    var about = document.querySelector(".about");
    
    
    about.addEventListener("mouseover", function(event) {  
        for (var i=0; i<hide.length; i++) {
            hide[i].style.display = "block";
        }
    });
    
    about.addEventListener("mouseout", function(event) {  
        for (var i=0; i<hide.length; i++) {
            hide[i].style.display = "none";
        }
    });
    
    var imageBox = document.querySelectorAll(".image-box");
    
    for (var i=0; i<imageBox.length; i++) {   
        imageBox[i].addEventListener("mouseover", function(event) {
            for (var i=0; i<this.children.length; i++) {
                this.children[i].style.display = "none";
            }
        });
    }
    
    for (var i=0; i<imageBox.length; i++) {   
        imageBox[i].addEventListener("mouseout", function(event) {
            for (var i=0; i<this.children.length; i++) {
                this.children[i].style.display = "inline-block";
            }
        });
    }
    
    
    // slider section1
    
    var prev = document.querySelector(".left");
    var next = document.querySelector(".right");
    var textSection1 = document.querySelector(".text-section1");
    var image = document.querySelectorAll(".image");

    var image2 = document.createElement("div");
    image2.classList.add("image");
    image2.style.backgroundImage = "url(./images/orange.png)";
    image2.style.backgroundSize = "108%";
    image2.style.backgroundPosition= "-25px 118px";
    image2.style.display = "none";
    textSection1.parentElement.insertBefore(image2, textSection1);
    
    var image3 = document.createElement("div");
    image3.classList.add("image");
    image3.style.backgroundImage = "url(./images/red.png)";
    image3.style.backgroundSize = "115%";
    image3.style.backgroundPosition= "-40px 85px";
    image3.style.display = "none";
    textSection1.parentElement.insertBefore(image3, textSection1);
        
    
    index = 0;
    image = document.querySelectorAll(".image");
    
    prev.addEventListener("click", function(event) {
       for (var i=0; i<image.length; i++) {
           image[i].style.display="none";
       };
        index -= 1;
        if (index<0){
            index=0
        };
        image[index].style.display="inline-block";
    });

    next.addEventListener("click", function(event) {
       for (var i=0; i<image.length; i++) {
           image[i].style.display="none";
       };
        index += 1;
        if (index>=image.length){
            index=image.length-1;
        };
        image[index].style.display="inline-block";
    });
    
    
    
     // form application - compose your chair - drop down lists & price
    
    var listPanels = document.querySelectorAll(".list_panel");
    var listLabel = document.querySelectorAll(".list_label");
    var listArrow = document.querySelectorAll(".list_arrow");
    
    var title = document.querySelector(".title");
    var color = document.querySelector(".color");
    var pattern = document.querySelector(".pattern");
    var titleValue = document.querySelector(".title.value");
    var colorValue = document.querySelector(".color.value");
    var patternValue = document.querySelector(".pattern.value");
    var sum = 0;
    var titlePrice = 0;
    var colorPrice = 0;
    var patternPrice = 0;
    var sumLabel = document.querySelector(".sum_label");
    var sumDiv = document.querySelector(".sum");

    
    for (var i=0; i<listArrow.length; i++) { //show and hide dropdown (ul)
        listArrow[i].addEventListener("click", function(event) {
                if (this.nextElementSibling.hasAttribute("style") === false) {
                    this.nextElementSibling.style.display = "block";
                } else {
                    this.nextElementSibling.removeAttribute("style");
                }
            
            var dropDownOptions = this.nextElementSibling.children;

            for (var j=0; j<dropDownOptions.length; j++) { 
                dropDownOptions[j].addEventListener("click", function(event) {
                    this.parentElement.previousElementSibling.previousElementSibling.innerHTML = this.innerHTML;
                    this.parentElement.previousElementSibling.previousElementSibling.style.color = "gray";
                    
                    
                    if (this.parentElement.previousElementSibling === listArrow[0]) {
                        title.innerHTML = "Chair " + this.innerHTML;
                        if (this.innerHTML === "Clair") {
                            titleValue.innerHTML = 200;
                            titlePrice = 200;
                        } else if (this.innerHTML === "Margarita") {
                            titleValue.innerHTML = 250;
                            titlePrice = 250;
                        } else if (this.innerHTML === "Selena") {
                            titleValue.innerHTML = 300;
                            titlePrice = 300;
                        };
                    } else if (this.parentElement.previousElementSibling === listArrow[1]) {
                        color.innerHTML = this.innerHTML;
                        colorValue.innerHTML = 0;
                        colorPrice = 0;
                    } else if (this.parentElement.previousElementSibling === listArrow[2]) {
                        pattern.innerHTML = this.innerHTML;
                        if (this.innerHTML === "Tkanina") {
                            patternValue.innerHTML = 0;
                            patternPrice = 0;
                        } else if (this.innerHTML === "Skóra") {
                            patternValue.innerHTML = 50;
                            patternPrice = 50;
                        };
                    };
                    
                    sum = titlePrice + patternPrice + transportPrice;
                    sumDiv.innerHTML = sum;

                });
            };
            
        });
        
    };
    
    
    // form application - compose your chair - checkbox
    
    var checkbox = document.querySelector(".checkbox");
    var checkboxInput = document.querySelector(".checkbox input");
    
    var transport = document.querySelector(".transport");
    var transportValue = document.querySelector(".transport.value");
    var transportPrice = 0;
    
    checkbox.addEventListener("click", function(event) {
        
        
        if (checkboxInput.checked === true) {
            checkbox.style.backgroundImage = "url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20preserveAspectRatio%3D%22xMidYMid%22%20width%3D%2233.875%22%20height%3D%2233%22%20viewBox%3D%220%200%2033.875%2033%22%3E%0A%20%20%3Cpath%20d%3D%22M9.470%2C15.209%20L14.061%2C24.104%20C14.061%2C24.104%2021.522%2C6.026%2033.287%2C-0.000%20C33.000%2C4.304%2031.852%2C8.035%2033.861%2C12.626%20C28.696%2C13.774%2018.078%2C26.687%2014.635%2C33.000%20C9.756%2C26.974%204.017%2C22.382%20-0.000%2C20.948%20L9.470%2C15.209%20Z%22%20fill%3D%22%2326c7a9%22/%3E%0A%3C/svg%3E%0A)"; 
            checkbox.style.backgroundSize = "20px";
            checkbox.style.backgroundRepeat = "no-repeat";
            checkbox.style.backgroundPosition = "center";
            transport.innerHTML = "Transport";
            transportValue.innerHTML = 80; 
            transportPrice = 80;
        } else {
            checkbox.removeAttribute("style");
            transport.innerHTML = "";
            transportValue.innerHTML = "";
            transportPrice = 0;
        };
        
        sum = titlePrice + patternPrice + transportPrice;
        sumDiv.innerHTML = sum;
        
    });
    
    
    
    
});