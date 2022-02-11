FROM openjdk:8-jdk-alpine
ARG JAR_FILE=target/app-seguradora-veiculos-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} consultoria_app.jar
ENTRYPOINT ["java","-jar","/consultoria_app.jar"]