/* To run:
In your terminal (root of backend) run the following:
     psql -f settings.sql
Replace DB_NAME, DB_USER, DB_PASSWORD
With values in .env
*/

DROP DATABASE linkfin;
CREATE DATABASE linkfin;
CREATE USER admin WITH PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE linkfin TO admin;