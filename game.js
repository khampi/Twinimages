const imgsArr = ['assests/img1.jpeg',
'assests/img2.jpeg',
'assests/img3.jpeg',
'assests/img4.jpeg',
'assests/img14.jpeg',
'assests/img6.jpeg',
'assests/img7.jpeg',
'assests/img8.jpeg',
]


const imgsArr1 = ['assests/img1.jpeg',
'assests/img2.jpeg',
'assests/img3.jpeg',
'assests/img4.jpeg',
'assests/img14.jpeg',
'assests/img6.jpeg',
'assests/img7.jpeg',
'assests/img8.jpeg'
]

// For the 1st half 
function getRandomNonRepeatingIndexes(arrLength) {
    let indexes = Array.from({ length: arrLength }, (_, i) => i);
    
    for (let i = indexes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        
    
        [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
    }
  

    return indexes;
}
const indexes = getRandomNonRepeatingIndexes(imgsArr.length);
console.log(indexes)
k=0;
var images = document.querySelectorAll("#grid-item-back1")
        images.forEach(imgs => {
            imgs.innerHTML = "";
            var img = document.createElement("img");
            img.src = imgsArr[indexes[k++]];
            imgs.appendChild(img);
        });




// For the 2nd half 
function getRandomNonRepeatingIndexes2(arrLength) {
    let indexes1 = Array.from({ length: arrLength }, (_, i) => i);
    
    for (let i = indexes1.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        
    
        [indexes1[i], indexes1[j]] = [indexes1[j], indexes1[i]];
    }
  

    return indexes1;
}

const indexes1 = getRandomNonRepeatingIndexes2(imgsArr1.length);
console.log(indexes1)
l=0;
var images = document.querySelectorAll("#grid-item-back2")
        images.forEach(imgs => {
            imgs.innerHTML = "";
            var img = document.createElement("img");
            img.src = imgsArr1[indexes1[l++]];
            imgs.appendChild(img);
});
c=0;
d=0;
function flipCard(cardnum){
    var element = document.querySelector("#grid-item"+cardnum);
    
    if(element) {
        element.classList.add('flipped');
        c++;
    } 
    else {
        console.error(".grid-item" + cardnum + "' not found.");
    }
    if(c%2!=0){
        d=cardnum;
    }
    

    if(c%2==0){
    if(indexes[(d%8)-1] === indexes1[(cardnum%8)-1]){
        console.log("true");

    }
    else{
        setTimeout(() => {
            // If the flipped cards are not the same, remove the 'flipped' class from both cards after a delay
            var firstCard = document.querySelector("#grid-item" + d);
            var secondCard = document.querySelector("#grid-item" + cardnum);
            if (firstCard && secondCard) {
                firstCard.classList.remove('flipped');
                secondCard.classList.remove('flipped');
                c-=2;
                
            } else {
                console.error("One or both of the cards not found.");
            }
        }, 1000); 
        

        
    }
    if(c==16){
        window.open("gameover.html","_self");
        var score = localstorage.setItem("Score",c);
    }
}
}

//Timer


var sec = 120;
var timer = setInterval(function() {
document.getElementById("timer").innerHTML = sec;
sec--;
if(sec<0){
    clearInterval(timer);
    window.open("gameover.html","_self");
}
},1000);  




