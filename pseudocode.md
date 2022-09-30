
1. BEGIN
2. Create DOM elements dynamically
3. Use ID of main div in HTML to populate weather data
4. Create variables for the correspodnding values from the weather data to display
5. set values of created variables(p tag and img variable only) as empty strings
6. append created variables to the 'main' div 
7. END

1. BEGIN
2. Create Variables to display values
2. Variables:
    -header: header/title
        -createElement('p')
    -form:(to enter zipinfo)
        -createElement('input')
        -assign placeholder
        -give name and id
    -button:to submit zipcode addEventlistener
        -createElement('button')
        -give name and id
    -city:display city
       -createElement('p')
       -give name and id
    -kTemp:temperature in kelvin    
        -createElement('p')
        -give name and id
    -cTemp:temperature in celsius
        -createElement('p')
        -give name and id
    -fTemp:fahrenheit
        -createElement('p')
        --give name and id
    -condition:description of weather condition
        -createElement('p')
        --give name and id
    -icons:display icon corresponding to the condition
3. END

1. BEGIN
2. use the button variable and addEventlistener when button is clicked
3. use importData as a parameter in the eventlistener
4. create a variable to grab value of zipcode entered
5. END

1. BEGIN
2. Create an async Function: to import data from API
3. use axios and the url and API key provided 
4. set a Variable 'data' to the data returned
5. use the dot notation to display data from the API 
6. use Math.round on the temperature values to return integers
7. convert temperature data into celcius and fahrenheit
8. call Function to populate populate imported data in the html
9. END

