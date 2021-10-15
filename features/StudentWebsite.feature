# Created by Danielle Neill at 15/10/2021
# Feature: Marbled Duck Website
#   As a student
#   I want to open my webpage on the broswer
#   So that I know it loads

Feature: StudentWebsite
    As a student
    I want to find my machine on the student website
    So that I can turn it on

Scenario: The student machine doesn't exist
Given that I am viewing the student Web site
When I enter the region as 'ireland'
And I enter the machine name as 'test1' and submit
Then the resulting page should show the message 'No machine can be found matching the name test1. Please check the machine name and domain name'