![Server Diagram](https://drive.google.com/file/d/1K4HKwJ6CU-n6l6hRKIaej_ID9TyQPOAz/view?usp=sharing)

# chat-server
Built with nodejs &amp; socket.io

 npm install
 
 npm start

# terraform command
 terraform plan -out config.tfplan

# create redis cluster
 kubectl exec -it redis-cluster-0 -- redis-trib create --replicas 1 $(kubectl get pods -l app=redis-cluster -o jsonpath='{range.items[*]}{.status.podIP}:6379 ')
