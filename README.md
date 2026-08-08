# TaskFlow DevOps

TaskFlow is a full-stack task and project management application built to demonstrate both modern web development and production-oriented DevOps practices.

The project starts as a Next.js, Express, and PostgreSQL application and will progressively be containerized, automated, deployed to Kubernetes on AWS, and monitored using modern observability tools.

## Tech Stack

### Application

* Next.js
* TypeScript
* Express.js
* PostgreSQL
* Tailwind CSS

### DevOps & Cloud

* Docker
* Docker Compose
* GitHub Actions
* Kubernetes
* Helm
* Terraform
* AWS

  * ECR
  * EKS
  * Application Load Balancer
  * CloudWatch
* Prometheus
* Grafana

## Planned Architecture

```text
Developer
    |
    v
GitHub
    |
    v
GitHub Actions
    |
    +---- Tests
    |
    +---- Docker Build
              |
              v
           AWS ECR
              |
              v
           AWS EKS
              |
              v
      Kubernetes + Helm
              |
              v
      AWS Load Balancer
              |
              v
         Application


Terraform
    |
    +---- AWS Infrastructure


Monitoring
    |
    +---- Prometheus
    +---- Grafana
    +---- CloudWatch
```

## Application Architecture

```text
Next.js Frontend
       |
       | REST API
       v
Express.js Backend
       |
       v
PostgreSQL
```

## Project Structure

```text
taskflow-devops/
├── frontend/          # Next.js frontend
├── backend/           # Express API
├── k8s/               # Kubernetes manifests
├── helm/              # Helm charts
├── terraform/         # AWS infrastructure
├── monitoring/        # Prometheus / Grafana configuration
├── .github/
│   └── workflows/     # CI/CD pipelines
├── docker-compose.yml
└── README.md
```

Some infrastructure directories will be added as the project progresses.

## Planned Features

* Create projects
* Create tasks
* View project tasks
* Update task status
* Delete tasks
* Task dashboard
* REST API
* PostgreSQL persistence

## DevOps Roadmap

### Phase 1 — Application

* [x] Initialize Next.js frontend
* [x] Initialize Express backend
* [ ] Configure PostgreSQL
* [ ] Build REST API
* [ ] Build frontend

### Phase 2 — Containers

* [ ] Dockerize frontend
* [ ] Dockerize backend
* [ ] Run PostgreSQL with Docker
* [ ] Configure Docker Compose

### Phase 3 — CI/CD

* [ ] Configure GitHub Actions
* [ ] Run automated tests
* [ ] Build Docker images automatically

### Phase 4 — Kubernetes

* [ ] Create local Kubernetes cluster
* [ ] Deploy frontend
* [ ] Deploy backend
* [ ] Deploy PostgreSQL
* [ ] Configure Services
* [ ] Configure Ingress
* [ ] Configure health checks
* [ ] Configure resource limits

### Phase 5 — Helm

* [ ] Create Helm chart
* [ ] Configure environment-specific values
* [ ] Deploy application using Helm

### Phase 6 — AWS & Terraform

* [ ] Provision AWS infrastructure with Terraform
* [ ] Configure ECR
* [ ] Configure EKS
* [ ] Push Docker images to ECR
* [ ] Deploy application to EKS
* [ ] Configure AWS Load Balancer

### Phase 7 — Observability

* [ ] Configure Prometheus
* [ ] Configure Grafana
* [ ] Configure CloudWatch
* [ ] Monitor application and Kubernetes metrics

## Goal

The goal of this project is to build a production-style deployment workflow while learning and demonstrating:

* Full-stack application development
* Containerization
* CI/CD
* Infrastructure as Code
* Kubernetes orchestration
* AWS cloud infrastructure
* Monitoring and observability

## Status

🚧 Work in progress
