# WebPage for OnlyInfo

Using Bootstrap implement the following featrues

## Features of the Page

### URL 
The URL of the page is https://onlyinfo/chat

### Soft white coloured backgroup

The backgroup of the page is soft white.

### Text input box

The text inpput box is located in the centre of the page along the bottom. It will be 60% the width of the screen. It is a light grey that has a base text of 'Ask a question'. The corners of the text input box are rounded. The text input will be sent to the back end via a POST request. The main key will be 'question' and the value will be a string of the input text.

### Text response Area

From the top of the text input box to the bottom of the drop down menu. This area will display the response from OnlyInfo in a messenger style conversation. The text that has been typed in the text input box will be in bold, whereas the text that is supplied will be in normal text. The text response will be supplied from the backend via a GET request. This will be in the form of a  JSON object, where the main key is 'response' and the value is a string of the response.

### Drop down menu

The Drop down menu is located along to top of the page. In the Top Right corner. It automatically displays the current option that is selected, This will initiall be 'All'. Once clicked the menu will drop down and display the following options: UnityWater, Sunshine Coast Council, Moreton Bay Council. Once another option is selected the menu will now display the new option.

### Side Bar

The Side bar will be a small icon in the top left of the page. Once clicked it will open a side bar which has a small escape icon. This will be a small window that will be 20% the width of the screen. It will be located on the left side of the screen. Pushing everything else to the to right. The side bar will have a list of all the questions that have been asked. The instance of each question will be saved. When a question is clicked it will open a new window of OnlyInfo that will display the instance of the question and the response.
