fetch("https://thronesapi.com/api/v2/Characters")
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        data.forEach(e => {
            console.log(e)
            const linha = `
                <tr>
                    <td>${e.id}</td>
                    <td>${e.firstName}</td>
                    <td>${e.lastName}</td>
                    <td>${e.fullName}</td>
                    <td>${e.title}</td>
                    <td>${e.family}</td>
                    <td>${e.image}</td>
                    <td>${e.imageUrl}</td>
                </tr>
            `
            document.querySelector('tbody').insertAdjacentHTML('beforeend', linha)
        });
    })
    .catch(err => console.error('error:' + err))