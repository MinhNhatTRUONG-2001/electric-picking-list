fetch('http://www.cc.puv.fi/~e2000606/Final_project/fetch_resources/productOrders.json')
      .then((res) => res.json())
      .then(output => {

        var data = output;
        //Get the chosen order data
        var index = localStorage.getItem("OrderIndex");
        console.log(index);
        var detail = data[index];

        //Insert order details
        document.getElementById("oid").innerHTML = detail.orderid;
        document.getElementById("cid").innerHTML = detail.customerid;
        document.getElementById("cus").innerHTML = detail.customer;
        document.getElementById("inv").innerHTML = detail.invaddr;
        document.getElementById("del").innerHTML = detail.delivaddr;
        document.getElementById("dat").innerHTML = detail.deliverydate;
        document.getElementById("res").innerHTML = detail.respsalesperson;
        document.getElementById("cmt").innerHTML = detail.comment;
        document.getElementById("tot").innerHTML = detail.totalprice;

        //Create product table
        var table = "<table><tr><th class='checkboxCell'></th><th>Code</th><th>Product</th>" + 
        "<th>Description</th><th>Supplier code</th><th>Quantity</th><th>Unit price</th>" + 
        "<th>Shelf position</th><th id='cmtsHeader'>Comments</th></tr>";
        for (var i in detail.products) {
            table += "<tr><td class='checkboxCell'><input type='checkbox' class='check'></td>" + 
            "<td class='codeValue'>" + detail.products[i].code + "</td><td>" + detail.products[i].product 
            + "</td><td>" + detail.products[i].description + "</td><td>" + detail.products[i].suppliercode 
            + "</td><td>" + detail.products[i].qty + "</td><td>" + detail.products[i].unit_price 
            + "</td><td>" + detail.products[i].shelf_pos + "</td><td class='cmts'> </td></tr>";
        }
        document.getElementById("tableOfProducts").innerHTML = table + "</table>";
      }
      )
      //Add comments function
      function insertComments() {
        var checkObj = document.getElementsByClassName("check");
        var chosenCode = document.getElementById("chosenCode").value;
        var yourCmt = document.getElementById("yourCmt").value;
        var wrongCode = 0;
        for (var i = 0; i < checkObj.length; i++) {
            console.log(document.getElementsByClassName("codeValue")[i].innerHTML);
            if (chosenCode == document.getElementsByClassName("codeValue")[i].innerHTML) {
              document.getElementsByClassName("cmts")[i].innerHTML = yourCmt;
              break;
            } else {
                wrongCode++;
            }
        }
        if (wrongCode == checkObj.length) {
            alert("Cannot find the product code!");
        }
    }
      //You can print the order if you've collected everything (every product has been checked)
      function printOrder() {
        var checkObj = document.getElementsByClassName("check");
        console.log(checkObj);
        var checkCount = 0;
        for (var i = 0; i < checkObj.length; i++) {
            if (checkObj[i].checked == true) {
                checkCount++;
            }
        }
        if (checkCount == checkObj.length) {
          for (var i = 0; i <= checkObj.length; i++) {  
            document.getElementsByClassName("checkboxCell")[i].style.display = "none";  
          }
          document.getElementById("insertComments").style.display = "none";
          document.getElementById("printButton").style.display = "none";
            window.print();
          for (var i = 0; i <= checkObj.length; i++) {
            document.getElementsByClassName("checkboxCell")[i].style.display = "table-cell"; 
          }
          document.getElementById("insertComments").style.display = "block";     
          document.getElementById("printButton").style.display = "inline";
        } else {
            alert("You have not collected all of the products shown in the table!");
        }
    }