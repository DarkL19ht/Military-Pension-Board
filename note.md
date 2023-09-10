
```js
.eslintrc.cjs
-----
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}

```

```js
 className={cn(
            "fixed inset-0 bg-black",
            `bg-opacity-${opacity}`
    )}
```

```js

eslint rule
0 - off
1 - warning
2 - error

```

```js

Testing
1. Arrange,
2. Act
3. Expect

```

```js
command
--------
npx lint-staged
```

```js
tailwindcss config
-------------------
/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
     // content: [
    //     "./pages/**/*.{ts,tsx}",
    //     "./components/**/*.{ts,tsx}",
    //     "./app/**/*.{ts,tsx}",
    //     "./src/**/*.{ts,tsx}",
    // ],
    theme: {
        extend: {
            fontFamily: {
                latoBlack: "LatoBlack, sans-serif",
                latoBold: "LatoBold, sans-serif",
                latoLight: "LatoLight, sans-serif",
                latoRegular: "LatoRegular, sans-serif",
                latoThin: "LatoThin, sans-serif",
                Montserrat: "Montserrat",
            },
        },
    },
    plugins: [require("tailwind-scrollbar")],
};

```

```css
/* @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&family=Play:wght@700&display=swap"); */

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
    @font-face {
        font-family: LatoBlack;
        src: url("/public/fonts/lato-black-webfont.woff") format("woff2");
        font-display: swap;
        font-style: normal;
    }
    @font-face {
        font-family: LatoBold;
        src: url("/public/fonts/lato-bold-webfont.woff") format("woff2");
        font-display: swap;
        font-style: normal;
    }
    @font-face {
        font-family: LatoLight;
        src: url("/public/fonts/lato-light-webfont.woff") format("woff2");
        font-display: swap;
        font-style: normal;
    }
    @font-face {
        font-family: LatoRegular;
        src: url("/public/fonts/lato-regular-webfont.woff") format("woff2");
        font-display: swap;
        font-style: normal;
    }
    @font-face {
        font-family: LatoThin;
        src: url("/public/fonts/lato-thin-webfont.woff") format("woff2");
        font-display: swap;
        font-style: normal;
    }
    html {
        @apply font-Montserrat;
    }
    body {
        background: #f1f1f1;
    }
    h1 {
        @apply text-xl font-medium capitalize;
    }
}

.link {
    @apply flex items-center gap-6 rounded-md p-2.5 font-medium duration-300 md:cursor-pointer;
}

.active {
    @apply bg-blue-100 text-blue-600;
}
```

```jsx
   /* eslint-disable import/no-extraneous-dependencies */
// import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib";


export default function pagination({ table}: any) {
    return (
        <div className="flex flex-col items-center justify-center gap-y-3 md:flex-row md:justify-between md:gap-y-0">
            <div className="flex flex-col lg:flex-row">
                <span className="self-center px-[5px] text-[14px] font-[600] text-[#000000]">
                    Show
                </span>
                <div className="cursor-pointer rounded-[4px]  focus:border-none focus:outline-none ">
                    <select
                        className="border-nonefocus:outline-0 hover:cursor-pointer "
                        value={table.getState().pagination.pageSize}
                        onChange={(e) => {
                            table.setPageSize(Number(e.target.value));
                        }}
                    >
                        {[5, 10, 15, 20].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div>
                <span className="text-sm text-gray-400">
                    {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                </span>
            </div>
            <div className="flex">
                <nav aria-label="Pagination">
                    <ul className="inline-flex items-center space-x-2 rounded-md text-sm">
                        <li>
                            <button
                                type="button"
                                className="inline-flex items-center space-x-2 rounded-md border border-gray-300
                             bg-white px-4 py-2 font-medium text-gray-500 hover:bg-gray-50"
                                onClick={() => table.previousPage()}
                                disabled={!table.getCanPreviousPage()}
                            >
                                <ChevronLeft size={18} />
                            </button>
                        </li>
                        {[...Array(table.getPageCount()).keys()].map((item) => {
                            return (
                                <li key={item}>
                                    <button
                                        type="button"
                                        aria-current="page"
                                        className={cn(
                                            `z-10 inline-flex items-center rounded-md
                                     px-4 py-2 font-medium text-gray-700`,
                                            table.getState().pagination.pageIndex === item
                                                ? "border  bg-green-500 text-white"
                                                : "border border-gray-300 bg-white"
                                        )}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            table.setPageIndex(item);
                                        }}
                                    >
                                        {item + 1}
                                    </button>
                                </li>
                            );
                        })}

                        <li>
                            <button
                                type="button"
                                className="inline-flex items-center space-x-2 rounded-md border
                             border-gray-300 bg-white px-4 py-2 font-medium text-gray-500 hover:bg-gray-50"
                                onClick={() => table.nextPage()}
                                disabled={!table.getCanNextPage()}
                            >
                                <ChevronRight size={18} />
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
```
```ts
const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "changeRole" });
};

const [count, setCount] = useState<user[] | null>(null);
```

