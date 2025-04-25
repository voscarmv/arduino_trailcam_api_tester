import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

(
  async () => {
    let url = `${process.env.APIURL}/standard_error`;
    let output;
    try {
      const response = await fetch(url, {
        method: 'GET', // Use POST or another HTTP method as needed
        headers: {
          'Content-Type': 'application/json', // Set the content type
        }
      });
      output = await response.json();
    } catch (e) {
      console.error(e)
    }
    console.log(output);
    url = `${process.env.APIURL}/record_not_found`;
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      output = await response.json();
    } catch (e) {
      console.error(e)
    }
    console.log(output);
    url = `${process.env.APIURL}/parameter_missing`;
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      output = await response.json();
    } catch (e) {
      console.error(e)
    }
    console.log(output);
  }
)();