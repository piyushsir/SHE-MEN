pipeline
{
    agent any
    tools{nodejs "node"}
    stages
    {
        stage('Build')
        {
            steps
            {
                git 'https://github.com/piyushsir/SHE-MEN.git'
                bat 'npm install'
            }
        }
        stage('Build docker image')
        {
            steps
            {
                script
                {
                    bat 'docker build -t piyush1048/goodbuy:0.0.4.RELEASE .'
                }
            }
            
        }
        stage('Push image to dockerhub')
        {
            steps
            {
                script
                {
                    withCredentials([string(credentialsId: 'dockerhub-pwd', variable: 'dockerhubpwd')]) {
                       // some block
                    }
                    bat 'docker login -u piyush1048 -p {dockerhubpwd}'
                    bat 'docker push piyush1048/goodbuy:0.0.4.RELEASE'
                }
            }
            
        }
    }
}