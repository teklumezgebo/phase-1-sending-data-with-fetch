// Add your code here

function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(res => res.json())
    .then(data => {
       document.querySelector('body').appendChild(document.createElement('p'))
       document.querySelector('p').innerHTML = data.id
    })
    .catch(function(message) {
        document.querySelector('body').appendChild(document.createElement('p'))
        document.querySelector('p').innerHTML = message
    })
 }