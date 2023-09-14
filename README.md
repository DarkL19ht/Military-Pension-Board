## Project Name

Military Pensions Board – Admin Portal Management

## About the Project

## Core Technologies

-   [REACT JS](https://react.dev/learn)
-   [VITE](https://vitejs.dev/)
-   [VITEST](https://vitest.dev/)
-   [TESTING LIBRARY](https://testing-library.com/)
-   [TAILWIND CSS](https://tailwindcss.com/)
-   [TWIN MACRO](https://github.com/ben-rogerson/twin.macro#readme)
-   [HEADLESS UI COMPONENTS](https://headlessui.com/)
-   [SHADCN UI](https://ui.shadcn.com/docs)
-   [REDUX TOOLKIT](https://redux-toolkit.js.org/)
-   [REDUX PERSIST](https://github.com/rt2zz/redux-persist)
-   [REACT QUERY v4](https://tanstack.com/query/v4/docs/overview)
-   [REACT TABLE v7](https://react-table-v7.tanstack.com/)
-   [REACT HOOK FORM](https://www.react-hook-form.com/)
-   [REACT SELECT](https://web.archive.org/web/20230427145507/https://react-select.com/home)
-   [LODASH](https://lodash.com/)
-   [FRAMER MOTION](https://www.framer.com/motion/introduction/)
-   HTML, CSS, JAVASCRIPT

## How to start on local

## Web URL

-   [Swagger URL demo](http://172.17.10.16:20008/swagger-ui.html#/)
-   [Swagger URL demo](https://demo.etranzact.com/mpb/swagger-ui.html#/)
-   [Swagger URL staging](https://mpb-admin-api.azurewebsites.net/swagger-ui/index.html)
-   [Figma design](<https://www.figma.com/file/zm27pUSkgjjBSdy2v49ppO/e-Pension-Web-Portal(MPB-1)?type=design&node-id=1-2&mode=design>)

## API baseURL

-   Demo `http://demo.etranzact.com/mpb`
-   Production `https://`

##  Main Project Tasks
<!-- User management -->
-   [ ] Refresh token implementation **_missing endpoints/resolved_**
<!-- Pensioner Management  -->
-   [ ] search pensioner table by name etc `search key not working`
-   [ ] Filtering pensioner table **_special attention_**
-   [ ] Csv upload **_`missing endpoint`_**
<!-- Role management -->
-   [ ] Expand column
<!-- Verification  -->
-   [ ] Query verification  table
-   [ ] Search verification table
-   [ ] Filtering verication table
-   [ ] Accept & Reject Pensioner
<!-- Dashboard /Notification -->
-   [ ] Dashboard
-   [ ] Notification implementation

## Other Minor Task
-   [ ] Idle Timer`⭐️⭐️⭐️⭐️⭐️` `In progress`
-   [ ] Form validation for email, empty string etc`⭐️⭐️⭐️⭐️⭐️`
-   [ ] Format pensioner status column by removing underscore and shorten words`⭐️⭐️⭐️⭐️⭐️`
-   [ ] change the form icon to reflect the form label `⭐️⭐️⭐️⭐️⭐️`
-   [ ] component lazy loading `⭐️⭐️⭐️⭐️⭐️`
-   [ ] Table virtualization `⭐️⭐️⭐️⭐️⭐️`
-   [ ] Ensuring consistency in spacing, fontsize, title etc `⭐️⭐️⭐️⭐️⭐️`
-   [ ] restructure the dashboard layout, sidebar menu `⭐️⭐️⭐️⭐️⭐️`
-   [ ] Restructure the navigation (side & header) bar `⭐️⭐️⭐️⭐️⭐️`
-   [ ] Change the profile sidebar icon `⭐️⭐️⭐️⭐️⭐️`
-   [ ] Application theming `⭐️⭐️⭐️⭐️⭐️`
-   [ ] Refactor dark mode implementation `⭐️`
-   [ ] Twin.macro setup `⭐️`
-   [ ] Svgr setup for build svg icons `⭐️`
-   [ ] Reset page number to 1 on pageSize  change
  

## Note

- [ ] createdBy is returning "1" while admin table UI expect "name" to be displayed

- [X] The getRole endpoints is paginated which is fine but when using the roles in a select
    dropdown field, it is expected that all role should be fetch. The usual convention is to pass "size=0" to get all roles but that's not working. so what is the queryParams to be pass to get all
    roles.

- [ ] After successfully updating a user profile page, there is no way to invalidate the endpoint/token, to get the updated user information
  
- [ ] Search Key "name" not working for pensioners table

- [ ] Update role, enable and disable role not working
   
- [ ] What is the endpoint for GET verification acceptance ?


## Credits

List of contributors

-   Ibrahim Olayinka [frontend developer] <ibrahimolayinkaa@gmail.com> (070-6564-3303)
-   Hope Adeniran [frontend developer] <adeniranhopeadebayo@gmail.com> (090-1184-7868)
-   Fatima Olasunkanmi-Ojo [frontend developer] <fatimaolasunkanmi01@gmail.com> (080-6665-6856)
-   Olamide Olaitan [frontend developer]

## License

license @ ----
