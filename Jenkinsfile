pipeline {
    agent any

    environment {
        MONGODB_URI = credentials('MONGODB_URI')
        JWT_SECRET = credentials('JWT_SECRET')
        FRONTEND_BASE_URL = 'http://localhost:3000'
        BACKEND_BASE_URL = 'http://localhost:5000'
        FIREBASE_API_KEY = credentials('FIREBASE_API_KEY')
    }

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
                    // Load environment variables from .env files if they exist
                    if (fileExists('.env')) {
                        load '.env'
                    }
                    
                    // Build the containers
                    bat 'docker-compose -f docker-compose.yml build --no-cache'
                }
            }
        }

        stage('Run Containers') {
            steps {
                script {
                    bat 'docker-compose -f docker-compose.yml up -d'
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
            script {
                bat 'docker-compose -f docker-compose.yml down'
            }
        }
        failure {
            echo 'Pipeline failed! Cleaning up...'
        }
        success {
            echo 'Pipeline succeeded!'
        }
    }
}
