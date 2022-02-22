# Isaeli Vehicle Info

## What is the use of this Repo

This Project is a Simple React Typescript web application designed by Tailwind CSS. 

It gives you details & specs for every private vehicle in Israel given a license plate number and also show an image example of the following type of car considering the year of manufactue.

## Live Application URL

### https://silly-jennings-515de5.netlify.app

This URL has the application deployed in
with help of [Netlify](https://www.netlify.com/) - web deployment platform.

Click on the link to see the application ! 

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**

## Credits

This project was made possible thanks to the following projects and tools.

1. [template-tailwindcss-typescript](https://www.npmjs.com/package/cra-template-tailwindcss-typescript) - A streamlined [Tailwind CSS v3.x](https://tailwindcss.com) template for [Create React App](https://github.com/facebook/create-react-app) in [TypeScript](https://www.typescriptlang.org/).

2. [The Heroku CLI](https://devcenter.heroku.com/) - I used a CORS proxy to avoid “No Access-Control-Allow-Origin header” problems when making an 
API requst from CarsXE API.

3. [axios](https://www.npmjs.com/package/axios) - Making API requsts using 
get method and ".then .catch" syntax.

4. [Ministry of Transport and Road Safety API](https://www.gov.il/he/Departments/DynamicCollectors/private-and-commercial-vehicles?skip=0&mispar_rechev=6099370) - A vehilce info search API with license plate number.

5. [Google Translate - Rapid API](https://rapidapi.com/datascraper/api/google-translate20/) - translating the car manufacture in order to make a request for the car image.

6. [CarsXE API](https://api.carsxe.com) - Supplying this API : make, model and year gave me a way to present the most relevent image for the specific car. 

## License

ORT Hermelin © Rotem Pizanti 2022
