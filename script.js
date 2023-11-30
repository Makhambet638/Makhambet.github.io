<<<<<<< HEAD
function evenNum(){
    const numbers = [];
    for(let i = 0; i <= 10; i++){
        if(i % 2 === 0){
        numbers.push(i);
        }
    }
  return numbers;
}

const numbers1 = evenNum();
console.log(numbers1)



max = () => {
    let min = Math.min.apply(null,numbers1);
    console.log('min number')
    let max = Math.max.apply(null,numbers1);
    return [min,max];
}
console.log(max());




for(let i = 9; i >= 0; i--){
    let row='';
    for(let j = 0; j <= 10; j++){
        const number = i * 10 + j;
        row += `${number}\t`;
        
    }
    console.log(row)
}


v = (a,b) => {
    for(let i = a; i<= b; i++){
        console.log(`the current number of i is: ${i}`)
        let s = '';
        for( let j = a; j <= b; j++){
            const product = i*j;
            s += `${i}*${j} = ${product}\t`;
        }
        console.log(s);
    }
}
v(1,10);



const adae = [22,30,23,29];
const even_numbers = adae.filter(i => i % 2 === 0);
console.log(even_numbers);

const awfdafa = [21,999,0,2];
const lets__go = awfdafa.map(i => i * 2);
console.log(lets__go);

const students = [
      {aaa:'Maha', grade:100},
      {aaa:'Petrov', grade:22},
      {aaa:'ddd', grade:111},
      {aaa: 'dwawda', grade:112}
]

const ddd = students.filter(students => students.grade >= 90)
console.log(ddd)



const ada = [2,3,4,5,6];

sss = () =>{
    let xxx = Math.min.apply(null, ada)
    let ccc = Math.max.apply(null, ada)
    return [xxx,ccc]
}

console.log(sss());

document.querySelector

=======
>>>>>>> c459469 (Your commit message here)
document.getElementById('submit').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'flex';
    document.body.classList.add('no-scroll');
})

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'none';
    document.body.classList.remove('no-scroll');
})
<<<<<<< HEAD
=======

const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = 'nav-close.svg'
    } else {
        navBtnImg.src = 'nav-open.svg'
    }
}

>>>>>>> c459469 (Your commit message here)
