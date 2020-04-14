# xivig
![alt text][logo]
[logo]: https://github.com/xivig/xivig/blob/master/assets/images/Xivig-Logo-favicon.jpg "Xivig Logo"

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