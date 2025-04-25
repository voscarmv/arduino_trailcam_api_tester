# rails8_auth_tester
API calls to test [rails 8 auth](https://github.com/voscarmv/rails8_auth_api)

## Tests includad

Rails 8 Auth API has several functionalities that must be tested. Here's a checklist of the functionalities that are currently tested:

- [ ] Sign-up: currently only Admin can create new users.
- [x] Regular non-admin user Log-in
- [x] Authenticated projects CRUD by user
- [x] Change password: non-admin users can change their own password through a reset token sent to their emails.
- [ ] Admin changes user email. Check what happens if the user is logged in while Admin does this.
- [ ] Admin changes their own email. Check what happens to the session after this change is made.
- [ ] Admin changes own password without reset token.
- [ ] Admin changes user password without reset token.

Make sure to generate every possible error response also from every controller file.

- [ ] Errors in Application Controller
    - [ ] ActiveRecord::RecordNotFound
    - [ ] ...
- [ ] Errors from sessions controller
    - [ ] Authentication fails
    - [ ] etc...
- [ ] Errors from users controller
- [ ] ...

Also generate all of the other responses from the helpers `render_error()` and `render_success()`

TODO: Finish this list