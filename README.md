Manually update *production*

    cd /home/gitetantejeanne/
    git pull
    (!wip!)

### How to start services separately
Database (MongoDB)

    docker build -t mongodb-docker .
    docker run -p 27017:27017 --name mongodb -d mongodb-docker

Client (ReactJS)

    docker build -t react-docker .
    docker run -it --rm -p 5000:5000 --name react -d react-docker

Server (Express)

    docker build -t express-docker .
    docker run -p 3000:3000 --name express -d express-docker


