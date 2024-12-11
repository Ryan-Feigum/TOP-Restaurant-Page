function loadMenuModule() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `<div class="container-fluid">
        
       <table class="table table-responsive">
           <tr style="text-align:center" id="itemName">
               <th colspan="4">Burger and Fries</th>
               <th colspan="4">Hot Dog and Chips</th>
               <th colspan="4">Italian Sausage and Peppers</th>
           </tr>
           <tr style="text-align:center">
               <td colspan="4">An American Classic!</br>
               Your choice - with or without cheese
               Pickle, onion, tomato, and lettuce
               Served with our famous thick cut french fries</br>
               $7.95</td></br>
               <td colspan="4">A Summer Classic!</br>
               Your choice - white or wheat bun
               Relish, mustard, and ketchup
               Served with our house-made chips</br>
               $7.95</td></br>
               <td colspan="4">An All-Time Favorite!!</br>
               Your choice - mild or spicy</br>
               Coleslaw</br>
               Served with garlic mashers</br>
               $10.95</td></br>
           </tr>
           <tr style="text-align:center" id="itemName">
               <th colspan="4">Tenderloin Sandwich and Chips</th>
               <th colspan="4">House Salad</th>
               <th colspan="4">Brisket Sandwich and Fries</th>
           </tr>
           <tr style="text-align:center">
               <td colspan="4">An American Classic!</br>
               Your choice - with or without cheese
               Pickle, oion, tomato, and lettuce
               Served with our famous thick cut french fries</br>
               $7.95</td></br>
               <td colspan="4">An American Classic!</br>
               Your choice - with or without cheese
               Pickle, onion, tomato, and lettuce
               Served with our famous thick cut french fries</br>
               $7.95</td></br>
               <td colspan="4">An American Classic!</br>
               Your choice - with or without cheese
               Pickle, onion, tomato, and lettuce
               Served with our famous thick cut french fries</br>
               $7.95</td></br>
           </tr>
       </table>
       <table id="bevTable" class="table table-responsive">
           <thead>
               <tr>
                   <th colspan="12">Beverages</th>
               </tr>
           </thead>
           <tbody>
               <tr>
                   <td colspan="8" id="bev">Root Beer</td>
                   <td colspan="4" id="price">$3.00</td>
               </tr>
               <tr>
                   <td colspan="8" id="bev">Bottled Water</td>
                   <td colspan="4" id="price">$1.25</td>
               </tr>
               <tr>
                   <td colspan="8" id="bev">Lemonade</td>
                   <td colspan="4" id="price">$1.00</td>
               </tr>
               <tr>
                   <td colspan="8" id="bev">Iced Tea</td>
                   <td colspan="4" id="price">$1.25</td>
               </tr>
           </tbody>
       </table>
        <hr>

        <footer>
            <p style="text-align:center">
                123 2nd St NW, Boulder, CO, 02400<br/>
                555-555-5555
        </footer>
        </div>`;
};

export { loadMenuModule };