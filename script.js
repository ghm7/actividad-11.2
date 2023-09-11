const URL = 'https://jsonplaceholder.typicode.com/users';

const inputButton = document.getElementById('submit-button');
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputBirthday = document.getElementById('input-date');

inputButton.addEventListener('click', async (e) => {
  e.preventDefault();

  await fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      name: inputName.value,
      lastName: inputLastName.value,
      birthday: inputBirthday.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
});
