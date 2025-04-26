pipeline {
    agent any

    stages {
        stage('Clean Workspace') {
            steps {
                deleteDir()
            }
        }

        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/Nurul577/task-manager.git', branch: 'main'
            }
        }

        stage('Build Docker Containers') {
            steps {
                script {
                    bat 'docker-compose build'
                }
            }
        }

        stage('Run Containers') {
            steps {
                script {
                    bat 'docker-compose up -d'
                }
            }
        }

        stage('Show Running Containers') {
            steps {
                script {
                    bat 'docker-compose ps'
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed.'
        }
    }
}
