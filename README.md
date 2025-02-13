# LearningReact

# Parcel
## npx parcel index.html
- Dev build
- Local server
- HMR = Hot Module Replacement
- File watching algorithm is used - written in C++
- Caching - faster builds
- Image optimization
- Minification
- Bundling
- Compressing
- Consistent hashing
- Code splitting
- Differential bundling - support older browser
- diagnostics
- error handling
- host app on HTTPs


Structure---
/*
  Header
    - Logo
    - Nav items

  Body
    - Search
    - Restaurant container
      - Restaurant card
        - Img
        - Name
        - Star rating
        - cuisines
        - time for delivery etc
  
  Footer
    - Copyright
    - Links
    - Address
    - Contact
*/

# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect the store to our app
- Slice (cart slice)
- dispatch(action)
- Selector


# Types of testing by dev
 - Unit Testing
 - Integration testing
 - End to End testing - e2e testing


# setting up testing in our app
  - install React Testing Library - https://testing-library.com/docs/react-testing-library/intro/
  - install jest - https://jestjs.io/docs/getting-started
  - install babel dependencies - above link
  - configure babel - above link
  - configure parcel config file to disable default babel config - https://parceljs.org/languages/javascript/#usage-with-other-tools
  - jest configuration - npx jest --init
  - install jsdom library - If you're using Jest 28 or later, jest-environment-jsdom package now must be installed separately. - https://testing-library.com/docs/react-testing-library/setup
  - install @babel/preset-react library to make jsx work in jest
  - in babel.config.js add ["@babel/preset-react", { runtime: "automatic" }] in presets
  - install @testing-library/jest-dom - npm i -D @testing-library/jest-dom
  - if a component is using redux and we need to render it while testing then we need to provide a redux store to it for rendering in isolation