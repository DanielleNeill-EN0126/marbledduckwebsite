from behave import given, when, then
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException
from hamcrest import assert_that, starts_with, contains_string
import time

# SCENARIOS
# ARRANGE - loading marbled duck webpage in browser
@given(u'that I am viewing the marbled Web site')
def step_impl(context):
    webpage.load_webpage() #load up the driver

# ACTION = interacting with the webpage in the browser
@when(u'I click the navbar link \'{login}\'')
def step_impl(context, login):
    webpage.navlink_selecter.click()

@when(u'when I enter the username as \'{username}\'')
def step_impl(context, username):
    webpage.username_text_field.send_keys(username)
    webpage.username_text_field.send_keys(Keys.RETURN)  

@when(u'when I enter the password as \'{password}\'')
def step_impl(context, password):
    webpage.password_text_field.send_keys(password)
    webpage.password_text_field.send_keys(Keys.RETURN)  

@when(u'when I click the button \'{submit}\'')
def step_impl(context, submit):
    webpage.password_text_field.click(submit)

#ASSERT
@then(u'the user page should display \'{message}\'')
def step_impl(context, message):
    WebDriverWait(webpage.driver, 3).until(EC.alert_is_present())
    alert = webpage.driver.switch_to.alert
    print(alert.text)
    assert_that(alert.text, contains_string(message))

# class to represent the webpage to visit
class WebPage:

    instance = None

    def __init__(self):
       pass

    def load_webpage(self):
        chrome_options = Options()
        chrome_options.add_argument("--use-fake-ui-for-media-stream") 
        chrome_options.add_experimental_option('excludeSwitches', ['enable-logging'])  
        self.driver = webdriver.Chrome(chrome_options=chrome_options)
        self.website = self.driver.get('https://student.conygre.com') #add anguar app bucket here
        #delay = 3 
        #WebDriverWait(self.driver, delay).until(EC.presence_of_all_elements_located((By.CSS_SELECTOR, '#machinename')))
        time.sleep(5)
        self.navlink_selector = self.driver.find_element_by_id('login-nav-link')
        self.username_name_text_field = self.driver.find_element_by_id('username')
        self.password_name_text_field = self.driver.find_element_by_id('password')
        self.submit_selector = self.driver.find_element_by_id('login-submit')

    @classmethod
    def get_instance(cls):
        if cls.instance is None: 
            cls.instance = WebPage() 
        return cls.instance 

webpage = WebPage.get_instance()
