import fetch from 'node-fetch';
import readline from 'readline';
import dotenv from 'dotenv';
dotenv.config();

const readLineAsync = () => {
  const rl = readline.createInterface({
    input: process.stdin
  });

  return new Promise((resolve) => {
    rl.prompt();
    rl.on('line', (line) => {
      rl.close();
      resolve(line);
    });
  });
};

(
  async () => {
    const url = `${process.env.APIURL}/passwords`;
    const usr = process.env.USER1;
    let output = null;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Set the content type
        },
        body: JSON.stringify({ email_address: usr }) // Send the body as JSON
      });
      output = await response.json();
    } catch (e) {
      console.error(e)
    }
    console.log(output);
    console.log('Password reset token? (check your email and span inbox)');
    const token = await readLineAsync();
    const pass = process.env.NEWPASS;
    let output2;
    try {
      const response = await fetch(`${url}/${token}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: { password: pass, password_confirmation: pass }}) // Send the body as JSON
      });
      output2 = await response.json();
    } catch (e) {
      console.error(e)
    }
    console.log(output2);
  }
)();