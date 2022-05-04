/* To run:
In your terminal (root of backend) run the following:
     psql -f settings.sql
Replace DB_NAME, DB_USER, DB_PASSWORD
With values in .env
*/
import os
from dotenv import load_dotenv


CREATE DATABASE linkfin;
CREATE USER linkfin_ga WITH PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE linkfin TO linkfin_ga;