![Server Diagram](https://wakuuenterprises.com/wp-content/uploads/2023/11/mail.jpeg?raw=true "Chat Server Diagram")

# chat-server
Built with nodejs &amp; socket.io

 npm install
 
 npm start

# terraform command
 terraform plan -out config.tfplan

# create redis cluster
 kubectl exec -it redis-cluster-0 -- redis-trib create --replicas 1 $(kubectl get pods -l app=redis-cluster -o jsonpath='{range.items[*]}{.status.podIP}:6379 ')
