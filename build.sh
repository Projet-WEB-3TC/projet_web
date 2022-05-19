cd ./frontend
npm i
cd ../backend
npm i
cd ../docker
docker-compose -f docker-compose-dev.yml -p dev --env-file dev.env up
