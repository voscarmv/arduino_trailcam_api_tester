import fetch from 'node-fetch';
import dotenv from 'dotenv';
import FormData from 'form-data';
import fs from 'fs';

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
        body: JSON.stringify({ user: { email_address: usr, password: pass } }) // Send the body as JSON
      });
      output = await response.json();
    } catch (e) {
      console.error(e)
    }
    console.log(output);

    // const url2 = `${process.env.APIURL}/projects`;
    // let output2;
    // let headers2;
    // try {
    //   const response = await fetch(url2, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': `Bearer ${output.data.token}`,
    //     },
    //     body: JSON.stringify({ project: { title: "New proj", description: `Bearer ${output.data.token}` } }) // Send the body as JSON
    //   });
    //   output2 = await response.json();
    //   headers2 = response.headers;
    // } catch (e) {
    //   console.error(e)
    // }
    // console.log(output2);
    // console.log(headers2.get('authorization'));





    let output2;
    let headers2;

    const imagePath = './image.jpg';
    const railsEndpoint = `${process.env.APIURL}/photo`;

    const imageBuffer = fs.readFileSync(imagePath);
    const form = new FormData();
    // form.append('image', imageBuffer, { filename: 'image.jpg', contentType: 'image/jpeg' }); // Customize filename and contentType as needed

    form.append('photo[title]', 'Sample Title');
    form.append('photo[image]', imageBuffer, {
      filename: 'image.jpg',
      contentType: 'image/jpeg',
    });

    try {
      const response = await fetch(railsEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${output.data.token}`,
        },
        body: form,
      });
      output2 = await response.json();
      headers2 = response.headers;
      // if (response.ok) {
      //   const data = await response.json();
      //   console.log('Image uploaded successfully:', data);
      // } else {
      //   console.error('Error uploading image:', response.statusText);
      // }
    } catch (error) {
      console.error('Error during fetch:', error);
    }
    console.log(output2);
    console.log(headers2.get('authorization'));






    // try {
    //   const response = await fetch(url2, {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': `Bearer ${headers2.get('authorization')}`,
    //     },
    //   });
    //   output2 = await response.json();
    //   headers2 = response.headers;
    // } catch (e) {
    //   console.error(e)
    // }
    // console.log(output2);
    // console.log(headers2.get('authorization'));



    // try {
    //   const response = await fetch(`${url2}/${output2.data.projects[0].id}`, {
    //     method: 'PUT',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': `Bearer ${headers2.get('authorization')}`,
    //     },
    //     body: JSON.stringify({ project: { title: "New proj", description: `Bubibubibu` }}) // Send the body as JSON
    //   });
    //   output2 = await response.json();
    //   headers2 = response.headers;
    // } catch (e) {
    //   console.error(e)
    // }



    // console.log(output2);
    // console.log(headers2.get('authorization'));
    // try {
    //   const response = await fetch(`${url2}/${output2.data.project.id}`, {
    //     method: 'DELETE',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': `Bearer ${headers2.get('authorization')}`,
    //     },
    //   });
    //   output2 = await response.json();
    //   headers2 = response.headers;
    // } catch (e) {
    //   console.error(e)
    // }
    // console.log(output2);
    // console.log(headers2.get('authorization'));
    // try {
    //   const response = await fetch(url2, {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': `Bearer ${headers2.get('authorization')}`,
    //     },
    //   });
    //   output2 = await response.json();
    //   headers2 = response.headers;
    // } catch (e) {
    //   console.error(e)
    // }
    // console.log(output2);
    // console.log(headers2.get('authorization'));
  }

)();
