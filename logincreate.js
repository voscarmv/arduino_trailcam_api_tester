import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

(
  async () => {
    const url = `${process.env.APIURL}/session`;
    const usr = process.env.USER1;
    const pass = process.env.USERPASS1;
    let output = null;
    try {
      const response = await fetch(url, {
        method: 'POST', // Use POST or another HTTP method as needed
        headers: {
          'Content-Type': 'application/json', // Set the content type
        },
        body: JSON.stringify({ user: { email_address: usr, password: pass }}) // Send the body as JSON
      });
      output = await response.json();
    } catch (e) {
      console.error(e)
    }
    console.log(output);
    // console.log('API URL?');
    const url2 = `${process.env.APIURL}/projects`;
    let output2;
    let headers2;
    try {
      const response = await fetch(url2, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${output.data.token}`,
        },
        body: JSON.stringify({ project: { title: "New proj", description: `Bearer ${output.data.token}` }}) // Send the body as JSON
      });
      output2 = await response.json();
      headers2 = response.headers;
    } catch (e) {
      console.error(e)
    }
    console.log(output2);
    console.log(headers2.get('authorization'));
    try {
      const response = await fetch(url2, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${headers2.get('authorization')}`,
        },
      });
      output2 = await response.json();
      headers2 = response.headers;
    } catch (e) {
      console.error(e)
    }
    console.log(output2);
    console.log(headers2.get('authorization'));



    try {
      const response = await fetch(`${url2}/${output2.data.projects[0].id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${headers2.get('authorization')}`,
        },
        body: JSON.stringify({ project: { title: "New proj", description: `Bubibubibu` }}) // Send the body as JSON
      });
      output2 = await response.json();
      headers2 = response.headers;
    } catch (e) {
      console.error(e)
    }



    console.log(output2);
    console.log(headers2.get('authorization'));
    try {
      const response = await fetch(`${url2}/${output2.data.project.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${headers2.get('authorization')}`,
        },
      });
      output2 = await response.json();
      headers2 = response.headers;
    } catch (e) {
      console.error(e)
    }
    console.log(output2);
    console.log(headers2.get('authorization'));
    try {
      const response = await fetch(url2, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${headers2.get('authorization')}`,
        },
      });
      output2 = await response.json();
      headers2 = response.headers;
    } catch (e) {
      console.error(e)
    }
    console.log(output2);
    console.log(headers2.get('authorization'));
  }

)();
