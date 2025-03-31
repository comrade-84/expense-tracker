const des_ = document.getElementById('description');
const amt_ = document.getElementById('amount');
const cat_ = document.getElementById('category');
const dat_ = new Date();
const date = dat_.toDateString();
const addBtn_ = document.getElementById('s-btn');
const err_Message = document.getElementById('error');
const result = document.querySelector('.result-box');
const expense_row = document.createElement('div');

// expense array
const expense_Array = [];

// logger
function logger(value) {
    return console.log(value);
}

function expenseAdder() {
    const desc_ = des_.value.trim();
    expense_Array.splice(0, 0, desc_);
    logger(expense_Array); // Log the updated array
}

const del_btn = document.createElement('button');
del_btn.textContent = 'delete';
del_btn.classList.add('del');
del_btn.addEventListener("click", function () {
    deleteBtn(this.parentElement);
});

function deleteBtn(index) {
    expense_Array.splice(index, 1);
    amount_arr.splice(index, 1);
    renderExpenses(); 
}

const amount_arr = [];

function amountAdder() {
    const amtt_ = amt_.value.trim();
    amount_arr.splice(0, 0, amtt_);
    logger(amount_arr); // Log the updated array
}


const category_arr = [];
function cattAdder(){
    const catt_ = cat_.value.trim();
    category_arr.splice(0, 0, catt_);
    logger(category_arr);
}

function renderExpenses() {
    result.innerHTML = ''; // Clear previous content
    expense_Array.forEach((value, index) => {
        const expense_row = document.createElement('div');
        expense_row.classList.add('d-flex');

        const expense_list = document.createElement('li');
        expense_list.classList.add('li')
        expense_list.textContent = value;

        const amount = document.createElement('span');
        amount.textContent = amount_arr[index];

        const cate__ = document.createElement('span');
        cate__.textContent = category_arr[index];



        const del_btn = document.createElement('button');
        del_btn.textContent = 'delete';
        del_btn.classList.add('del');
        del_btn.addEventListener("click", function () {
            deleteBtn(expense_row);
        });

        expense_row.append(expense_list, amount, cate__,  del_btn, date);
        result.append(expense_row);
    });
}

addBtn_.addEventListener('click', function () {
    if (!amt_.value && !des_.value ) {
        err_Message.innerHTML = 'Fill in the input fields';
    } else {
        err_Message.innerHTML = '';
        expenseAdder();
        des_.value = "";
        amountAdder();
        amt_.value = "";
        cattAdder();
        cat_.value = "";
        renderExpenses();
    };
});