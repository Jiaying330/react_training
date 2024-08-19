# Assignment
## What are middleware functions in Express.js, and how do they work?
Middleware functions in Express.js are functions that have access to the request and response, and the next
middleware function in the application's request-response cycle. These functions can execute code, modify the
request and response objects, end the request-response cycle, or call the next middleware function using next().

Middleware can be used for various purposes like logging, parsing request bodies, and authentication. They 
are executed in the order they are defined, allowing developers to create a chain of processing steps for 
incoming requests. Middleware functions can be applied globally to all routes, to specific routes, or even to
groups of routes using routers. This modularity and flexibility make middleware a powerful tool for managing
the flow of requests and responses in an Express.js application.
## What is JWT, and how does it work?
JWT is a compact, URL-safe token used for securely transmitting information between parties, often in the context
of authentication and authorization. It consists of three parts: a header, which specifies the token type and signing
algorithm; a payload, which contains claims or data about the user; and a signature, which ensures the token's
integrity by signing the encoder header and payload with a secret or private key. When a client sends a JWT,
typically in the "Authorization" header, the server verifies the signature to authenticate the user without
needing to store session data, making JWT ideal for stateless, scalable APIs.
## How do you securely store JWT on the client-side?
To securely store JWTs on the client-side, it's recommended to use httpOnly and secure cookies, which are inaccessible 
to JavaScript and only sent over HTTPS connections, respectively. This approach mitigates the risk of XSS 
(Cross-Site Scripting) attacks. While localStorage and sessionStorage are commonly used for storing JWTs, they expose
the tokens to potential XSS vulnerabilities. If cookies aren't an option and you must use storage, implementing strong 
Content Security Policy (CSP) headers, regularly rotating tokens, and adopting proper sanitization techniques can help 
reduce risks, though cookies remain the more secure choice for JWT storage.
## How does token expiration work in JWT?
Token expiration in JWT works by including an exp (expiration) claim in the token's payload, which specifies the exact 
time and date when the token will expire, typically as a Unix timestamp. When a server receives a JWT, it checks the 
exp claim to determine if the token is still valid. If the current time is beyond the expiration time, the server rejects 
the token, requiring the user to re-authenticate. This expiration mechanism ensures that tokens have a limited lifespan, 
reducing the risk of unauthorized access if a token is compromised. To maintain user sessions, applications often implement 
token refresh strategies, where a new token is issued before the old one expires.
