function merchantForm() {
  document.getElementById("submit").innerText = "Submit";
  //alert('Are you sure, you want to submit the form?');
  //To store the collected responses in local variable
  var formResponse = {};
  formResponse.Name = document.getElementById("name").value;
  formResponse.Email = document.getElementById("email").value;
  formResponse.Phone = document.getElementById("phone").value;
  formResponse.Website = document.getElementById("website").value;
  formResponse.ContactName = document.getElementById("contactname").value;
  formResponse.ContactPhone = document.getElementById("contactphone").value;
  formResponse.ContactEmail = document.getElementById("contactemail").value;
  formResponse.Notes = document.getElementById("notes").value;
  formResponse.businessType = bussinessType();
  formResponse.selectCategory = category();
  formResponse.ComissionPercentage = document.getElementById("comissionpercentage").value;
  formResponse.ActiveFrom = document.getElementById("activefrom").value;
  formResponse.Logo = document.getElementById("logo").value;
  formResponse.caAccount = cAccount();
  formResponse.paymentMethod = paymentMethod();

  var storedResponses = localStorage.getItem('formResponses');
  var formData;
  if (storedResponses) {
    // Parse the JSON string to convert it into an array
    formData = JSON.parse(storedResponses);
  } else {
    // If no previous form responses exist, initialize the array
    formData = [];
  }
  let newData = true;
  var tableDatas = JSON.parse(localStorage.getItem('formResponses'));
  if (tableDatas != null) {
    for (var i = 0; i < tableDatas.length; i++) {
      // console.log(tableDatas[i]);
      if (tableDatas[i].Email === formResponse.Email || tableDatas[i].Phone === formResponse.Phone) {
        newData = false;
        break;
      }
    }
  }
  if (newData == true) {
    //alert("Your business profile has been created successfully");
    formData.push(formResponse);
    localStorage.setItem('formResponses', JSON.stringify(formData));
  }
  else {
    editData(i);
    //alert("Your business profile has been updated successfully");

  }
  reset();
  onload(); //update the data to table after submitting new data
}
function bussinessType() {
  var Type = document.getElementsByName("type");
  var Btype = "";
  for (var i = 0; i < Type.length; i++) {
    if (Type[i].checked) {
      Btype = Type[i].value;
    }
  } return Btype;
}
function category() {
  var Category = document.getElementById("category");
  var Scategory = [];
  for (var result of Category.options) {
    if (result.selected) {
      Scategory.push(result.value)
    }
  } return Scategory;
}
function cAccount() {
  var CriticalAccount = document.getElementsByName("criticalaccount");
  var CA = [];
  for (var i = 0; i < 2; i++) {
    if (CriticalAccount[i].type == "checkbox" && CriticalAccount[i].checked == true) {
      CA.push(CriticalAccount[i].value);
    }
  } return CA;
}
function paymentMethod() {
  var paymentMethod = document.getElementsByName("paymentoption");
  var paymentOption = [];
  for (var i = 0; i < paymentMethod.length; i++) {
    if (paymentMethod[i].type == "checkbox" && paymentMethod[i].checked == true) {
      paymentOption.push(paymentMethod[i].value);
    }
  } return paymentOption;
}

