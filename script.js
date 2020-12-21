let input = document.getElementById('getList');
let addbtn = document.getElementById('form');
let table = document.getElementById('table');
let dbtn = document.getElementById('deletebtn');
let shoList = document.getElementById('showList');

for(let i=0 ; i < localStorage.length ; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    const index = i+1;
    const block = document.createElement("tr");
    const indexBlockS = "<td>"+index+"</td>";
    const tasks = "<td>"+value+"</td>";
    const deletebtn = "<td><button onclick='deletefn("+key+")'>X</button></td>";
    block.insertAdjacentHTML("beforeend",indexBlockS);
    block.insertAdjacentHTML("beforeend",tasks);
    block.insertAdjacentHTML("beforeend",deletebtn);
    table.appendChild(block);
}
if(localStorage.length == 0){
    document.getElementById('heading').className = 'none';
    shoList.insertAdjacentHTML('afterbegin','<h2>Nothing to show...</h2>');
    
}

function deletefn(e){
    console.log(e);
    localStorage.removeItem(e);
    location.reload();
}


addbtn.addEventListener("submit" , function(e){
    e.preventDefault();
    if(input.value){
        var curr = new Date();
        localStorage.setItem(curr.getTime(),input.value);
    }
    location.reload();
});

