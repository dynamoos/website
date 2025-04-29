pipeline {
	agent any

	environment {
		AWS_ACCOUNT_ID = credentials('fb55360a-287a-4dc9-9fb8-0cf6bcbcd9f5')
		AWS_REGION = 'us-east-1'
		ECR_REPOSITORY = 'dynamoos/web'
		IMAGE_TAG = "${env.BUILD_NUMBER}"
		PORTAINER_ENDPOINT = credentials('portainer-endpoint')
		PORTAINER_API_TOKEN = credentials('portainer-token')
		PORTAINER_ENVIRONMENT = '6'
		PORTAINER_CONTAINER_NAME = 'web'
	}

	stages {
		stage('Checkout') {
			steps {
				checkout scm
			}
		}

		stage('Initial Buildx Setup') {
			steps {
				script {
					sh '''
						docker buildx create --name mybuilder --use || true
						docker buildx inspect --bootstrap
					'''
				}
			}
		}

		stage('Push to ECR') {
			steps {
				script {
					withCredentials([aws(
						accessKeyVariable: 'AWS_ACCESS_KEY_ID',
						credentialsId: 'fb55360a-287a-4dc9-9fb8-0cf6bcbcd9f5',
						secretKeyVariable: 'AWS_SECRET_ACCESS_KEY'
					)]) {
						sh '''
							aws ecr-public get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin public.ecr.aws/x5n8k6p6
							docker buildx build --platform linux/amd64,linux/arm64 -t public.ecr.aws/x5n8k6p6/${ECR_REPOSITORY}:${IMAGE_TAG} --push .
							docker buildx build --platform linux/amd64,linux/arm64 -t public.ecr.aws/x5n8k6p6/${ECR_REPOSITORY}:latest --push .
						'''
					}
				}
			}
		}

		stage('Deploy to Portainer') {
			steps {
				script {
					def filters = "{\"name\":[\"${PORTAINER_CONTAINER_NAME}\"]}"
					def encodedFilters = URLEncoder.encode(filters, "UTF-8")
					def containerUrl = "${PORTAINER_ENDPOINT}/endpoints/${PORTAINER_ENVIRONMENT}/docker/containers/json?all=true&filters=${encodedFilters}"
					def containerResponse = httpRequest(
						url: containerUrl,
						httpMode: 'GET',
						customHeaders: [[
							name : 'x-api-key',
							value: PORTAINER_API_TOKEN
						]],
						validResponseCodes: '200:404'
					)
					def containerId = null
					if (containerResponse.status == 200) {
						def jsonSlurper = new groovy.json.JsonSlurper()
						def jsonResponse = jsonSlurper.parseText(containerResponse.content)
						containerId = jsonResponse[0].Id.toString()
					}
					def recreateUrl = "${PORTAINER_ENDPOINT}/docker/${PORTAINER_ENVIRONMENT}/containers/${containerId}/recreate"
					def recreateResponse = httpRequest(
						acceptType: 'APPLICATION_JSON',
						contentType: 'APPLICATION_JSON',
						requestBody: '{"PullImage": true}',
						url: recreateUrl,
						httpMode: 'POST',
						customHeaders: [[
							name : 'x-api-key',
							value: PORTAINER_API_TOKEN
						]],
						validResponseCodes: '200:404'
					)
				}
			}
		}
	}

	post {
		cleanup {
			sh 'docker buildx rm mybuilder || true'
		}
		success {
			echo 'Pipeline ejecutado con éxito!'
		}
		failure {
			echo 'Pipeline falló en el CI/CD!'
		}
	}
}