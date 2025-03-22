FROM openjdk:21
EXPOSE 8890
ADD target/mockproject-0.0.1-SNAPSHOT.jar app.jar

ENTRYPOINT ["java", "-jar", "/app.jar"]