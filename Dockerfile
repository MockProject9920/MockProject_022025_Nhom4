FROM openjdk:17-jdk-slim
ARG JAR_FILE=target/*.jar
WORKDIR /app
COPY target/insurance-0.0.1-SNAPSHOT.jar app.jar
CMD ["java", "-jar", "app.jar"]