#!/bin/bash

node adminsignup.js
node logincreate.js
node notifications.js &
node uploadpic.js
# node passreset.js
# node logincreate.js # should fail after password reset
# node appcontrolexcept.js