# Button (Atom)

A `<Button>` is the perfect component to use for:

- Opening a modal window
- Triggering a popup menu
- Toggling an interface
- Playing media content

For actions that change the user’s location, using a `<Link>` is preferred.

## Usage

```jsx
import Button from "theme/ui/atoms/Button";

<Button onClick={callback}>Label here</Button>;
```

## States

States are expressed using the `status` prop.

### Loading (`loading`)

Should be used when an asynchronous action is started after an action from the
user

## Variants

Variants are expressed using the `type` prop (default: `default`).

### Invisible (`invisible`)

Should be used for secondary actions.

### Full size (`full-size`)

Should be used on small screens or when the button is the main action of a page.
