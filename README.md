# A typical DevSecOps CI/CD Pipeline for containerized workloads #
DevSecOps calls for security to be a guiding factor at every step of the SDLC. 

What this looks like:
- Threat modelling becoming a crucial part of the design phase
- Engineers writing "secure code" (following best security practices and writing with the threats discovered from threat modelling. SEs can also get help from SASTs in their IDE.)
- Including vulnerability scanners in CI/CD pipeline to ensure known threats don't make it to prod
- Ensuring code isn't tampered along the CI/CD pipeline via attestations and signing of images and files.
- Employing guard rails/policies via a policy agent to enforce best practices/rules
- Monitoring and regular scanning for newly discovered threats from your software supply chain 
  
## The general flow/steps of a DevSecOps pipeline for creating container images: ##
![Uploading DevSecOps.drawio.svg…]()


References:

- SG CSA - Advisory on Software Bill of Materials and Real-time Vulnerability Monitoring for OS and 3rd Party dependencies(https://issuu.com/csasingapore/docs/advisory_on_implementation_of_software_bill_of_mat?fr=sMzQzNTY4Mzg2Nzk)
- OWASP DevSecOps Guideline (https://owasp.org/www-project-devsecops-guideline/latest/)
- Ch. 7 & 8 of Container Security, 2nd Edition - Liz Rice
