console.log("AJAX Tutorial in one view");

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHanlder)

function buttonClickHanlder() {
    console.log("button clicked")
    // Instantiate xhr object
    const xhr = new XMLHttpRequest();

    //Open the xhr Object
    //xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    //Use this one for POST Request
    xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create', true);
    xhr,getResponseHedear = ('Content-type','application/json');


    //what to do on progress (optional)
    xhr.onprogress = function(){
        console.log("On process")
    }

    //ready state function
    xhr.onreadystatechange = function(){
        console.log("Ready State is ", xhr.readyState)
    }
    //What to do when response is ready
    xhr.onload = function(){
        console.log(this.responseText)
    }

    //send Request
    params = '"name":"test","salary":"123","age":"23"';
    xhr.send(params);

    console.log("we are done!!")
}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHanlder)

function popHanlder() {
    console.log("Populate clicked")
    // Instantiate xhr object
    const xhr = new XMLHttpRequest();

    //Open the xhr Object
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    //What to do when response is ready
    xhr.onload = function(){
        let obj = JSON.parse(this.responseText)
        console.log(obj)
        let list = document.getElementById("list");
        str = "";
        for (key in obj)
        // console.log(key)
        {
            str += `<li>${obj[key].title}</li>`;
        }
        list.innerHTML = str;
    }

    //send Request
    xhr.send();
    console.log("we are done fetching employess!!")
}



