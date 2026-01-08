# Workflow Guide

This is a Next.js App Router website. To contribute safely and consistently, follow these guidelines whenever you work on the repository:

## General Guidelines

Stuff available to you
- This project uses Bun
- The clsx package is available to concatenate multiple classNames
- The motion (previously Framer Motion) package is available to animate elements
- `./styles/_variables.css` contains CSS variables you should for consistent styling
- `./styles/_globals.scss` contains global classes you can use

Research the codebase
- Inspect the files relevant to your task before editing. Trace current implementations to understand existing behavior and dependencies.

Plan appropriately
- For large changes, draft a clear plan and get confirmation from the requester before coding. Use your Write Todos tool to keep track of what needs to be done.
- For small or straightforward tasks, form a quick mental or written plan and move straight to implementation.

Execute the plan
- Apply the necessary code changes, keeping diffs focused and well-explained with minimal but helpful comments only when needed.

Verify your changes are fine
- Execute `bun run typecheck` if you made any changes to Typescript files. Address any failures before proceeding.

## Components

Components go in the ./components folder. They follow this file structure:

./components
-> ComponentName
->-> index.tsx
->-> styles.module.scss
->-> (any other components or assets directly related to this component and would not be shared with others)

Components should follow this coding style:
```tsx
import clsx from "clsx";
import styles from "./styles.module.scss";

interface ComponentNameProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function ComponentName({
  children,
  className,
  ...props
}: ComponentNameProps) {
  return (
    <div {...props} className={clsx(className, styles.wrapper)}>
      <p className={styles.multiWordClassName}>placeholder</p>
      {children}
    </div>
  );
}
```
In this example, notice the naming conventions, how the component props extends HTMLAttributes, spreads the props, and can take a className for the root element.

## Work related to the Home Page
The home page's file can be found in `./app/page.tsx`. The styles for this page can be found in `./styles/Home.module.scss`. You can visit this page by going to `http://localhost:3000`.

Components related specifically for the Home Page are located in `./components/HomeItems`. The HomeCard can be used to wrap components and give it common styles each Home component has.

## Additional rules

Never run `bun install`. The dependencies are already installed and up to date.
Never run `bun run dev` or `bun run build`. The dev server is handled externally, and `bun run typecheck` is used to validate changes.

Following these steps helps keep the project stable and makes future collaboration smoother.
