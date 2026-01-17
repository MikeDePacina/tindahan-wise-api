# A typical DevSecOps CI/CD Pipeline for containerized workloads #
DevSecOps calls for security to be integrated and be one of the guiding factors in each step of the SDLC. 

What this looks like:
- threat modelling being a crucial part in the design phase
- engineers writing "secure code" (following best security practices and writing with the threats discovered from threat modelling. SEs can also get help from SASTs in their IDE)
- including vulnerability scanners in CI/CD pipeline to ensure known threats don't make it to prod
- ensuring code isn't tampered along the CI/CD pipeline via attestations and signing of images and files.
- employing guard rails/policies via a policy agent to enforce best practices/rules
- monitoring and regular scanning for new discovered threats from your software supply chain 
  
## The general flow/steps of a DevSecOps pipeline for creating container images: ##
