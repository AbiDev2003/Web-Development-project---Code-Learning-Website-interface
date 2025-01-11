## How to setup tailwind css


step : 1: Run the follwing command on terminal vs code
 ````
npm install -D tailwindcss
npx tailwindcss init
```````

Step 2 : 
Update talwind.config.js  to include this line
```
content: ["*.html"],
```

Step 3 : Create src/input.css to include : 
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step 4 : include the src/output.css file to html

Step 5; Run the follwoing command
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```