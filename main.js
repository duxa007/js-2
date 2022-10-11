// function fun1() {
//     let sel = document.getElementById('mySelect').selectedIndex;
//     let options = document.getElementById('mySelect').options;
//     alert('выбрана опция ' +options[sel].text);
// }
function fun1() {
    let rng=document.getElementById('r1');
    let p=document.getElementById('one');
    p.innerHTML=rng.value;
}