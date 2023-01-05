fetch('http://www.cc.puv.fi/~e2000606/Final_project/fetch_resources/productOrders.json')
      .then((res) => res.json())
      .then(output => { 

var data = output;
for (i in data) {
    var a = document.getElementById("OrderTable");
    var row = a.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell2.innerHTML = data[i].orderid;
    cell3.innerHTML = data[i].customerid;
    cell4.innerHTML = data[i].customer; 
    
    cell2.className = "orderId"; // give orderid cell "orderId" class
    cell1.className = "fa fa-search";
    cell1.value=i; // give value to orderid
}

var x = document.getElementsByClassName("fa fa-search");

for (i = 0; i < x.length; i++) {
    x[i].addEventListener("click", (event) => { //parameter of the function inside of EventListener provide more information about the event occured
        localStorage.setItem("OrderIndex", event.target.value);
        console.log(event.target.value);
        window.location.href = "productDetail.html"
    })
} 

// Find Order
x = document.getElementsByTagName("tr");
function Filter () {
    for (i = 1; i < x.length; i++) {
        if (data[i - 1].orderid.includes(OrderIdReceiver) == true && data[i - 1].customerid.includes(CustomerIdReceiver) == true) {
            document.getElementsByTagName("tr")[i].style.display = "";
        } else {
            document.getElementsByTagName("tr")[i].style.display = "none";
        }
    }  
}

var OrderIdReceiver = "", CustomerIdReceiver = ""; //in order to make these 2 Receiver not be undefined when using includes()

let finder = document.getElementById("OrderIDSearch");
finder.addEventListener("keyup", (e) => {
    OrderIdReceiver = e.target.value; //Receive OrderId input
    Filter();
});

finder = document.getElementById("CustomerIDSearch");
finder.addEventListener("keyup", (event) => {
    CustomerIdReceiver = event.target.value; //Receive CustomerId input
    console.log(CustomerIdReceiver);
    Filter();
}); })