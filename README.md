
## Refactoring Decisions

### Why the files are split this way

I split the component into smaller reusable files to make it easier to understand and maintain:

- **`SnackBar.tsx`** - The main component that handles rendering. It's now clean and just focuses only on HTML/REACT.
- **`SnackBar.hooks.ts`** - All the logic (state management, calculations) . This separation makes the component easier to test and reuse IMO.

The sub-components (`CloseButton`, `Message`, `Overline`) are in their own folders because they could be reusable in production. Each one does one thing well, which makes it easier to modify later.

### config/build files were added 

The original `package.json` was empty (not sure if intentional), so I added the necessary dependencies and scripts:

- **Files** - Vite for bundling, ESLint for code quality, Prettier for consistent formatting
- **Scripts** - Simple commands like `yarn dev` to run the project, `yarn type-check` to verify types etc.

The config files (like `vite.config.ts`, `eslint.config.js`) to test the code properly.

### Adding commit script to package.json

Before pushing code, run `yarn commit` to automatically check everything:

**Type checking** - Verifies all types, code quality and formatting

If any check fails, the script stops and you'll need to fix the issues before committing. This helps catch problems early and keeps the codebase clean.

--NOTE--
I've tried to follow best-practices for React/TypeScript, making it easier for other developers to  potentially understand and contribute.
