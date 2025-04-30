import WebSocket from 'ws';
// import { createConsumer } from "@rails/actioncable";
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
                body: JSON.stringify({ user: { email_address: usr, password: pass } }) // Send the body as JSON
            });
            output = await response.json();
        } catch (e) {
            console.error(e)
        }
        console.log(output);

        const token = `${output.data.token}`;
        const cableUrl = `${process.env.WS}/cable?token=${token}`;
        const ws = new WebSocket(cableUrl);

        ws.on('open', async function open() {
            console.log('Connected to the server');
            const msg = {
                command: "subscribe",
                identifier: JSON.stringify({
                    channel: "NotificationsChannel",
                    //   room: "general"
                })
            };
            ws.send(JSON.stringify(msg));
            // Try to reset token here

            let output2;
            let headers2;
            try {
                const response = await fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    }
                });
                output2 = await response.json();
                headers2 = response.headers;
            } catch (e) {
                console.error(e)
            }

            console.log(output2);
            console.log(headers2.get('authorization'));
        });

        ws.on('message', function incoming(data) {
            console.log('Received:', data.toString());
        });
    }
)();

