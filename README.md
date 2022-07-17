# Export excel file with Django & React

![Screenshot from 2022-07-17 18-15-28](https://user-images.githubusercontent.com/40750581/179411001-aa93d0b0-4d92-40ee-94ce-1ab56cb4f50c.png)

### Installation:

##### -> You do not need to install any kind of database

##### System Dependencies Backend:
1. Install git on Linux:  
`sudo apt-get install -y git`

2. Clone or download this repo.

3. Inside the backend folder Create a virtual environment on Linux:  
`python3 -m venv venv`

4. Activate the virtual environment on Linux:
`source venv/bin/activate`

5. Install requirements in the virtualenv:  
`pip install -r requirements.txt`

6. Database Migrations:
  `python manage.py makemigrations`
  `python manage.py migrate`
  
7. Create Super User:
  `python manage.py createsuperuser`
  
8. Run the server:
`python manage.py runserver`

##### System Dependencies frontend:
1. Inside the frontend folder write this up:
  `npm i`
  
2. Run the server:
`npm start`
