CALL cd ../jsql-superagent
CALL dev.bat
CALL xcopy dist\jsql-superagent.js ..\jsql-react-test-app\node_modules\jsql-superagent /Y
CALL cd ../jsql-react-test-app
CALL cd node_modules\jsql-superagent
CALL del jsql-superagent.min.js
CALL rename jsql-superagent.js jsql-superagent.min.js
CALL cd ..
CALL cd..
CALL npm run serve
