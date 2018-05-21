#Build the application

1. Make folder name 'testApp'.
2. Extract the shared file into 'testApp' folder.
3. Open command prompt inside the folder and exceute the command 'npm install'. Please verify if your system have npm install by giving command 'npm --v'.
4. Now run command 'npm install -g gulp'.
5. Now run command 'gulp start'.
6. Done !! Gulp will launc at port 3000(if available) and opens up broswer.

#Test case for application

1. Navigate to app folder, open command prompt  and run command 'npm install'.
2. check in karma is installed if not then run the command 'npm install -g karma'.
3. Then run command 'karma start karma-conf.js'. Done!! you will get test cases status in console itself.


#Functionality

1. On load page will show three text box for user input.
2. All three feilds are tag fields, if user is typing atleast 3 letter then system will suggest corresponding options and on click of enter that value will be selected.
3. Once all the fields are entered the submit will be enabled.
4. on click of submit, system will filter the records and will show both filter criteria and matched data in table.
5. When user try to change filter criteria data then page will move back to home page, here user can enter search critera again.