//To store data in the table
window.onload = function () {
  var tableData = JSON.parse(localStorage.getItem('formResponses'));
  var tbody = document.querySelector("#merchantResponse tbody");
  tbody.innerHTML = " ";
  if (tableData == null)
    return;
  for (var i = 0; i < tableData.length; i++) {
    var row = document.createElement('tr');

    // Create table cells and populate with data
    var serialNumCell = document.createElement('td');
    serialNumCell.textContent = i + 1;
    row.appendChild(serialNumCell);

    var nameCell = document.createElement('td');
    nameCell.textContent = tableData[i].Name;
    row.appendChild(nameCell);

    var emailCell = document.createElement('td');
    emailCell.textContent = tableData[i].Email;
    row.appendChild(emailCell);

    var phoneCell = document.createElement('td');
    phoneCell.textContent = tableData[i].Phone;
    row.appendChild(phoneCell);

    var websiteCell = document.createElement('td');
    websiteCell.textContent = tableData[i].Website;
    row.appendChild(websiteCell);

    var contactnameCell = document.createElement('td');
    contactnameCell.textContent = tableData[i].ContactName;
    row.appendChild(contactnameCell);

    var contactphoneCell = document.createElement('td');
    contactphoneCell.textContent = tableData[i].ContactPhone;
    row.appendChild(contactphoneCell);

    var contactemailCell = document.createElement('td');
    contactemailCell.textContent = tableData[i].ContactEmail;
    row.appendChild(contactemailCell);

    var notesCell = document.createElement('td');
    notesCell.textContent = tableData[i].Notes;
    row.appendChild(notesCell);

    var typeCell = document.createElement('td');
    typeCell.textContent = tableData[i].businessType;
    row.appendChild(typeCell);

    var categoryCell = document.createElement('td');
    categoryCell.textContent = tableData[i].selectCategory;
    row.appendChild(categoryCell);

    var CPersentCell = document.createElement('td');
    CPersentCell.textContent = tableData[i].ComissionPercentage;
    row.appendChild(CPersentCell);

    var activeFromCell = document.createElement('td');
    activeFromCell.textContent = tableData[i].ActiveFrom;
    row.appendChild(activeFromCell);

    var criticalAccCell = document.createElement('td');
    criticalAccCell.textContent = tableData[i].caAccount;
    row.appendChild(criticalAccCell);

    var paymentCell = document.createElement('td');
    paymentCell.textContent = tableData[i].paymentMethod;
    row.appendChild(paymentCell);

    var actionCell = document.createElement('td');
    var editButton = document.createElement('ion-icon');
    editButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#0a8901}</style><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z"/></svg>';
    editButton.classList.add('edt-btn');
    editButton.addEventListener('click', createEditHandler(tableData[i]));
    actionCell.appendChild(editButton);
    // Create Delete button
    var deleteButton = document.createElement('ion-icon');
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    // deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ff291a}</style><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L353.3 251.6C407.9 237 448 187.2 448 128C448 57.3 390.7 0 320 0C250.2 0 193.5 55.8 192 125.2L38.8 5.1zM264.3 304.3C170.5 309.4 96 387.2 96 482.3c0 16.4 13.3 29.7 29.7 29.7H514.3c3.9 0 7.6-.7 11-2.1l-261-205.6z"/></svg>';
    deleteButton.classList.add('del-btn');
    deleteButton.addEventListener('click', createDeleteHandler(tableData[i]));
    actionCell.appendChild(deleteButton);
    row.appendChild(actionCell);
    tbody.appendChild(row);
  }
}
function createEditHandler(data) {
  return function () {
    populateForm(data);
  }
}
function populateForm(data) {
  document.getElementById("submit").innerText = "Update";
  document.getElementById("name").value = data.Name;
  document.getElementById("email").value = data.Email;
  document.getElementById("phone").value = data.Phone;
  document.getElementById("website").value = data.Website;
  document.getElementById("contactname").value = data.ContactName;
  document.getElementById("contactphone").value = data.ContactPhone;
  document.getElementById("contactemail").value = data.ContactEmail;
  document.getElementById("notes").value = data.Notes;
  findBusinessType(data.businessType);
  // document.getElementsByName("type").value = data.businessType;
  findCategory(data.selectCategory);
  // document.getElementsByName("category").value = data.selectCategory;
  document.getElementById("comissionpercentage").value = data.ComissionPercentage;
  document.getElementById("activefrom").value = data.ActiveFrom;
  findPaymentMethod(data.paymentMethod);
  // document.getElementsByTagName("criticalaccount").value = data.caAccount;
  findAccountType(data.caAccount);
  // document.getElementsByName("paymentoption").checked = data.paymentMethod;
  newData = false;
}
function findBusinessType(data) {
  let fnType = document.getElementsByName("type");
  for (var i = 0; i < fnType.length; i++) {
    if (fnType[i].value == data) {
      fnType[i].checked = true;
    }
  }
}
function findCategory(data) {
  let fnCategory = document.getElementsByName("category");
  for (var i = 0; i < fnCategory.length; i++) {
    for (var j = 0; j < data.length; j++) {
      if (fnCategory[i].value == data[j]) {
        fnCategory[i].selected = true;
      }
    }
  }
}
function findAccountType(data) {
  let fnAccount = document.getElementsByName("criticalaccount");
  if (fnAccount[0] == data[0])
    fnAccount[1].checked = true;
  else
    fnAccount[0].checked = true;
}
function findPaymentMethod(data) {
  let fnPayment = document.getElementsByName("paymentoption");
  for (var i = 0; i < fnPayment.length; i++) {
    for (var j = 0; j < data.length; j++) {
      if (fnPayment[i].value == data[j]) {
        fnPayment[i].checked = true;
      }
    }
  }
}
function editData(index) {
  var formData = JSON.parse(localStorage.getItem('formResponses'));
  formData[index].Name = document.getElementById("name").value;
  formData[index].Email = document.getElementById("email").value;
  formData[index].Phone = document.getElementById("phone").value;
  formData[index].Website = document.getElementById("website").value;
  formData[index].ContactName = document.getElementById("contactname").value;
  formData[index].ContactPhone = document.getElementById("contactphone").value;
  formData[index].ContactEmail = document.getElementById("contactemail").value;
  formData[index].Notes = document.getElementById("notes").value;
  formData[index].businessType = bussinessType();
  formData[index].selectCategory = category();
  formData[index].ComissionPercentage = document.getElementById("comissionpercentage").value;
  formData[index].ActiveFrom = document.getElementById("activefrom").value;
  formData[index].Logo = document.getElementById("logo").value;
  formData[index].caAccount = cAccount();
  formData[index].paymentMethod = paymentMethod();
  localStorage.setItem('formResponses', JSON.stringify(formData));
}
//Delete function
function createDeleteHandler(Ddata) {
  return function () {
    deleteForm(Ddata); // call delete func
  }
}
function deleteForm(data) {
  var retriveData = JSON.parse(localStorage.getItem('formResponses')); //converts a JSON string to object
  var index = retriveData.findIndex(function (obj) {
    return obj.Email === data.Email && obj.Phone === data.Phone;
  });
  retriveData.splice(index, 1);
  localStorage.setItem('formResponses', JSON.stringify(retriveData)); //converts a JavaScript value to a JSON string
  onload();
}
//reset function, reset the form once it is submitted
function reset() {
  document.getElementById("submit").innerText = "Submit";
  document.getElementById("name").value = " ";
  document.getElementById("email").value = " ";
  document.getElementById("phone").value = " ";
  document.getElementById("website").value = " ";
  document.getElementById("contactname").value = " ";
  document.getElementById("contactphone").value = " ";
  document.getElementById("contactemail").value = " ";
  document.getElementById("notes").value = " ";
  document.getElementsByName("type").checked = resetBussinessType();
  document.getElementsByName("category").selected = resetCategory();
  document.getElementById("comissionpercentage").value = " ";
  document.getElementById("activefrom").value = " ";
  document.getElementsByName("criticalaccount").checked = resetcAccount();
  document.getElementsByName("paymentoption").checked = resetPaymentMethod();
}
function resetBussinessType() {
  var Type = document.getElementsByName("type");
  for (var i = 0; i < Type.length; i++) {
    Type[i].checked = false;
  }
}
function resetCategory() {
  var category = document.getElementsByName("category");
  for (var i = -0; i < category.length; i++) {
    category[i].selected = false;
  }
}
function resetcAccount() {
  var criticalAccount = document.getElementsByName("criticalaccount");
  for (var i = 0; i < criticalAccount.length; i++) {
    criticalAccount[i].checked = false;
  }
}
function resetPaymentMethod() {
  var paymentMethod = document.getElementsByName("paymentoption");
  for (var i = 0; i < paymentMethod.length; i++) {
    paymentMethod[i].checked = false;
  }
}
// we can also create table by using below method
/*window.onload = function () {
  var tableData = JSON.parse(localStorage.getItem('formResponses'));
  var html = document.querySelector("#merchantResponse tbody");
  html.innerHTML = " ";
  if (tableData == null)
    return;
   html = "<table border='1|1'>";
  for (var i = 0; i < tableData.length; i++) {
    html += "<tr>";
    html += "<td>" + (i + 1) + "</td>";
    html += "<td>" + tableData[i].Name + "</td>";
    html += "<td>" + tableData[i].Email + "</td>";
    html += "<td>" + tableData[i].Phone + "</td>";
    html += "<td>" + tableData[i].Website + "</td>";
    html += "<td>" + tableData[i].ContactName + "</td>";
    html += "<td>" + tableData[i].ContactPhone + "</td>";
    html += "<td>" + tableData[i].ContactEmail + "</td>";
    html += "<td>" + tableData[i].Notes + "</td>";
    html += "<td>" + tableData[i].businessType + "</td>";
    html += "<td>" + tableData[i].selectCategory + "</td>";
    html += "<td>" + tableData[i].ComissionPercentage + '%' + "</td>";
    html += "<td>" + tableData[i].ActiveFrom + "</td>";
    html += "<td>" + tableData[i].caAccount + "</td>";
    html += "<td>" + tableData[i].paymentMethod + "</td>";
    html += "<td><button class='edt-btn' onClick='editData(" + i + ")'>Edit</button><button class='del-btn' onClick='deleteData(" + i + ")'>Delete</button></td>";
    html += "</tr>";
  }
  html += "</table>";
  document.getElementById("merchantResponse_tbody").innerHTML = html;
}
function deleteData(index) {
  var retriveData = JSON.parse(localStorage.getItem('formResponses')); //converts a JSON string to object
  retriveData.splice(index, 1);
  localStorage.setItem('formResponses', JSON.stringify(retriveData)); //converts a JavaScript value to a JSON string
  onload();
}*/