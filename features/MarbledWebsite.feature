# Created by Danielle Neill at 15/10/2021

Feature: MarbledWebsite
    As a student
    I want to load my website on the browser
    So that I know it works

Scenario: I enter invalid login
Given that I am viewing the marbled Web site
When I click the navbar link 'login'
And when I enter the username as 'Dan'
And when I enter the password as 'Dan' 
And when I click the button 'submit'
Then the user page should display 'Invalid Credentials'