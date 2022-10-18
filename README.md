# Portfolio

My portfolio website. An initial branch will be made that is used for testing purposes (trying different frameworks, see what fits) and the master branch will
be the one that is used by AWS? Azure? DigitalOcean? to host it. A VM on one of these cloud providers will host a jenkins installation that will fetch the master branch
daily?. The same Jenkins will fetch the testing branch more often, maybe every minute or so and then push the code to another vm on success, where the website will be hosted at.

Even though this is a small project, I want to keep the same CI/CD and best practices for all of my projects, to ensure quality and safety.

## Related projects

This portfolio has an API which is itself hosted at another VM. The API code is not public as of now.