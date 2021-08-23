FROM amazoncorretto:11
COPY ./target/*.jar /app/
ADD ./startup.sh /app
RUN chmod +x /app/startup.sh
ENTRYPOINT ["/app/startup.sh"]
EXPOSE 28888