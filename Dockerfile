FROM openjdk:8-jdk-alpine

WORKDIR /app

COPY . /app

RUN apk add --no-cache bash

RUN apk add --no-cache maven

RUN /bin/sh -c "./mvnw clean package -DskipTests"

ENTRYPOINT ["java","-jar","/app/target/app-seguradora-veiculos-0.0.1-SNAPSHOT.jar"]