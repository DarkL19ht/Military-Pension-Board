## Project Name
Military Pensions Board – Admin Portal Management

## About the Project

## Core Technologies

- [REACT JS](https://react.dev/learn)
- [VITE](https://vitejs.dev/)
- [VITEST](https://vitest.dev/)
- [TESTING LIBRARY](https://testing-library.com/)
- [TAILWIND CSS](https://tailwindcss.com/)
- [TWIN MACRO](https://github.com/ben-rogerson/twin.macro#readme)
- [HEADLESS UI COMPONENTS](https://headlessui.com/)
- [SHADCN UI](https://ui.shadcn.com/docs)
- [REDUX TOOLKIT](https://redux-toolkit.js.org/)
- [REDUX PERSIST](https://github.com/rt2zz/redux-persist)
- [REACT QUERY v4](https://tanstack.com/query/v4/docs/overview)
- [REACT TABLE v7](https://react-table-v7.tanstack.com/)
- [REACT HOOK FORM](https://www.react-hook-form.com/)
- [REACT SELECT](https://web.archive.org/web/20230427145507/https://react-select.com/home)
- [LODASH](https://lodash.com/)
- [FRAMER MOTION](https://www.framer.com/motion/introduction/)
- HTML, CSS, JAVASCRIPT

## How to start on local

## Web URL
- [Swagger URL demo]()
- [Swagger URL staging](https://mpb-admin-api.azurewebsites.net/swagger-ui/index.html)
- [Figma design](https://www.figma.com/file/zm27pUSkgjjBSdy2v49ppO/e-Pension-Web-Portal(MPB-1)?type=design&node-id=1-2&mode=design)

## API baseURL
- Demo `https://`
- Production `https://`

## Pending Tasks
- [X] ***Eslint & Prettier setup***
- [X] ___`Redux toolkit & Redux persist setup`___
- [X] ___`React query setup`___
- [X] Vitest setup
- [X] ***axios instance and interceptor***
- [X] `***React router setup***`
- [X] Proteced route
- [X] ***`React Hook Form Setup`***
- [X] ***building UI components***
- [X] ***Absolute import***
- [X] Multi-environment setup
- [ ] Twin.macro setup  nb n nm ,    
- [ ] Theming customization & setup
- [ ] component lazy loading
- [X] React Table setup
- [X] configure dark mode
- [X] lint-stage and husky setup
- [ ] change the favicon
- [ ] restructure the dashboard layout, sidebar menu
- [ ] Svgr setup for build svg icons
- [X] ***Login form page UI design***
- [X] ***Login implementation***
- [X] ***`Dashboard Layout UI design`***
  
- [ ] Refresh token implementation
<!-- Admin Management -->
- [ ] Create Admin User
- [X] Query Admin User
- [X] Querying admin table by size, pageNumber
- [ ] Search on Admin User table ***(missing endpoints)***
- [ ] Edit Admin User
- [ ] Disable Admin User
- [ ] Reset Password on admin user
<!-- Pensioner Management -->
- [ ] Create Pensioner
- [ ] Query Pagination
- [ ] Query pensioners table by size, pageNumber
- [ ] search pensioner table by name etc
- [ ] Filtering pensioner table
- [ ] Csv upload
<!-- Role management -->
- [ ] Role management UI
- [ ] Create role name and description
- [ ] Map role to permissions
- [ ] Edit role permissions
<!-- Verification  -->
<!-- Profile -->
- [ ] display profile information
- [ ] Edit profile information
- [ ] change password
- [ ] 


  

## Future Task
- [ ] Refactor dark mode implementation
- [ ] Restructure the navigation (side & header) bar



## Note
- createdBy is return "1" while UI expect "name" to be displayed
- The getRole endpoints is paginated which is fine but when using the roles in a select 
dropdown field, it is expected that all role should be fetch. The usual convention is to pass "size=0" to get all roles but
that's not working.  so what is the queryParams to be pass to get all
roles. 


## Credits
List of contributors

- Ibrahim Olayinka [frontend developer] <ibrahimolayinkaa@gmail.com> (070-6564-3303)
- Hope Adeniran [frontend developer]
- Fatima Olasunkanmi-Ojo [frontend developer]
- Olamide Olaitan [frontend developer]

## License

license @ ----