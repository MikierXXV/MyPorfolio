---
title: Green Wheel Project
publishDate: 2020-03-04 00:00:00
img: /assets/Greenwheel.png
img_alt: Green Wheel logo
description: |
  Mobile app that shows and reserve cars chargers and bikes
tags:
  - Design
  - Dev
  - Frontend 
  - Flutter
  - Dart
---

## Introduction
In this project, developed in a team of 7 people, we had to develop a mobile app that shows and reserve cars chargers and bikes. The languages used were Flutter for the frontend and Python for the backend. The app was developed as a project for PES subject in the FIB (Facultat d'Informàtica de Barcelona). We had distributted our team in 2 groups, one for the frontend and the other for the backend. I was part of the frontend team.


## Development
The development of the app was divided in 3 sprints. In the first sprint we had to chose the necessary tools to began the development. Also we had created the firsts mockups of the app and proceeded to develop the main functionalities related to the map and the use of the public and private chargers. In the second one, we had to do some refactor of the code and add the functionalities related to the bikes. Finally, in the last sprint add the functionalities related to the xat, the rated system and the user profile.


## Sections developed by me
- Charger Map for public and private chargers of vehicles and bikes
  
<img class="images" height="500" width="300"  alt="Charger map location in Google Maps" src="/assets/greenwheel/chargemap.png"/>

- Charger description for public and private chargers of vehicles and bikes
<div class="pair">
  <img  height="500" width="300" alt="Charger map location in Google Maps" src="/assets/greenwheel/chargerdescript.png"/>
  <img  height="500" width="300" alt="Charger map location in Google Maps" src="/assets/greenwheel/bikedescript.png"/>
</div>

- Charger list for public and private chargers of vehicles and bikes
<div class="pair">
  <img  height="500" width="300" alt="Charger map location in Google Maps" src="/assets/greenwheel/chargerlist.png"/>
  <img  height="500" width="300" alt="Charger map location in Google Maps" src="/assets/greenwheel/bikeslist.png"/>
</div>

- Chat for users

<img class="images" height="500" width="300" alt="Charger map location in Google Maps" src="/assets/greenwheel/chat.png"/>

- Chat list 

<img class="images" height="500" width="300" alt="Charger map location in Google Maps" src="/assets/greenwheel/chatlist.png"/>

<style> 

  @media screen (max-width: 470px) {
    .images {
      margin-left: 0rem;
    }
    .pair {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  @media (min-width: 689px) {
    .images {
      margin-left: 10rem;
    }
    .pair {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
</style>