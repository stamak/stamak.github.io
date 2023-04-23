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
      }]
