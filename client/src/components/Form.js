import React, {useRef} from 'react';
import './ToDoInput.css'

const form = document.forms[0];

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const formData = new FormData(this);
  const entries = formData.entries();
  const data = Object.fromEntries(entries);

  // send out to a REST API
  fetch("https://some.endpoint.dev", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(/**/)
    .catch(/**/);
});

export default Form;