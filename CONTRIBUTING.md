# Contributing to WebDemo

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Adding new industry templates

## Adding a New Industry Template

1. **Create the Template Directory**: Inside `src/templates`, create a new folder for your industry (e.g., `src/templates/restaurant`).
2. **Create the Component**: Build your React component (e.g., `RestaurantTemplate.tsx`) accepting `businessName` as a prop.
3. **Create the Styles**: Build your CSS Module (e.g., `Restaurant.module.css`) to define the layout and theme colors.
4. **Register the Template**: Open `src/templates/registry.tsx` and add your new template to the `TemplateRegistry` object using the industry slug as the key.
5. **Update the Demo Switcher**: Add your industry to the `industries` array in `src/components/DemoSwitcher.tsx`.

## Pull Requests

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Any questions?
Feel free to open an issue or reach out to the maintainers!
