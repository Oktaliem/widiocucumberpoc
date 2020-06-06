<h1 align="center"><img src="https://user-images.githubusercontent.com/26521948/72658109-63a1d400-39e7-11ea-9667-c652586b4508.png" alt="Apache JMeter logo" /></h1>
<h4 align="center">SOFTWARE TESTING ENTHUSIAST</h4>
<br>

# Demo WebdriverIO + Cucumber + Typescript

## Feature
- Page Object Model
- HTML report with picture attachment each step
- Cross browser testing
- Run in Selenium Grid + Docker + VNC

## Preconditon
- Docker installed
- VNC Viwer installed
- Node.js installed
- Npm installed

## Set Up System Under Test
```
$ wget https://raw.githubusercontent.com/sameersbn/docker-akaunting/master/docker-compose.yml
$ docker-compose up
```
## How to run the test
```
1. Open repository via Visual Studio Code

2. Start Selenium Grid and node in Docker
$  npm run selenium:vnc

3. Open VNC to this address 127.0.0.1:5900 & 127.0.0.1:5901
4. Run the test
$ npm run test:vnc

5. HMTL report will be opened automatically after test.

```


## Demo in Youtube - Ubuntu
   <a href="https://www.youtube.com/watch?v=PO3JFb0mRvY" target="_blank"><img src="https://user-images.githubusercontent.com/26521948/72658109-63a1d400-39e7-11ea-9667-c652586b4508.png" 
   alt="CLICK HERE" width="140" height="80" border="10" /></a>



## References
- Thanks to : [Labs42](https://medium.com/labs42/web-automation-for-every-project-44fba3a7093b)
- This repository is a modification version of : [Original Source](https://github.com/labs42io/web-automation)