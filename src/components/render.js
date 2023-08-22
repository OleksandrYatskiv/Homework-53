function renderUsers(data, wrapper) {
    data.forEach(user => {
        const ul = document.createElement('ul');
        const id = document.createElement('li');
        const name = document.createElement('li');
        const age = document.createElement('li');
        const email = document.createElement('li');
        const company = document.createElement('li');
        const birthday = document.createElement('li');

        id.innerText = `Id : ${user.id}`;
        name.innerText = `Name : ${user.name}`;
        age.innerText = `Age : ${user.age}`;
        email.innerText = `Email : ${user.email}`;
        company.innerText = `Company : ${user.company}`;
        birthday.innerText = `Birthday : ${user.birthday}`;

        ul.append(id, name, age, email, company, birthday);
        wrapper.append(ul);
    });
}

export default renderUsers;