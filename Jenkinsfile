pipeline {
    agent any

    environment {
        // Define credentials using Jenkins credentials binding
        MONGODB_URI = credentials('MONGODB_URI')
        JWT_SECRET = credentials('JWT_SECRET')
        FIREBASE_API_KEY = credentials('FIREBASE_API_KEY')
        FRONTEND_BASE_URL = 'http://localhost:3000'
        BACKEND_BASE_URL = 'http://localhost:5000'
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
                    // Write environment variables to .env file
                    writeFile file: '.env', text: """
                        MONGODB_URI=${MONGODB_URI}
                        JWT_SECRET=${JWT_SECRET}
                        FIREBASE_API_KEY=${FIREBASE_API_KEY}
                        FRONTEND_BASE_URL=${FRONTEND_BASE_URL}
                        BACKEND_BASE_URL=${BACKEND_BASE_URL}
                    """.trim()
                    
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
            node {
                echo 'Pipeline execution completed.'
                script {
                    try {
                        bat 'docker-compose -f docker-compose.yml down'
                    } catch (Exception e) {
                        echo "Warning: Failed to stop containers: ${e.message}"
                    }
                }
            }
        }
        failure {
            node {
                echo 'Pipeline failed! Cleaning up...'
            }
        }
        success {
            node {
                echo 'Pipeline succeeded!'
            }
        }
    }
}
