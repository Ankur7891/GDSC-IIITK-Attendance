## About
A local network solution for taking attendance without internet connectivity. We detect ip of all connections and store them so that they can't submit attendance again via the same device. The solution is feasible for 10 - 20 people at a time in a localised network with good connectivity.

## Requirements
    - react
    - flask
    - flask-cors
    - react
    - serve node js module

## Directions to USE
    - run the setup shell script
    - open two terminals and open FrontEnd directory in one and BackEnd dir in other
    - run npm run build and serve build in FrontEnd
    - run  python main.py in BackEnd (Do not remove entries.csv and ipAddress.txt unless required)

## Output
    - The entries.csv file will contain the attendance as required...
    - Delete ipAddress.txt and entries.csv for a fresh restart

