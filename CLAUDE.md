# Project Instructions for Claude

### Commit Message Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Common Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files
- `revert`: Reverts a previous commit

### Important Rules

- DO NOT add "Co-Authored-By: Claude" to commit messages
- DO NOT add "Generated with Claude Code" or any similar attribution
- Keep the subject line under 50 characters when possible
- Use the imperative mood in the subject line (e.g., "fix" not "fixed" or "fixes")
- Do not end the subject line with a period
- Separate subject from body with a blank line when body is needed
- Use the body to explain what and why vs. how

### Examples

- `feat: add dark mode toggle to settings`
- `fix: resolve navigation crash on Android`
- `docs: update README with setup instructions`
- `style: format code with prettier`
- `refactor: extract theme logic into custom hook`
- `chore: update dependencies`

## Linting and Formatting

Before committing, always run:

```bash
npm run format
```

This command will:

- Check ESLint rules
- Apply Prettier formatting
- Auto-fix any fixable issues
