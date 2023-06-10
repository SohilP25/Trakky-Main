## Directory Structure
```bash
C:.
|   .hintrc
|   README.md
|   tree.txt
|   
+---Admin Frontend
|   |   .gitignore
|   |   .hintrc
|   |   package-lock.json
|   |   package.json
|   |   README.md
|   |   
|   +---public
|   |       index.html
|   |       
|   \---src
|       |   App.js
|       |   index.css
|       |   index.js
|       |   
|       +---assets
|       |       Trakky logo white.png
|       |       user.png
|       |       
|       +---components
|       |       components.css
|       |       Navbar.jsx
|       |       ScrollToTop.jsx
|       |       Sidebar.css
|       |       Sidebar.jsx
|       |       
|       +---context
|       |       contextMain.js
|       |       
|       +---data
|       |       mockData.js
|       |       
|       \---pages
|           |   Areas.jsx
|           |   Blog.jsx
|           |   Cities.jsx
|           |   Dashboard.css
|           |   Dashboard.jsx
|           |   Faq.jsx
|           |   Inquiry.jsx
|           |   Offer.jsx
|           |   Page.css
|           |   Services.jsx
|           |   Signin.jsx
|           |   Spa.jsx
|           |   Therapy.jsx
|           |   
|           \---forms
|                   BlogForm.jsx
|                   Faq.jsx
|                   forms.css
|                   Offer.jsx
|                   Services.jsx
|                   Spa.jsx
|                   Therapy.jsx
|                   
+---Backend
|   |   .gitignore
|   |   api.js
|   |   package-lock.json
|   |   package.json
|   |   README.md
|   |   server.js
|   |   
|   +---Controllers
|   |       AuthController.js
|   |       blogController.js
|   |       faqController.js
|   |       nearbyController.js
|   |       searchFilterController.js
|   |       spaController.js
|   |       
|   +---Middleware
|   |       authMiddleware.js
|   |       
|   +---Models
|   |       blogModel.js
|   |       faqModel.js
|   |       spaModel.js
|   |       userModel.js
|   |       
|   \---Routes
|           AuthRoute.js
|           blogRoute.js
|           faqRoute.js
|           nearbyRoute.js
|           searchFilterRoute.js
|           spaRoute.js
|           
\---User Frontend
    |   .gitignore
    |   .hintrc
    |   package-lock.json
    |   package.json
    |   
    +---public
    |       favicon.ico
    |       index.html
    |       logo192.png
    |       logo512.png
    |       manifest.json
    |       robots.txt
    |       _redirects
    |       
    \---src
        |   App.js
        |   data.js
        |   index.css
        |   index.js
        |   setupTests.js
        |   
        +---Assets
        |   +---images
        |   |   +---icons
        |   |   |       air_condition.svg
        |   |   |       Arrow left.svg
        |   |   |       Arrow right.svg
        |   |   |       card_icons.png
        |   |   |       cctv.svg
        |   |   |       dryer.svg
        |   |   |       facebook.svg
        |   |   |       filters.svg
        |   |   |       four-grids.svg
        |   |   |       google.svg
        |   |   |       instagram.svg
        |   |   |       like.svg
        |   |   |       man.svg
        |   |   |       pet_allowed.svg
        |   |   |       phone.svg
        |   |   |       refrigerator.svg
        |   |   |       search.svg
        |   |   |       star.svg
        |   |   |       twitter.svg
        |   |   |       wifi.svg
        |   |   |       
        |   |   +---logos
        |   |   |       Trakky logo purple.png
        |   |   |       Trakky logo white.png
        |   |   |       
        |   |   +---offers
        |   |   |       deal.png
        |   |   |       
        |   |   +---other
        |   |   |       Gift Cards.png
        |   |   |       i1.png
        |   |   |       i2.png
        |   |   |       i3.png
        |   |   |       i4.png
        |   |   |       image.jpeg
        |   |   |       img1.png
        |   |   |       img2.png
        |   |   |       img3.png
        |   |   |       img4.png
        |   |   |       img5.png
        |   |   |       img6.png
        |   |   |       
        |   |   +---spa
        |   |   |       spa-image1.png
        |   |   |       spa-image2.png
        |   |   |       spa-image3.png
        |   |   |       spa-image4.png
        |   |   |       spa-image5.png
        |   |   |       spa.png
        |   |   |       
        |   |   \---therapy
        |   |           therapy.png
        |   |           
        |   \---videos
        |           background_player.mp4
        |           horizontal_.webm
        |           
        +---Components
        |   +---Common
        |   |   +---Footer
        |   |   |       Footer.css
        |   |   |       Footer.jsx
        |   |   |       
        |   |   +---Gallery
        |   |   |       Gallery.css
        |   |   |       Gallery.jsx
        |   |   |       
        |   |   +---Header
        |   |   |       Header.css
        |   |   |       Header.jsx
        |   |   |       
        |   |   +---Popup
        |   |   |       Popup.css
        |   |   |       Popup.jsx
        |   |   |       
        |   |   +---ScrollToTop
        |   |   |       ScrollToTop.jsx
        |   |   |       
        |   |   \---Slider
        |   |           Slide.css
        |   |           Slider.jsx
        |   |           
        |   +---MainPage
        |   |   |   Main.css
        |   |   |   Main.jsx
        |   |   |   
        |   |   +---Cards
        |   |   |       Cards.css
        |   |   |       Cards.jsx
        |   |   |       
        |   |   \---Hero
        |   |           Hero.css
        |   |           Hero.jsx
        |   |           SearchBar.jsx
        |   |           
        |   \---SpaPage
        |       +---Hero
        |       |       Hero.css
        |       |       Hero.jsx
        |       |       
        |       +---SpaCard
        |       |       SpaCard.css
        |       |       SpaCard.jsx
        |       |       
        |       +---SpaList
        |       |       SpaList.css
        |       |       SpaList.jsx
        |       |       
        |       \---SpaProfile
        |               SpaProfile.css
        |               SpaProfile.jsx
        |               
        \---Route
                Route.jsx
                
```
