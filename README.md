<<<<<<< HEAD
![Server Diagram](https://drive.google.com/file/d/1pBQXnviS7I9eUmC4Un1zVFyjn1FliSFZ/view?usp=sharing)
=======
![Server Diagram](https://wakuuenterprises.com/wp-content/uploads/2023/11/mail.jpeg?raw=true "Chat Server Diagram")
>>>>>>> parent of 39f3afbb (Update README.md)

# chat-server
Built with nodejs &amp; socket.io

 npm install
 
 npm start

# terraform command
 terraform plan -out config.tfplan

# create redis cluster
 kubectl exec -it redis-cluster-0 -- redis-trib create --replicas 1 $(kubectl get pods -l app=redis-cluster -o jsonpath='{range.items[*]}{.status.podIP}:6379 ')