## Typescript tutorial

```ts
// Record utility & satisfies
type UserCols = "username" | "nickname" | "roles";
type User = Record<UserCols, string | string[] | undefined>;
const user = {
    username: "Dave",
    nickname: undefined,
    roles: ["admin", "dev"],
} satisfies User;

//index signature
interface Incomes {
    [key: string | number]: number;
}

// key of
interface Student {
    name: string;
    gpa: number;
    classes?: number[];
}
const student: Student = {
    name: "Blessing Jane",
    gpa: 3.5,
    classes: [100, 200],
};

for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
    console.log(student[key as keyof typeof student]);
});

const logStudent = (student: Student, key: keyof Student): void => {
    console.log(`student ${key}:${student[key]}`);
};

type setting = string | number | { [key: string]: setting } | setting[];
```

```ts
// currency format for React-Table
{
   accessorkey: 'amount',
   header: () => <div className='text-right'›Amount</div›,
   cell: ({ row }) =› {
      const amount = parseFloat (row. getvalue ('amount' ))
      const formatted = new Intl.NumberFormat('en-US',{
          style: "currency",
          currency: "USD"
      }).format(amount)
      return <div className='text-right font-medium'›{formatted}</div>
    }

}

```

```jsx
<ReactPaginate
    breakLabel="..."
    nextLabel="next >"
    onPageChange={({ selected }) => table.setPageIndex(selected)}
    marginPagesDisplayed={2}
    pageRangeDisplayed={3}
    pageCount={table.getPageCount()}
    previousLabel="< previous"
    renderOnZeroPageCount={null}
    containerClassName="inline-flex items-center space-x-2 rounded-md text-sm"
    pageClassName={LinkStyle}
    previousClassName={LinkStyle}
    nextClassName={LinkStyle}
    breakClassName="hover:text-green-500"
    activeClassName="border bg-green-500 text-white"
    // breakLinkClassName=""
    // pageLinkClassName="bg-red-500"
    // previousLinkClassName=""
/>
```

```js
This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
More on argTypes: https://storybook.js.org/docs/react/api/argtypes
More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export default {
    title: "Example/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

export const Primary = {
    args: {
        primary: true,
        label: "Button",
    },
};

```

```jsx
const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid, isDirty },
    formState: { errors },
    clearErrors,
    reset,
} = useForm <
FormValues >
{
    mode: "all",
    defaultValues: {
        email: "",
        firstName: "",
        lastName: "",
        phone: "",
        roles: [],
        username: "",
    },
};
<pre className="hidden">{JSON.stringify(watch(), null, 2)}</pre>
<pre className="hidden">{JSON.stringify(errors, null, 2)}</pre>

```

```jsx
<div className="flex w-full justify-end py-2.5">
    <button
        type="button"
        className="rounded-md bg-green-700 px-4 py-1.5 text-xs text-white"
        onClick={() => runDispatch({ type: "openUploadCsvModal" })}
    >
        Upload csv files
    </button>
</div>
```
```jsx

export const useFetchUser = (userID: string | undefined) => {
    return useQuery([users.fetchUser, userID],
        (): Promise<User> => axios.get(`https://jsonplaceholder.typicode.com/users/${userID}`)
            .then(response => response.data))
}
export const useFetchUser = (userID: string | undefined) => {
    return useQuery([users.fetchUser, userID],
        () => axios.get<User>(`https://jsonplaceholder.typicode.com/users/${userID}`)
            .then(response => response.data))
}
export const useFetchUser = (userID: string | undefined) => {
    return useQuery<User, Error>([users.fetchUser, userID],
        () => axios.get(`https://jsonplaceholder.typicode.com/users/${userID}`)
            .then(response => response.data))
}

```