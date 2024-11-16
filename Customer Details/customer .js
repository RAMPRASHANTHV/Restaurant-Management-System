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

    if (document.querySelector("#submit").innerText == "Edit Student") {
        console.log("this will edit and not add");
        console.log(global_id);
        let index;

        for (let i = 0; i < students.length; i++) {
            if (students[i]['ID'] == global_id) {
                index = i;
                break;
            }
        }

        let studentobj = students[index];

        studentobj['name'] = nameValue;
        studentobj['email'] = emailValue;
        studentobj['grade'] = gradeValue;
        studentobj['age'] = ageValue;
        studentobj['degree'] = degreeValue;
        studentobj['person'] = personValue;
        studentobj['datetime'] = datetimeValue;

        students[index] = studentobj;

        showTable();
        document.querySelector("#submit").innerHTML = "Add Customer";

        clearFields();
        return;
    }

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
        
        const id = document.createElement('td');
        const name = document.createElement('td');
        const email = document.createElement('td');
        const age = document.createElement('td');
        const grade = document.createElement('td');
        const degree = document.createElement('td');
        const person = document.createElement('td');
        const datetime = document.createElement('td');

        id.innerHTML = student['ID'];
        name.innerHTML = student['name'];
        email.innerHTML = student['email'];
        age.innerHTML = student['age'];
        grade.innerHTML = student['grade'];
        degree.innerHTML = `<div class='degree'><div>${student['degree']}</div>
                            <div class="icons">
                                <a onClick="edit(${student['ID']})" class='fa'>&#xf044;</a>
                                <a onClick="del(${student['ID']})" class='fa'>&#xf1f8;</a>
                            </div></div>`;
        person.innerHTML = student['person'];
        datetime.innerHTML = student['datetime'];

        row.appendChild(id);
        row.appendChild(name);
        row.appendChild(email);
        row.appendChild(age);
        row.appendChild(grade);
        row.appendChild(degree);
        row.appendChild(person);
        row.appendChild(datetime);

        table.appendChild(row);
    });
}
