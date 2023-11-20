# How to use Typescript in express

```bash
npm init -y //to create a package.json
npm install --save express
npm install --save-dev nodemon // or use node --watch
npm install -D typescript
npm install -D ts-node
npm i express body-parser cookie-parser compression cors
npm i -D @types/express @types/body-parser @types/cookie-parser @types/compression @types/cors

```

**Now lets Setup the typeScript Config file**

1. create a `tsconfig.json` file.
2. add the following in the file :

```json
{
  "compilerOptions": {
    "module": "NodeNext",
    "moduleResolution": "node",
    "baseUrl": "src",
    "outDir": "dist",
    "sourceMap": true,
    "noImplicitAny": true
  },
  "include": ["src/**/*"]
}
```

**SetUP Nodemon**

1. create a `nodemon.json` file
2. Add the following code

```json
{
  "watch": ["src"],
  "ext": ".ts,.js,.tsx,.cts,.cjs,.jsx,.tsx",
  "exec": "ts-node ./src/index.ts"
}
```

**Set A Server Startup Script**

1. go to `package.json` and add the folowing in scripts object :

```json
    "dev":"nodemon"
```

2. test the script by :

```sh
npm run dev
```

<!-- ::temp -->

db name : testDB
db pass : uPQMSZrQUOr0Yw5o
