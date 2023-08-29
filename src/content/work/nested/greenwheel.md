---
title: Green Wheel Project
publishDate: 2020-03-04 00:00:00
img: /MyPorfolio/assets/Greenwheel.png
img_alt: Green Wheel logo
description: |
  Mobile app that shows and reserve cars chargers and bikes
tags:
  - Frontend 
  - Flutter
  - Dart
---

<h2 class="center"> Introduction </h2>
<p>In this project, developed in a team of 7 people, we had to develop a mobile app that shows and reserve cars chargers and bikes. The languages used were Flutter for the frontend and Python for the backend. The app was developed as a project for PES subject in the FIB (Facultat d'Informàtica de Barcelona). We had distributted our team in 2 groups, one for the frontend and the other for the backend. I was part of the frontend team.<p>


<h2 class="center"> Development </h2>
<p>The development of the app was divided in 3 sprints. In the first sprint we had to chose the necessary tools to began the development. Also we had created the firsts mockups of the app and proceeded to develop the main functionalities related to the map and the use of the public and private chargers. In the second one, we had to do some refactor of the code and add the functionalities related to the bikes. Finally, in the last sprint add the functionalities related to the xat, the rated system and the user profile.</p>


<h2 class="center"> Sections developed by me </h2>

><p class="center" >Charger Map for public and private chargers of vehicles and bikes</p>
<p>The map was developed using Google Maps API and the markers were added using the coordinates of the chargers. The markers were customized to show the information of the chargers when the user clicks on them. Also, it was customized to show the user location and the chargers location. The map was developed using the Flutter package google_maps_flutter.</p>

<img class="images" height="500" width="300"  alt="Charger map location in Google Maps" src="/MyPorfolio/assets/greenwheel/chargemap.png"/>

><p class="center" >Charger description for public and private chargers of vehicles and bikes</p>
<p>In this screen we can appreciate the description of each charger/bike point. There is a basic infromation about the charger point and the rent bike. It can redirect to the booking section and show the route to arrive from your ubication. Moreover, apperas the user that is giving the services and the ratings of his/her publications.</p>

<div class="pair">
  <img  height="500" width="300" alt="Charger car description" src="/MyPorfolio/assets/greenwheel/chargerdescript.png"/>
  <img  height="500" width="300" alt="Charger bike description" src="/MyPorfolio/assets/greenwheel/bikedescript.png"/>
</div>

><p class="center" >Charger list for public and private chargers of vehicles and bikes</p>
<p>In this screen we can see the description of each charger/bike point but in a list format. Now the infromation about the charger point and the rent bike is reduced to the essencial one. It can redirect to the booking section when clicking the card and show the route to arrive from your ubication by clicking the route button.</p>

<div class="pair">
  <img  height="500" width="300" alt="Charger car list" src="/MyPorfolio/assets/greenwheel/chargerlist.png"/>
  <img  height="500" width="300" alt="Charger bike list" src="/MyPorfolio/assets/greenwheel/bikeslist.png"/>
</div>

><p class="center" >Chat for users</p>
<p>This is the chat screen. It has been developed in native way, without using libraries. We can see that the different messages between both users and the correpsonding date of the message sent. Finally there is a text input where the user can write the message and send it by clicking the button, so the socket can store the message in the conversation.</p>

<img class="images" height="500" width="300" alt="Chat picture" src="/MyPorfolio/assets/greenwheel/chat.png"/>

><p class="center" >Chat list</p>
<p>Here is the chat list screen. It has been developed in native way, without using libraries. We can see that the different conversations of the user that is logged in the app. Each of it show the last message and the hour that has been sent. Also indicates if there is any new message by appearing a red cercle in the user image and adding one to the number of messages that indicates the top bell.</p>

<img class="images" height="500" width="300" alt="Chat list picture" src="/MyPorfolio/assets/greenwheel/chatlist.png"/>

<style> 
  p {
    text-align: justify;
    margin-bottom: 2rem;
  }

  .center {
    text-align: center;
  }

  @media screen (max-width: 470px) {
    .images {
      margin-left: 0rem;
    }
    .pair {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 689px) {
    .images {
      margin-left: 10rem;
      margin-bottom: 2rem;
    }
    .pair {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 2rem;
    }
  }
</style>