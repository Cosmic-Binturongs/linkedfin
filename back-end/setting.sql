/* To run:
In your terminal (root of backend) run the following:
     psql -f settings.sql
Replace DB_NAME, DB_USER, DB_PASSWORD
With values in .env
*/

CREATE DATABASE linkedfin;
CREATE USER linkedfin_ga WITH PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE linkedfin TO linkedfin_ga;