
# Backup Extensions and Restore
`https://www.elliotdenolf.com/posts/backup-restore-vs-code-extensions`

# ======= Make a Starter Template======================
You can use next-ts for next js typescript version.
Just remove all pages, it will work as starter temple.
Remove all the actions and reducers except, auth ,common, and setting 

https://app.slack.com/client/T012QNU7Q8M/threads/thread/C012BCFRD1D-1631085853.026700
https://docs.cremawork.com/

# Next.js with TypeScript 
#F04F47
{#f50057}
Live Demo http://crema-next-ts.herokuapp.com/ 

Install it and run:

```sh
npm install
npm run dev
```

C:\xampp\htdocs\FullStack\arms_fullstack\good\nextjs-ts_app\public\images

# login page background
C:\xampp\htdocs\FullStack\arms_fullstack\good\nextjs-ts_app\@crema\hoc\DefaultPage\AuthLayout.tsx
SideBar 
C:\xampp\htdocs\FullStack\arms_fullstack\good\nextjs-ts_app\modules\dashboard\Metrics\index.tsx
Adding Menu
src/modules/routesConfig.js
Use Avator for round small images it works most for images.pgn or jpg

# ============ Use JWT For the Login
1. Open the src/@crema/services/auth/jwt-auth/index.js file and update baseURL of your server like below
 baseURL: 'YOUR_API_URL HERE',
 
2. Set header token in the axios, go to the file src/@crema/services/auth/jwt-auth/index.js and change the 
export const setAuthToken = (token) => {
  
3. Wrapp <AuthRoutes> with <JWTAuthProvider> Component in the src/App.js file like below.

4. Uncomment the JWT Auth method like below in the src/@crema/utility/AuthHooks.js file
// ForJWT Auth

5. In the final step, we need to call the<SigninJwtAuth> tag in the src/pages/auth/Signin/index.js file like below and do the same for Signup.


 https://react-icons.github.io/react-icons/
 https://react-icons.github.io/

 Cursor Options
 https://stackoverflow.com/questions/3087975/how-to-change-the-cursor-into-a-hand-when-a-user-hovers-over-a-list-item


 deep blue color
 #3c44b1

 full Page Generation
 modules\routesConfig.tsx
 modules\dashboard\index.tsx                  All Module folders should be lowercases
 redux\actions\Dashboard.ts
 redux\reducers\Dashboard.ts
 modules\dashboard\EasyMenu\index.tsx          To be Created with page name ie. EasyMenu
 pages\dashboards\easymenu.tsx                 To be Created with page name ie. EasyMenu
 models\dashboards\EasyMenu.ts                 To be Created with page name ie. EasyMenu



# Redux Dev Tools
https://github.com/zalmoxisus/redux-devtools-extension
npm install --save redux-devtools-extension

# create page without state
 1. Create page from pages/......
 2. Create File about the page in a folder under module/..... in this case it's module/arms... for view creations
 3. Add loader in the module directory index ie `modules\arms\index.tsx`
 4. Control links at ie modules\dashboard\EasyMenu\index.tsx `OR` modules\dashboard\Administration\index.tsx 

 # State Management
 1. create a constance in types\actions\Arms.action.ts 
 2. Create corresponding interface in types\models\arms\..... .ts
 3. Create an Action to get data to the store in redux\actions\Arms.tsx
 4. Add the Action dependent in types\index.ts
 5. Create a reducer to help the action in redux\reducers\Arms.tsx
 6. Define all reducers as a combineedReducers here redux\reducers\index.tsx ie. intertpelate the defined reducer in your page module
 7. Import new radux action in redux\actions\index.ts 
 8. In place of a callback you can create a scope holder temporal memory to store the record

# =========================================Redux Creations Steps=====================
1. Create an Action in types\actions\index.ts
2. Define Action Creator in redux\actions\index.ts
3. Create The States of the Application in redux\actions\index.ts  For the real Data pulling
4. Create Reducers to Change the State By Dispatching Actions in redux\reducers\index.tsx
5. Create a Store to Hold All the State in one Place in redux\store\index.tsx

# Testing
https://nextjs.org/docs/testing
https://buttercms.com/blog/how-to-test-nextjs-apps


# CMS
https://graphcms.com/pricing
https://strapi.io/pricing-self-hosted

 
 redux\actions\JWTAuth.ts
 https://basarat.gitbook.io/typescript/recap

 Admin User

 # Cypress
 https://github.com/christofer-castillo/cypress/blob/main/cypress/integration/requests/test-requests-with-headers.spec.ts

# Custom Icons
modules\iconLibrary\index.ts

# Vertical & Honrizontal Menu Customization IE. Role Permision -- Icon views
@crema\core\Navigation\
@crema\core\Navigation\VerticleNav\VerticalCollapse.tsx


# Components
. You can assign an id to any html component ie shared\components\ARMS\useTable.tsx
<table id="......"></table>

# Conditional mapping at Account/ProfileConnection


 fk_section_name_id

 user_section


. Break Material icons down and use as svg if any mui not loading without internet
<svg className="MuiSvgIcon-root"
    focusable="false" 
    viewBox="0 0 24 24" 
    >
    <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
    </path>
</svg>


            {open
                ? <svg className="MuiSvgIcon-root"
                focusable="false" 
                viewBox="0 0 24 24" 
                //</IconButton>aria-hidden="true"
                >
                  <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
               </svg>

                : theme.direction === 'ltr'
                  ? <svg className="MuiSvgIcon-root" //chevron_right
                  focusable="false" 
                  viewBox="0 0 24 24" 
                  //</IconButton>aria-hidden="true"
                  >
                    <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                 </svg>

                  :<svg 
                      className="MuiSvgIcon-root" //chevron_right
                      focusable="false" 
                      viewBox="0 0 24 24" 
                      //</IconButton>aria-hidden="true"
                  >
                    <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
                   </svg>     
            }




# Theme Settings Colors to Default
1. Check from the style file and use the colors or references in src\@crema\services\db\navigationStyle.tsx  to LightSidebar or Darksidear of src\@crema\utility\AppContextProvider\defaultConfig.tsx


# Local Storage not fetched at the Next API page
Beacuse next renders from server side first which delays the client from fetching the Token
So to Solve that since the handle function cannot take a hook it is best to pass the Token
through the data being pass to the next API route for execution


# Destructing in Redux
When {data} is used as API link parameter it's object needs to be define ie (data:any)

# For flash Messsages
Add AppInfoView to all the index file of the view and import it from crema 


# From regulation examples 
  <Grid item md={2} sm={3} xs={6}  >
    <FormControl sx={{width: "100%"}}>
      <Controls.TextInput
        variant="outlined"
        color="primary"// success
        label= {<IntlMessages id='quicksearch.label'/>}
        //sx={{paddingBottom:"10px"}}
        //onChange={handleSearch}
      />
      
    </FormControl>
  </Grid>


# npm uninstall moment https://www.codegrepper.com/code-examples/javascript/react+moment+format
Moment(recordViewDetails.score_date).format("YYYY-MM-DD hh:mm:ss")


# Import Real Custom css in next js
just import it to the main _app.js or _app.ts and use in any part of the code

# Convert some codes from html to jsx
https://transform.tools/html-to-jsx

# Using Javascript in the jsx
declare a js expression at the top of the return stm be to used in a curling brace within the jsx codes

# sebhastian.com   Loginraduis.com    joshwcomeau.com      acker-news.crfcourses.com
https://nextjs.org/learn/basics/deploying-nextjs-app/github


https://dev.to/musolemasu/lets-build-and-deploy-a-full-stack-nextjs-app-part-1-2aid















or:

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/mui-org/material-ui/tree/master/examples/nextjs-with-typescript)

## The idea behind the example

[Next.js](https://github.com/zeit/next.js) is a framework for server-rendered React apps.


# Example .env.local file for MySQL Database credentials
MYSQL_HOST=31.170.160.70
MYSQL_DATABASE=u160148732_insurrance
MYSQL_USERNAME=u160148732_insurrance
MYSQL_PASSWORD=Carlos.87Carlos.87
SERVER_PORT=4001
MYSQL_PORT='3306'
MYSQL_AUTH_HOST=31.170.160.70
MYSQL_AUTH_DATABASE=u160148732_insurrance
MYSQL_AUTH_USERNAME=u160148732_insurrance


MYSQL_HOST=31.170.160.70 || 192.168.8.116
MYSQL_DATABASE=u514937820_aeci_safety || aeci_safety
MYSQL_USERNAME=u514937820_aeci_safety  || hmsaccount
MYSQL_PASSWORD=Carlos.87Carlos.87 || 
SERVER_PORT=4001
MYSQL_PORT='3306'
MYSQL_AUTH_HOST=31.170.160.70 || 192.168.8.116
MYSQL_AUTH_DATABASE=u514937820_aeci_system  || aeci_system
MYSQL_AUTH_USERNAME=u514937820_aeci_system  || hmsaccount

MYSQL_HOST=192.168.8.116
MYSQL_DATABASE=aeci_safety
MYSQL_USERNAME=hmsaccount
MYSQL_PASSWORD=root
SERVER_HOSTNAME=192.168.8.116
SERVER_PORT=4001
MYSQL_PORT='3306'
MYSQL_AUTH_DATABASE=aeci_system
MYSQL_AUTH_USERNAME=hmsaccount


`Focus & Use the click eevent of the component to handlesubmit through query selector id of the component`

yarn remove excel-to-mysql  xlsx

1. https://www.tutsmake.com/node-js-import-upload-excel-to-mysql-database/
2. https://www.bezkoder.com/node-js-upload-excel-file-database/
3. https://github.com/bezkoder/node-js-upload-excel-file/blob/master/src/controllers/tutorials/excel.controller.js
4. https://www.npmjs.com/package/excel-to-mysql

# Convert excel to json
https://stackoverflow.com/questions/63495018/convert-excel-to-json-using-react-dropzone-client-side-probably
# Convert json to excel
https://data.page/json/csv

# Add Date Time Picker
https://www.ablebits.com/office-addins-blog/2016/10/12/insert-calendar-excel-datepicker-template/#Register-date-picker
https://pragmaticways.com/how-to-add-a-datepicker-calendar-to-excel-cells/
https://www.youtube.com/watch?v=kYNaiXmbcoA 

# SWR Rendering...
https://swr.vercel.app/examples/ssr
https://blog.logrocket.com/handling-data-fetching-next-js-useswr/

# File Managers
https://github.com/kannifarhad/CronusFileManager

# Elfinder Intergration

1. How to use jquery in react First
https://medium.com/how-to-react/how-to-use-jquery-in-your-react-app-b425727a32fd


# Free Icons
https://freeicons.io/filter/popular/all/all/currency?page=2 


❗️ You DON’T have to be a great designer to build beautiful websites. Today I share my top 3 React UI Component / Asset libraries for making beautiful websites. 

1. Framer Motion: https://www.framer.com/motion/
2a. TailwindCSS: https://tailwindcss.com/
2b. TailwindUI: https://tailwindui.com/
3. Undraw: https://undraw.co/

🧠  Knowing what libraries are out there and when to use them is the difference between a good and a great developer.
