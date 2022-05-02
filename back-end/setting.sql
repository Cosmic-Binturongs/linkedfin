/* To run:
In your terminal (root of backend) run the following:
     psql -f settings.sql
Replace DB_NAME, DB_USER, DB_PASSWORD
With values in .env
*/

CREATE DATABASE DB_NAME;
CREATE USER DB_USER WITH PASSWORD DB_PASSWORD;
GRANT ALL PRIVILEGES ON DATABASE DB_NAME TO DB_USER;