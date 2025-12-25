
## Refactoring Decisions

### 1. Structure

I split the component into smaller reusable files to make it easier to understand and maintain:

- **`SnackBar.tsx`** - The main component that handles rendering. It focuses only on HTML/REACT.
- **`SnackBar.hooks.ts`** - All the logic (state management, calculations) . This separation makes the components easier to test and reuse IMO.

The sub-components (`CloseButton`, `Message`, `Overline`) are in their own folders because they could be reusable in production. Also it makes it easier to modify them later.

---------------------------------------------------------------

### 2. config/build files were added 

The original `package.json` was empty (not sure if intentional), so I added the necessary dependencies and scripts:

- **Files** - ESLint for code quality, Prettier for consistent formatting
- **Scripts** - `yarn dev` to run the project, `yarn type-check` to verify types etc.

The config files (like `vite.config.ts`, `eslint.config.js`) to test for errors properly.

---------------------------------------------------------------

### 3. Added `commit` script to package.json

Before pushing code, run `yarn commit` to automatically check everything:

-Verifies all types, code quality and formatting. If any check fails, the script stops and you'll need to fix the issues before committing

# NOTE
I've tried to follow production best-practices for React/TypeScript, making it easier for other developers to  potentially understand and contribute.
