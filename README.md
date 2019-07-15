the differenc between docker-compose.yml and dockerrun.aws.json is 
dcy is how to build dockerfile and aws.docker is pull the image from docker hub with the name and use them for each of these different container 

elastic beantalk --> Amazon elastic container services (ecs) task definition --> instructions on how to  run a single container


"essential": false // if true when this container crash all the remain container is down too

note that: Dockerrun.aws.json at least on container must be marked as essential is true

recommend: quick validation Json file Dockerrun.aws.json before deploy

postgres service ==>  AWS relational database service(RDS)
redis cache --> AWS elastic Cache service

there is a couple of very good reasons that we might choose to use these outside services(postgres, redis) rather than creating our own container manually and using our own container for hosting redis or our postgres instances.

- Automatically creates and maintain Redis instances for you
- Super easy to scale
- Built in logging + maintainance
- Probaly better security than what we can do
- easy to migrate off of eb with

RDS
- Automate backups and rollbacks