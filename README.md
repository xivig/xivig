# xivig

![alt text](https://github.com/xivig/xivig/blob/master/assets/images/android-icon-72x72.png "Xivig Logo")
 

## Jekyll configuration

**In Windows**

1. Install Ruby from ruby installer following ruby website
2. check ruby installed or not by the following command:
 `ruby -v`
3. Start Command Prompt with Ruby from start menu
4. create a directory by the following command
 ` md jekyll-project `
4. goto you project directory using
 ` cd jekyll-project `
5. Run the following commands to install jekyll and bundler:
`gem install jekyll bundler`
7. check jekyll installed or not by the following command:
   `jekyll -v`
8. create a new directory for serving the website by jekyll using following command:
 `jekyll new blog`
9. To start the site run the following command:
` jekyll serve `
10. Done!

**In MacOS**

1. Ruby is generally installed, so follow the steps from step 4
2. Open the terminal
3. create a directory by the following command
 ` mkdir jekyll-project `
4. goto you project directory using
 ` cd jekyll-project `
5. Run the following commands to install jekyll and bundler:
`gem install jekyll bundler`
6. check jekyll installed or not by the following command:
   `jekyll -v`
7. create a new directory for serving the website by jekyll using following command:
 `jekyll new blog`
8. To start the site run the following command:
` jekyll serve `
9. Done!

**In Linux/Ubuntu**

1. Open the terminal
2. Run the following command `sudo apt-get install ruby`
3. check Ruby is installed or not by the following command `ruby  -v`
4. create a directory by the following command
 ` mkdir jekyll-project `
5. goto you project directory using
 ` cd jekyll-project `
6. Run the following commands to install jekyll and bundler:
`gem install jekyll bundler`
7.If you get an error like: "Can't install a Ruby package: Failed to build gem native extension"
Follow the steps below:
8. Run the following command
`sudo apt-get install libmagickwand-dev` or `sudo apt-install ruby-dev` following the stackoverflow instruction:
[stackoverflow](https://askubuntu.com/questions/600068/cant-install-a-ruby-package-failed-to-build-gem-native-extension)

Now run: `sudo gem install jekyll` this time it will be fine

9. check jekyll installed or not by the following command:
   `jekyll -v`
10. create a new directory for serving the website by jekyll using following command:
 `jekyll new blog`
11. To start the site run the following command:
` jekyll serve `
12. Done!

## How to create github page

1. login to your github account
2. create a new Repository named "xivig" as for me
3. Following the link below you wull get your first step [Create Github Pages](https://help.github.com/en/github/working-with-github-pages/creating-a-github-pages-site)
4. open git bash and type the following commands
5. ``` git clone https://github.com/xivig/xivig.git
    git remote -v
    git status 
    ```

6. Create a new file named index.html as follows: `touch index.html && echo "Welcome to github page" > index.html`
7. create a readme file as follows: `echo "# Xivig" >> README.md`
8. git add all files to staging area as follows:
```git add -A
git commit -m 'readme.md file edited by xivig'
git push -u origin master 
```
9. Follow this link and you will get a list of all common commands used in git in brief 
[Yisxa Github command list page](https://github.com/yisxa/git-essential-command)
10.git creating a branch
`git branch branch_name`
11. git switching branch
`git checkout branch_name`
or single step for creating branch and checkout
`git checkout -b branch_name`
12. create a branch of your repo for github page by the following:
` git checkout -b gh-pages` # here name matters
13. Now run the following commands for push master repository from the command line and copying the source files to the branch
```
git push origin gh-pages

```
14. Now type the following address to the browser
` https://xivig.github.io/xivig/`
15. Now will see a living breathing website hosted on github
16.Done!



