function getDetails(){
    let xhttp = new XMLHttpRequest();
    let div = document.getElementById("userData");
    xhttp.onreadystatechange=function(){
        if(this.status == 200 && this.readystate == 4){
            let data = JSON.parse(xhttp.responseText);
            console.log(data);
            //data.forEach(ele => {
            //console.log(ele.name + " :: "+ ele.email);
            //div.innerHTML += `<b>${ele.name}</b>
            //    ::
            //    Email : ${ele.email}
            //    <br>`
            //});
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/users",false)
    xhttp.send()
}

getDetails();