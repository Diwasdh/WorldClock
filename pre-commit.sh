#!/bin/bash

# Pre-commit hook script for World Clock project
# Runs ESLint and Prettier checks before allowing commits

echo "Running pre-commit checks..."

# Run ESLint
echo "Running ESLint..."
if ! bun run lint; then
    echo "❌ ESLint failed. Please fix the linting errors before committing."
    exit 1
fi

# Run Prettier check (without --write to just check formatting)
echo "Checking code formatting with Prettier..."
if ! bunx prettier --check .; then
    echo "❌ Prettier formatting check failed. Run 'bun run format' to fix formatting issues."
    exit 1
fi

echo "✅ All pre-commit checks passed!"
exit 0