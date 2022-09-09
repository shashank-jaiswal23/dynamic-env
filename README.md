
## Available Scrits
Dynamically change your React Environment variables without re-building

Steps :

1. Clone the repo
2. npm install
3. npm build
4. REACT_APP_ENVIRONMENT=development REACT_APP_API_URL=devapi.domain.com npx react-inject-env set

For Windows, Use this command
set REACT_APP_ENVIRONMENT=development&& set REACT_APP_API_URL=devapi.domain.com&& npx react-inject-env set
 
 Note - Window user can use CMD to run this 
 5.serve -s build 
