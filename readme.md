# DevOps course project

Vi beslöt oss för att skapa en simpel app med hjälp av Angular för projektet. Appen har egentligen ingen riktig funktionalitet, utan är mera bara där för att demonstrera hur grunderna med CI & CD fungerar.

Då man öppnar en pull request i GitHub kommer en build i AWS CodeBuild att snurra igång, och ifall den slutförs utan några errors är det möjligt att "merge to master". Under builden körs ett antal test på appens olika komponenter för att säkerställa att allt är som det ska.

När man mergear koden till master kommer pipelinen i AWS CodePipeline att starta. Pipelinen består av tre steg (stages), varav den första är en "source"-stage. Med andra ord kommer alltså pipelinen hämta koden från GitHub och sedan fortsätta till nästa stage, som är en "build"-stage. 
I "build"-stagen kommer pipelinen starta upp en Linux-instans med direktiv från en "buildspec"-fil. Då koden kompilerats och gått igenom alla definerade steg i instruktionsfilen kommer pipelinen att gå till nästa stage, det vill säga en "deploy"-stage. 
"Deploy"-stagen är det sista steget i pipelinen, och då kopieras den kompilerade koden till en S3 bucket, som i princip är en sorts filserver. Bucketen är inställd att fungera som en "static website host", den kommer alltså att tillåta användare att komma åt appen via en URL.

GitHub repository:
https://github.com/filipnykanen/devops2019

Appen är tillgänglig via den här adressen:
http://devops-project-bucket.s3-website.eu-central-1.amazonaws.com/
