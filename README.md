# boy-tears

##goals: 

make a server with only the net module that responds to requests with different paths, and responds to anything else with 404.

##steps:

1. make a server file and a basic server setup using the net module
1. make a test file and test for path '/' request to return response of string
1. make a function that returns an HTTP packet
    1. contains content-length in bytes
1. return correct responses for all paths listed
1. if path doesn't exist return 404