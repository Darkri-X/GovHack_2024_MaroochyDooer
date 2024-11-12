# Webpage for EcoInsight
Use bootstrap to implement the following features.
The data is selected from the .jsfile that is already in the folder './data.js'. This cannot be accessed via the fetch function, and can only be accessed locally.
data.json is designed so that there is a dictionary of dictionaries of lists. 
`data = {dataset: {Question: [], Answer: []}}`
Each of these features will have its own css styling class. 
## Features
### Background
The Background Should be soft white in colour. 
### Data Selector Drop Down Menu
This drop down menu is located in the top right of the page in the same row as the side bar button and icon. This drop down menu starts with the first dataset in the data.json, then when pressed as the option to select the other datasets. When one is selected the options go away leaving the initial menu however with the name of the selected dataset. 
### Question Drop Down Menu
The question drop down menu is 60% the width of the page and located at the very bottom of the page. It opens up towards the top of the screen. In a colour that is similar and compliments the off white used for the background. This dropdown menu will always display 'Questions'. When the dropdown menu is selected it will display the list of questions for the data set that has been selected by the Data Selector Drop Down Menu. Once a question is selected the Question Drop Down Menu the menu will return to its original state. The question that was selected will be printed in the text response area.
### Text Response Area
The text response area will extend from the top of the Question Drop Down Menu to the bottom of the top row and will be 60% the width of the page. When a question is printed, the text will be right aligned and only go as far as 80% to the left of the Text Response Area. The question text will be surrounded by a message bubble so that its background is a different colour and the edges are rounded. The Answer that corresponds to the same index of the question will be selected from the answers list of that same data sets dictionary. The answer will be displayed in with left aligned text and only go as far as 80% of the way across to the right of the text response area. This text will have no background colour.  
### Side Bar
The Side bar will be a small icon in the top left of the page. It has a maburger bar icon. Once clicked it will open a side bar which has a small escape icon. This will be a small window that will be 20% the width of the screen. It will be located on the left side of the screen. Pushing everything else to the to right. The side bar will have a list of all the questions that have been asked. 
### Icon
The icon should be in the tab, and along the top row of the with the features, it will be just to the right of the side bar button. The icon comes from the path '../components/images/QuintanIcon.png'