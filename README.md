This is a basic Credential Issuance server.
The path to issue a credential is under `localhost:3000/api/issue`
Make a POST request with body of type:
```
{
    "name": "...",
    "email": "test@gmail.com",
    "did": "0x12345678987654321"
}
```