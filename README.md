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

-   [Swagger URL demo](https://demo.etranzact.com/mpb/swagger-ui.html#/)
-   [Swagger URL staging](https://mpb-admin-api.azurewebsites.net/swagger-ui/index.html)
-   [Figma design](<https://www.figma.com/file/zm27pUSkgjjBSdy2v49ppO/e-Pension-Web-Portal(MPB-1)?type=design&node-id=1-2&mode=design>)

## API baseURL

-   Demo `http://demo.etranzact.com/mpb`
-   Production `https://`

## Pending Essential Tasks

-   [x] **_Eslint & Prettier setup_**
-   [x] **_`Redux toolkit & Redux persist setup`_**
-   [x] **_`React query setup`_**
-   [x] Vitest setup
-   [x] **_axios instance and interceptor_**
-   [x] `***React router setup***`
-   [x] Proteced route
-   [x] **_`React Hook Form Setup`_**
-   [x] **_building UI components_**
-   [x] **_Absolute import_**
-   [x] Multi-environment setup
-   [ ] Twin.macro setup nb n nm ,
-   [ ] Theming customization & setup **_`special attention`_**
-   [ ] component lazy loading
-   [x] React Table setup
-   [x] configure dark mode
-   [x] lint-stage and husky setup
-   [ ] change the favicon
-   [ ] simple backdrop components
-   [ ] Search Input components with Debounce
-   [ ] restructure the dashboard layout, sidebar menu
-   [ ] Svgr setup for build svg icons
-   [X] setup React Storybook for documentation
-   [x] **_Login form page UI design_**
-   [x] **_Login implementation_**
-   [x] **_`Dashboard Layout UI design`_**
-   [ ] Refresh token implementation **_missing endpoints_**
  
<!-- Admin Management -->
-   [x] Create Admin User
-   [x] Query Admin User
-   [x] Querying admin table by size, pageNumber
-   [ ] Search on Admin User table `missing endpoints`
-   [x] Edit Admin User
-   [x] Disable Admin User
-   [ ] Reset Password on admin user `missing endpoints`
    <!-- Pensioner Management  -->
    `Tuesday/ wednesday`
-   [ ] Create Pensioner `endpoints not working`
-   [ ] Query pensioners table by size, pageNumber `endpoint not working`
-   [ ] search pensioner table by name etc
-   [ ] Filtering pensioner table **_special attention_**
-   [ ] Csv upload
<!-- Role management -->
-   [ ] Role management UI
-   [ ] Create role name and description
-   [ ] Map role to permissions
-   [ ] Edit role permissions
<!-- Verification  -->
-   [ ] Query verification table
-   [ ] Search verification table
-   [ ] Filtering verication table
<!-- Profile -->
` Fatima & hope - Wednesday`
-   [ ] display profile information
-   [ ] Edit profile information
-   [ ] change password
-   [ ] Forget password **_`missing endpoint`_**

## Future Task

-   [ ] Refactor dark mode implementation
-   [ ] Restructure the navigation (side & header) bar
-   [ ] Change the profile sidebar icon
-   [ ] Application theming
-   [ ] Ensuring consistency in spacing, fontsize, title etc
  

## Note

-   createdBy is returning "1" while UI expect "name" to be displayed
-   The getRole endpoints is paginated which is fine but when using the roles in a select
    dropdown field, it is expected that all role should be fetch. The usual convention is to pass "size=0" to get all roles but that's not working. so what is the queryParams to be pass to get all
    roles.
-   After successfully updating a user profile page, there is no way to invalidate the endpoint, to get the updated user information
-

## Credits

List of contributors

-   Ibrahim Olayinka [frontend developer] <ibrahimolayinkaa@gmail.com> (070-6564-3303)
-   Hope Adeniran [frontend developer] <adeniranhopeadebayo@gmail.com> (090-1184-7868)
-   Fatima Olasunkanmi-Ojo [frontend developer] <fatimaolasunkanmi01@gmail.com> (080-6665-6856)
-   Olamide Olaitan [frontend developer]

## License

license @ ----
