var form = document.getElementById('addForm');
var itemList = document.getElementById('items');


// Form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

// Edit event
itemList.addEventListener('click', editItem);

// Save event
itemList.addEventListener('click', saveItem);

// Add item
function addItem(e) {
    e.preventDefault();
    
    // Get input value
    var newItem = document.getElementById('item').value;
    var newItem1 = document.getElementById('item1').value;
    var newItem2 = document.getElementById('item2').value;

    var data = {name : item,number:item1, email:item2};
    // var data = document.getElementById('item').value = " ";
    // var newItem1 = document.getElementById('item1').value = " ";
    // var newItem2 = document.getElementById('item2').value = " ";
    
    
    var li1 = document.createElement('li'); 
    // li1.className = 'd-flex justify-content-between';   
    var li2 = document.createElement('li');   
    // li2.className = 'd-flex justify-content-between'; 
    var li3 = document.createElement('li');  
    // li3.className = 'd-flex justify-content-between';
    var li4 = document.createElement('li');  
    var li5 = document.createElement('li');  
    var li6 = document.createElement('li');  
    
    // li4.className = 'd-flex justify-content-between';
    var ul = document.createElement('ul');
    ul.className = 'd-flex justify-content-between';
    ul.style = 'list-style: none;'


    li1.appendChild(document.createTextNode(newItem));
    li2.appendChild(document.createTextNode(newItem1));
    li3.appendChild(document.createTextNode(newItem2));

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    itemList.appendChild(ul)

    // Create del button element
    var deleteBtn = document.createElement('button');
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-center delete';
    deleteBtn.appendChild(document.createTextNode('delete'));
    li4.appendChild(deleteBtn);
    ul.appendChild(li4);

    // Create edit button element
    var editBtn = document.createElement('button');

    editBtn.className = 'btn btn-primary btn-sm float edit';

    editBtn.appendChild(document.createTextNode('edit'));
    li5.appendChild(editBtn);

    ul.appendChild(li5);


    // // // // Create save button element
    // var saveBtn = document.createElement('button');

    // saveBtn.className = 'btn btn-success btn-sm float save';

    // saveBtn.appendChild(document.createTextNode('save'));
    // li6.appendChild(saveBtn);

    // ul.appendChild(li6);


    
}

//Remove item
function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        //if(confirm('Are You Sure?')) {
            var item = e.target.parentElement.parentElement;
            // console.log(item)
            itemList.removeChild(item); 
        //}
    }
}

function editItem(e) {
    if(e.target.classList.contains('edit')) {
        var item1 = e.target.parentElement.parentElement.childNodes;
        // console.log(item1)
        // item1.
        // console.log(item1);
        // 
        var newItem = item1[0].innerText;
        var newItem1 = item1[1].innerText;
        var newItem2 = item1[2].innerText;
        document.getElementById('item').value = newItem;
        document.getElementById('item1').value = newItem1;
        document.getElementById('item2').value = newItem2;
        const saveDetails = document.getElementById('submit')
        saveDetails.value = 'Save';
        saveDetails.addEventListener('click', (e)=>{
            e.preventDefault()
            item1[0].innerText = document.getElementById('item').value
            item1[1].innerText = document.getElementById('item1').value
            item1[2].innerText = document.getElementById('item2').value
            document.getElementById('item').value=''
            document.getElementById('item1').value=''
            document.getElementById('item2').value=''
            saveDetails.value='Submit'
            form.addEventListener('submit', addItem);

        })
    }
}

// // Edit item
// function editItem(e) {
//     const itemList = li.firstElementChils;
//     const input = document.createElement('input');
//     input.type = 'text';
//     input.value = itemList.textContent;
//     li.insertBefore(input, itemList);
//     li.removeChild(itemList);
//     button.textContent = 'save';

   
// }

// function saveItem(e) {
//     if(e.target.classList.contains('save')) {
       
//         const input = li.firstElementChils;
//         const itemList = document.createElement('itemList');
//         itemList.textContent = input.value;
//         li.insertBefore(itemList, input);
//         li.removeChild(input);
//         button.textContent = 'edit';
         
//     }
// }



// var item = e.target.parentElement;
    // var newItem = document.getElementById('item').value;
    // var newItem1 = document.getElementById('item1').value;
    // var newItem2 = document.getElementById('item2').value;
    // document.getElementById('item').value = newItem;
    // document.getElementById('item1').value = newItem1;
    // document.getElementById('item2').value = newItem2;
    // item




     // var input = e.target.parentElement;
        // const li = document.createElement('li');
        // li.textContent = input.value;
        // itemList.insertBefore(li, input);
        // li.removeChild(input);
        // button.textContent = 'edit';