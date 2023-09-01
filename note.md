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
