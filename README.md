<a name="readme-top"></a>

<br />

<h3 align="center">Nawy Technical Task</h3>
 


## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/aya2811/Nawy-task.git
   ```
2. cd backend
2. Install NPM packages
   ```sh
   npm install
   ```
4. Create `.env` file and enter your Database URL
   ```js
   MONGODB_URI="mongodb+srv://<username>:<password>@cluster0.t4otkuz.mongodb.net/apartments?retryWrites=true&w=majority"
   ```
5. Run backend and the server will be running on `8000`
   ```sh
   npm run dev   
   ```
6. cd ../frontend 
7. Install NPM packages
   ```sh
   npm install
   ```
8. Run Frontend and the frontend will be running on `http://localhost:3000/`
   ```sh
   npm run dev
   ```
9. cd ../mobile 
10. Install NPM packages
   ```sh
   npm install
   ```
11. Run mobile app and the App will be running 
   ```sh
   npx expo start
   ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Backend

#### Apartment Model

* _id: `string`
*  number: `number`
*  floor: `number`
*  block: `number`
*  street: `string`
*  district: `string`
*  city:`string`

#### APIs

* POST /apartment/add `To add a new apartment`:
    * Body:
            `number`
            `floor`
            `block`
            `street`
            `district`
            `city`

* GET /apartment/all `To get all apartments`

* GET /apartment/:id `To get details of specific apartment`
    
   

<p align="right">(<a href="#readme-top">back to top</a>)</p>



