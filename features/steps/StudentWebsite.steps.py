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
# ARRANGE - loading webpage in browser
@given(u'that I am viewing the student Web site')
def step_impl(context):
    webpage.load_webpage() #load up the driver

# ACTION = interacting with the webpage in the browser
@when(u'I enter the region as \'{region}\'')
def step_impl(context, region):
    print("sorting out the region")
    webpage.region_selecter.send_keys(region)

@when(u'I enter the machine name as \'{machine_name}\' and submit')
def step_impl(context, machine_name):
    webpage.machine_name_text_field.send_keys(machine_name)
    webpage.machine_name_text_field.send_keys(Keys.RETURN)  # keys return = press enter

#ASSERT
@then(u'the resulting page should show the message \'{message}\'')
def step_impl(context, message):
    # add a little wait in here
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
        chrome_options.add_argument("--use-fake-ui-for-media-stream") # chrome has loads of options - in this case turn off the prompt for the microphone
        chrome_options.add_experimental_option('excludeSwitches', ['enable-logging'])  
        self.driver = webdriver.Chrome(chrome_options=chrome_options)
        self.website = self.driver.get('https://student.conygre.com')
        #add anguar app bucket here
        #self.website = self.driver.get('https://insurancebotstack-codebuilddeploy-le-webappbucket-c5l43o8ditn4.s3.us-east-1.amazonaws.com/index.html')
        delay = 3 #seconds
        WebDriverWait(self.driver, delay).until(EC.presence_of_all_elements_located((By.CSS_SELECTOR, '#machinename')))
        self.region_selector = self.driver.find_element_by_class_name('custom-select')
        self.machine_name_text_field = self.driver.find_element_by_id('machineName')
       # self.number_of_messages = 1
       # self.wait_for_next_message()
       # self.text_input_box = self.driver.find_element_by_id('text-input') # self is equivelent to java this.

#static method - 1 instance of the webpage class - design pattern -singleton
    @classmethod
    def get_instance(cls):
        if cls.instance is None: #if the instance doesnt exist
            cls.instance = WebPage() #create it,,
        return cls.instance #return it

    # def wait_for_next_message(self):
    #     latest_message_from_bot = ''
    #     try:
    #         delay = 3  # this is a timeoout delay in seconds
    #         css_selector = '.message-bot:nth-child(' + str(self.number_of_messages) + ')'
    #         print('waiting for ' + css_selector)
    #         WebDriverWait(self.driver, delay).until(EC.presence_of_element_located((By.CSS_SELECTOR, css_selector)))
    #         time.sleep(2) # needs a brief pause to allow the chatbot time to put some content in the field
    #         latest_message_element = self.driver.find_element_by_css_selector(css_selector=css_selector)
    #         latest_message_from_bot = latest_message_element.text
    #         print('message received: ' + latest_message_from_bot)
    #         self.number_of_messages=self.number_of_messages+2 # it is two because every other one is from the human
    #     except TimeoutException:
    #         print("Loading took too much time!")
    #     return latest_message_from_bot


    # def get_current_message_again(self):
    #     css_selector = '.message-bot:nth-child(' + str(self.number_of_messages-2) + ')'
    #     print('trying again for ' + css_selector)
    #     latest_message_element = self.driver.find_element_by_css_selector(css_selector=css_selector)
    #     latest_message_from_bot = latest_message_element.text
    #     print('message received: ' + latest_message_from_bot)
    #     return latest_message_from_bot


webpage = WebPage.get_instance()
