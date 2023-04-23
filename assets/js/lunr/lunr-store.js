var store = [{
        "title": "ALB Ingress Controller and Cost Optimization",
        "excerpt":"As we know ALB Ingress Controller creates Load Balancer per k8s ingress resource by default and it’s costly, roughly one ALB costs ~$24 + extra per GB of processed data monthly. In order to save money there is a possibility to have use One ALB for all your k8s ingress...","categories": ["aws","alb","k8s","ingress"],
        "tags": ["aws","k8s","alb"],
        "url": "/aws/alb/k8s/ingress/2023/04/16/alb-ingress-and-cost.html",
        "teaser": null
      },{
        "title": "RDS access via kubernetes as jump host",
        "excerpt":"Sometimes there is a need to connect to RDS in private VPC subnet having an access to EKS. It can be achieved with help of socket container deployed on top of k8s and setting up the tunnel with help of kubectl port-forward Deploy socat pod apiVersion: v1 kind: Pod metadata:...","categories": [],
        "tags": ["aws","k8s","eks","jump host","socat"],
        "url": "/2023/04/26/rds-access.html",
        "teaser": null
      },{
        "title": "AWS ALB Ingress Advanced Request Routing",
        "excerpt":"AWS Application Load Balancer allows traffic to be routed based on HTTP header, HTTP request method, query string, source IP, in addition host and path-based routing. As it turns out, configuring a k8s ingress can be a bit tricky, as the Official documentations does not provide good examples. In my...","categories": [],
        "tags": ["aws","k8s","eks","ingress","alb"],
        "url": "/2023/04/28/alb-ingress-advanced-routing.html",
        "teaser": null
      },{
        "title": "amd64/x86_64 containers on Apple Silicon (arm64) overview",
        "excerpt":"Introduction Apple Silicon marks a transformative shift from Intel x86 to ARM architecture, led by the M1 chip. This empowers Apple with greater control over hardware and software integration, enhancing performance and energy efficiency. Many of us use tools like Docker Desktop, Rancher Desktop, Podman Desktop, Lima, and others for...","categories": [],
        "tags": ["arm","apple silicon","linux","container","qemu","binfmt_misc","docker"],
        "url": "/2024/01/11/amd64-on-arm64.html",
        "teaser": null
      },{
        "title": "Modern Deployment Patterns",
        "excerpt":"A Guide to Modern Deployment Patterns Introduction In the fast-paced world of software development, efficient and reliable deployments are critical. DevOps and Architects face the challenge of minimizing downtime, ensuring stability, and adapting to ever-changing infrastructure landscapes. This guide explores several prominent deployment patterns, empowering you to choose the most...","categories": [],
        "tags": ["DevOps","Deployment","Architecture"],
        "url": "/2024/02/20/deployment-patterns.html",
        "teaser": null
      },{
        "title": "Reverse Port Forwarding",
        "excerpt":"Connecting from a Kubernetes to a Service running on your local machine Introduction Sometimes you need to connect from a service running in a Kubernetes cluster to a service running on your local machine. This can be useful for debugging, testing, or development purposes. In this article, we’ll explore how...","categories": [],
        "tags": ["devops","k8s","kubernetes","port-forward","reverse","ssh","netcat","kubectl","networking"],
        "url": "/2024/03/05/reverse-port-fwd.html",
        "teaser": null
      }]
