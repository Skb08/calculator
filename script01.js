let string = "";
let buttons = document.querySelectorAll('.button');
const btn = document.getElementById('btn');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value = string;
        }
        // else if(e.target.innerHTML == '@'){
        //     // btn.addEventListener('click',function onClick(event){
        //     //     console.log(event.target);
        //     //     event.target.style.backgroundcolor = 'coral';
        //     // });
        //     console.log(e.target);
        //     e.target.style.backgroundcolor = 'coral';
        // }
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});