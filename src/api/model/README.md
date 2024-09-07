# Data Model
There are 3 tables which split our data into there respective challenges, that being Sunshine Coast Council, Moreton Bay Council and Unity Water.

Of the data we will use for each challenge we aim to answer `1-3` questions for this prototype by generating a relevant response through the addition of context given by each of the repective datasets. This will allow each response to be tailored to the most current data available.

## Sunshinne Coast Council

### Example Question

_How has the water quality changed at the Maroochy river between July 2019 and July 2020?_

### Prompt breakdown

#### 1. Context Filter`Maroochy River`

**Prompt:** _How has the water quality changed at the `Maroochy river` between July 2019 and July 2020?_

From the `Sunshine Coast Council` dataset we will use the `Maroochy River` dataset.

#### 2. Context Filter `water quality`

**Prompt:** _How has the `water quality` changed at the Maroochy river between July 2019 and July 2020?_

Filter the `Maroochy River` dataset to only include water quality data.

#### 3. Context Filter `Between July 2019 and July 2020`

**Prompt:** _How has the water quality changed at the Maroochy river `between July 2019 and July 2020`?_

Of the water quality data, filter the data to only include data from July 2019 and July 2020.

#### 4. Plot the data to show the change in water quality over time

Plot the data to show the change in water quality over time.

Prompt `ChatGPT` to give a brief summary of the data. and some context to what the data may mean. This may include:

- Explain what `water quality` is and how it is measured.
- give a brief breakdown of how to read this particular graph.
- Tips on how to reduce your personal impact on the environment/water quality.

## Moreton Bay Council

## Unity Water