# Electric picking list
## User story and requirements
We have a middle-sized wholesaler, who sells spareparts for machines.

Their customers are ordering the spareparts via web shop, which is integrated into the shop ordering system.

Order has following information: order id, customer id, customer name, invoicing address, delivery address, delivery date, responsible sales person, free comments, total price and list of ordered products.

Product has following information: code, name, description, supplier code, quantity, unit price and shelf position.

In current situation, customer prints order in PDF-format from the order system. This paper is used in collecting ordered products from the warehouse.

SO customer opens the ordering system, finds the order (there are different search criterias, for example customer number, order id, delivery date etc). After opening the order, he prints the PDF and starts collecting the products.

During the collection customer marks to paper which products he has picked, and giving comments for products.

After all products have been picked, customer sends the products to their customer, and adds this PDF (which has lots of these internal markings done) into the packet. There are always questions from foreign customers, what does this and that marking mean.

Now the customer wants to start a new decade and get rid of the printed papers and pens. He contacts you and wants to start a cooperation with your team.

Customer has desided to purchase a tablet into warehouse. With that tablet they want to use our application for product picking. Still user needs to be able to search orders with different criterias, and once opening order to see what has been ordered. Users needs to be able to mark each product as picked and/or write comments on ordered products.

After all products have been picked, user needs to be able to mark the whole order as ”ready”. He also needs to be able to print a clean packing list to be sent with the products. Marking the order as ready is important so that sales person sees the status and can answer customer questions.

Our application needs to be secure, so login into the application is required.
## Demo link and instruction
_**Demo link:** http://www.cc.puv.fi/~e2000606/Final_project/login.html_

**Instruction:** The login credentials are provided in fetch_resources/user.json. You can search and select a product in a list in product.html page. Then, in productDetail.html page, you can check and comment any product you have collected. After checking all products, you can click "Ready" button to print the product details (with comments).
## Demo data
You can view data in JSON format in the fetch_resources directory.
## Note for the source code
This source code above is a little bit different from the one me and my classmates have made during our studies. However, I just change the link to JSON data (for fetching), CSS and JavaScript files as well as rearrange project structure. All other features written by me and my classmates are kept the same.
