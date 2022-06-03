# employeeOrganization
Spring Boot Dev +  Thymeleaf HTML/CSS + Spring Web MVC  + Spring Data JPA(Hibernate) + MariaDB 

# Maria DB 10.6.x 
## Create docker container name
sudo docker run --name employee -e MYSQL_ROOT_PASSWORD=root -p 3307:3306 -d mariadb
## Inspect address
sudo docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' employee
## run mysql bash
sudo docker exec -it employee bash
