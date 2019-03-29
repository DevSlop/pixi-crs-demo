# pixi-crs-demo - A Pixi/CRS Playground
DevSlop repository to demonstrate Pixi in combination with the OWASP Core Rule Set (docker-compose.yaml).

This is a Pixi - CRS playground.

Start all components in one command and play with the intentionally vulnerable web application Pixi and the WAF OWASP Core Rule Set...

## Instructions

### Clone the git repository:
git clone https://github.com/DevSlop/pixi-crs-demo.git

### Start Pixi and the OWASP Core Rule Set
cd pixi-crs-demo  

docker-compose up -d

### Play with Pixi and the OWASP Core Rule Set

To access Pixi: http://localhost:8000  
To access Pixi through CRS: http://localhost:8001
  
To access the error.log (one example):  
docker-compose exec crs cat /var/log/apache2/error.log

More instructions coming soon...

## Further Reading

### Description of the CRS Docker Image (franbuehler/modsecurity-crs-rp)

https://coreruleset.org/20181212/core-rule-set-docker-image/  

### Description of CRS in a CI Pipeline

https://coreruleset.org/20180619/the-core-rule-set-as-part-of-devops-ci-pipeline/  
