# A typical DevSecOps CI/CD Pipeline for pushing images of containerized workloads to a registry #
DevSecOps calls for security to be a guiding factor at every step of the SDLC. 

What this looks like:
- Threat modelling becoming a crucial part of the design phase
- Engineers writing "secure code" (following best security practices and writing with the threats discovered from threat modelling. SEs can also get help from SASTs in their IDE.)
- Including vulnerability scanners in CI/CD pipeline to ensure known threats don't make it to prod
- Ensuring code isn't tampered along the CI/CD pipeline via attestations and signing of images and files.
- Employing guard rails/policies via a policy agent to enforce best practices/rules
- Monitoring and regular scanning for newly discovered threats from your software supply chain 
  
## Below is a diagram of this repo's pushing image to registry pipeline  ##

<img width="1041" height="179" alt="My pushing image to registry pipeline drawio" src="https://github.com/user-attachments/assets/0947809e-d121-483b-af60-4c1897f18f24" />


NOTE: I didn't include a DAST scan (a vulnerability scan of the app running) because it's time-consuming and I didn't want to incur costs, but in production environments, it is typical to run DAST scans using tools like OWASP ZAP after or in parallel with SAST scanning.

After this pipeline, the typical next steps are:
1) Verifying the image (its signature and attestations) in the registry via cosign before pushing it to be released on prod. You can also use a Policy Engine like OPA to enforce only allowing verified images to be pulled.
2) Runtime security monitoring with tools like Falco and Cilium

References:

- SG CSA - Advisory on Software Bill of Materials and Real-time Vulnerability Monitoring for OS and 3rd Party dependencies(https://issuu.com/csasingapore/docs/advisory_on_implementation_of_software_bill_of_mat?fr=sMzQzNTY4Mzg2Nzk)
- OWASP DevSecOps Guideline (https://owasp.org/www-project-devsecops-guideline/latest/)
- Ch. 7 & 8 of Container Security, 2nd Edition - Liz Rice
