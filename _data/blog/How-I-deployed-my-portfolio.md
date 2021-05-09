---
template: BlogPost
path: '/How-I-deployed-my-portfolio'
date: 2020-02-20T07:08:53.137Z
title: 'How I deployed my portfolio'
thumbnail: 'assets/MyPortfolio.webp'
metaDescription: 'How I deployed my portfolio'
---
# 1. Introduction
Hi,
this a simple note to remember how i deployed my personal portfolio.


# 2. Why I chose this solution
I decided to develop my personal portfolio using GatsbyJs mainly for these reasons:
- Hosting is very cheap (completely free on Github)
- The website is static and that means that is very fast compared with websites developed with CMS like wordpress
- I found a very good documentation on the official websites
- I loved that template as soon as I saw it 

# 3. Let's prepare everything
To be as clear as possible I decided to write an ordered list.
1. Download GIT from [here](https://git-scm.com/downloads)
2. Download Nodejs [here](https://nodejs.org/it/download/)
3. Install GIT
4. Install Nodejs
5. Create a folder where you prefer
6. Right Clik and select `GIT Bash Here`
7. Find your favourite template on the [official website](https://www.gatsbyjs.org/starters?v=2) and save the url written under the picture of the project
8. Create e new **public** repository in Github following this path `<yourUsername>.github.io` and copy the url of the project
9. Follow these commands in order 

# 4. Follow these simple commands
1. `gatsby new <nomeProgetto> <urlDelTemplateScelto>` 
>This will create a folder named `nomeProgetto` with a lot of files needed for your websites

2. `cd <nomeProgetto>` Remember to change <nomeProgetto> with the name of the project that you have chosen before
>This will change the working directory of the program

3. ` git remote remove origin` generally is not neded but anyway to prevent problems launch it 
4. `git remote add origin <urlOfYourGithubProject>` 
> This command is very important because it will connect your local website with the cloud. Check that the url is right typing `git remote -v` 

5. `git branch -m develop`

> With this command we are creating a branch to store our "developing" files, in the other branch there will be the website

6. `git push -u origin develop` With this command we are going to save our building file 
7. `npm install gh-pages --save-dev` This is the command used to install the plugin that will "send" your website to github cloud
8. Now we need to edit the file named `package.json` adding this line inside of the group scripts. At the end you will have something like this
``` Javascript
{
[...other code...]
  "scripts": {
    "deploy": "gatsby build && gh-pages -d public -b master"
    [...other code...]
  }
  [...other code...]
}
```
9. `npm run deploy` to send your website in the cloud

#5. Other useful commands 
Remember to open GIT bash directly in the folder of your project
- `gatsby develop` to check in real time the changes running your website on a local server, after editing never forget to run
- `npm run deploy` to send the new version of your website in the cloud

