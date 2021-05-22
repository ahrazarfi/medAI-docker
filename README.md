# What I did from the beginning? How to reproduce the build locally and deploy to heroku
    - First make an environment using conda (use google to search how?)
    - clone the repo and cd into the root folder and open command prompt
    - activate your conda environment > conda activate <your_environment_name>
    - pip install -r requirements.txt (this will install all the dependenices for the project) 
    - python app.py (this will initialize the flask server on localhost {127.0.0.1:5000})
    - go to the browser on the URL > 127.0.0.1:5000 to access the application

# Erros I had to deal with while deploying ?
    * Google Cloud
        - First I tried to deploy it to Google Cloud using the Compute Engine on a VM instance (debian/linux)
        - Note down the External IP and goto VPC tab in menu and click on create new firewall rule.
        - give a random name to the firewall rule and then select

    * Heroku