$('#form').submit(function(e){
    e.preventDefault();
    addNewContact();
});

var Contact = function (firstname, lastname, email, phone) {
    this.fname = firstname;
    this.lname = lastname;
    this.email = email;
    this.phone = phone;
}

var contacts = [];
contacts.push(new Contact("Sharad", "Kad", "sharadkad123@gmail.com", "9665834500"));
contacts.push(new Contact("Sachin", "Pawar", "apawar34@gmail.com", "1231231232"));


var listContacts = function () {
    
    document.getElementById('displayContacts').innerHTML = " ";
    var content = "<table class='table'>";
    content += "<thead class='thead-dark'>";
    content += "<tr>";
    content += "<th>" + "First Name" + "</th>";
    content += "<th>" + "Last Name" + "</th>";
    content += "<th>" + "Email ID" + "</th>";
    content += "<th>" + "Phone No" + "</th>";
    content += "<th>" + "Status" + "</th>";
    content += "</tr>";
    content += "</thead>";
    for (var i = 0; i < contacts.length; i++) {
        content += '<tr><td id="name' + i + '">' + contacts[i].fname + '</td><td id="name' + i + '">' + contacts[i].lname + '</td><td id="email' + i + '">' + contacts[i].email + '</td><td id="phone' + i + '">' + contacts[i].phone + '</td><td><button class="btn btn-warning mr-2" onclick=updateContact(' + i + ')>Update</button></div><button class="btn btn-danger" onclick=deleteContact(' + i + ')>Delete</button></td></tr>';
         }
         content += "</table>";
         document.getElementById('displayContacts').innerHTML = content;
         
}

var addNewContact = function () {
    var fname = document.getElementById('firstName').value;
    var lname = document.getElementById('lastName').value;
    var email = document.getElementById('inputEmail').value;
    var phone = document.getElementById('inputPhone').value;
    var contact = new Contact(fname, lname, email, phone);
    contacts.push(contact);
    listContacts();
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputPhone").value = "";
}

var deleteContact = function (i) {
    contacts.splice(i, 1);
    listContacts();
}

var updateContact = function (i) {
    contactId = i;
    document.getElementById("firstName").value = contacts[i].fname;
    document.getElementById("lastName").value = contacts[i].lname;
    document.getElementById("inputEmail").value = contacts[i].email;
    document.getElementById("inputPhone").value = contacts[i].phone;
    document.getElementById("submitButtons").innerHTML = '<button id="updateButton" class="btn btn-info mt-2" onclick=submitUpdatedContact(contactId)>Submit Update</button>';
    
}

var submitUpdatedContact = function (i) {

    contacts[i].fname = document.getElementById("firstName").value;
    contacts[i].lname = document.getElementById("lastName").value;
    contacts[i].email = document.getElementById("inputEmail").value;
    contacts[i].phone = document.getElementById("inputPhone").value;

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputPhone").value = "";
    document.getElementById("submitButtons").innerHTML = '<input id="updateButton" type="submit" value="Add Contact" class="btn btn-info mt-2"/>';
    listContacts();
}

listContacts();