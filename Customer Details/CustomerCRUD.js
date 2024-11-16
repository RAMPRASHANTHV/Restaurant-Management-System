var count = 0;
var students = [];
var global_id;

function addStudent() {
    const nameValue = document.getElementById('name').value;
    const emailValue = document.getElementById('email').value;
    const ageValue = document.getElementById('age').value;
    const gradeValue = document.getElementById('grade').value;
    const degreeValue = document.getElementById('degree').value;
    const personValue = document.getElementById('peson').value;
    const datetimeValue = document.getElementById('datetime').value;

    if (document.querySelector("#submit").innerText === "Edit Customer") {
        // Update existing customer
        let index = students.findIndex(student => student.ID === global_id);
        if (index !== -1) {
            students[index] = {
                ID: global_id,
                name: nameValue,
                email: emailValue,
                age: ageValue,
                grade: gradeValue,
                degree: degreeValue,
                person: personValue,
                datetime: datetimeValue
            };
        }
        document.querySelector("#submit").innerText = "Add Customer";
        global_id = null;
    } else {
        // Add new customer
        if (nameValue === '' || emailValue === '' || ageValue === '' || gradeValue === '' || degreeValue === '' || personValue === '' || datetimeValue === '') {
            alert("All fields are required!");
            return;
        }
        count++;
        students.push({
            ID: count,
            name: nameValue,
            email: emailValue,
            age: ageValue,
            grade: gradeValue,
            degree: degreeValue,
            person: personValue,
            datetime: datetimeValue
        });
    }

    clearFields();
    showTable();
}

function clearFields() {
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('age').value = "";
    document.getElementById('grade').value = "";
    document.getElementById('degree').value = "";
    document.getElementById('peson').value = "person";
    document.getElementById('datetime').value = "";
}

function showTable() {
    const table = document.getElementById('tbody');
    while (table.hasChildNodes()) {
        table.removeChild(table.firstChild);
    }

    students.forEach((student) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.ID}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.age}</td>
            <td>${student.grade}</td>
            <td>
                <div class='degree'>
                    <div>${student.degree}</div>
                    <div class="icons">
                        <a onClick="edit(${student.ID})" class='fa'>&#xf044;</a>
                        <a onClick="del(${student.ID})" class='fa'>&#xf1f8;</a>
                    </div>
                </div>
            </td>
            <td>${student.person}</td>
            <td>${student.datetime}</td>
        `;
        table.appendChild(row);
    });
}

function edit(id) {
    let student = students.find(student => student.ID === id);
    if (student) {
        document.getElementById('name').value = student.name;
        document.getElementById('email').value = student.email;
        document.getElementById('age').value = student.age;
        document.getElementById('grade').value = student.grade;
        document.getElementById('degree').value = student.degree;
        document.getElementById('peson').value = student.person;
        document.getElementById('datetime').value = student.datetime;

        document.getElementById("submit").innerText = "Edit Customer";
        global_id = id;
    }
}

function del(id) {
    students = students.filter(student => student.ID !== id);
    showTable();
}

function search() {
    var input, filter, table, tr, i, txtValue, txtValue1, txtValue2;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("tbody");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        td1 = tr[i].getElementsByTagName("td")[2];
        td2 = tr[i].getElementsByTagName("td")[5];
        if (td || td1 || td2) {
            txtValue = td.textContent || td.innerText;
            txtValue1 = td1.textContent || td1.innerText;
            txtValue2 = td2.textContent || td2.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue1.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
