# Medicine Availability
The app is an easy way to search for the medicine you need in your next door pharmacy.

Website:
- [MedicineAvailability](https://medicine-availability.herokuapp.com/)

## User Story 
- As a user (customer), i want to be able to search for a medicine
- As a user (customer), I want to be able to see the medicine info and the price in different pharmacies that have this medicine
- As a user (customer), I want to be able to click on a pharmacy and see the info
- As a user (pharmacist), i should be able to login 
- As a user (pharmacist), I should be able to edit medicine info and the price
- As a user (pharmacist), I should be able to add a new medicine
- As a user (pharmacist), i want to be able to logout


## [Figma Wireframe](https://www.figma.com/proto/DJ1OQGAp2olrWFIymhiccb/Pharmacy-project?node-id=265%3A39&scaling=scale-down)


## Database schema 
![Untitled Diagram](https://user-images.githubusercontent.com/36266244/65016743-ad8d8700-d92d-11e9-997b-e233afa96009.png)

## How to Use our website !! 
 ### In terminal  
 - Clone these repo: 
 ``` 
     git clone https://github.com/someyaaltous/MedicineAvailability.git 
     cd MedicineAvailability
  ```

 - Install node modules:   
 
       npm i
       cd client 
       npm i 
       cd ..

- Create database locally
- Create config.env file in root and put these variables in it:
```
   DATABASE_URL = postgress://{username}:{password}@localhost:5432/{databasename}
   SECRET = {secret}
   ```
- build database table :
```
   node ./server/database/db_bulid.js
 ```
- if you want initial values for database
```
    psql 
    \c {databasename} 
    \i ./server/database/init_values.sql

```
- Run this to start the website:
       
       npm run dev
  
  

## Team member 
- [Sara](https://github.com/sara219)
- [Rawan](https://github.com/95Rawan)
- [Duaa](https://github.com/DuaaH)
- [Yaqoot](https://github.com/yaqootturman)
