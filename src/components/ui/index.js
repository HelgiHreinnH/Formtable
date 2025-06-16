// ================================================================
// FORM DESK UI COMPONENTS INDEX
// Central export file for all UI components
// File: src/components/ui/index.js
// ================================================================

// Button Components
export { default as Button } from './Button.jsx';
export { 
    ButtonGroup, 
    IconButton, 
    DropdownButton, 
    CopyButton, 
    SubmitButton 
} from './Button.jsx';

// Card Components (to be added)
// export { default as Card } from './Card.jsx';
// export { 
//     CardHeader, 
//     CardContent, 
//     CardFooter 
// } from './Card.jsx';

// Spec Card Component (to be added)
// export { default as SpecCard } from './SpecCard.jsx';

// Form Components (to be added)
// export { default as Input } from './Input.jsx';
// export { default as Label } from './Label.jsx';
// export { default as Textarea } from './Textarea.jsx';
// export { default as Select } from './Select.jsx';
// export { 
//     FormGroup, 
//     FormLabel, 
//     FormInput, 
//     FormError 
// } from './Form.jsx';

// Loading Components (to be added)
// export { default as Spinner } from './Spinner.jsx';
// export { default as LoadingDots } from './LoadingDots.jsx';
// export { default as Skeleton } from './Skeleton.jsx';

// Navigation Components (to be added)
// export { default as Nav } from './Nav.jsx';
// export { default as NavLink } from './NavLink.jsx';
// export { default as Logo } from './Logo.jsx';

// Modal & Overlay Components (to be added)
// export { default as Modal } from './Modal.jsx';
// export { default as Overlay } from './Overlay.jsx';
// export { default as Tooltip } from './Tooltip.jsx';

// Data Display Components (to be added)
// export { default as Badge } from './Badge.jsx';
// export { default as Tag } from './Tag.jsx';
// export { default as Avatar } from './Avatar.jsx';

// ================================================================
// COMPONENT GROUPS FOR EASY IMPORTING
// ================================================================

// All button-related components
export const ButtonComponents = {
    Button,
    ButtonGroup,
    IconButton,
    DropdownButton,
    CopyButton,
    SubmitButton
};

// All form-related components (to be expanded)
export const FormComponents = {
    // Input,
    // Label,
    // Textarea,
    // Select,
    // FormGroup,
    // FormLabel,
    // FormInput,
    // FormError
};

// All layout components (to be expanded)
export const LayoutComponents = {
    // Card,
    // CardHeader,
    // CardContent,
    // CardFooter,
    // SpecCard
};

// All navigation components (to be expanded)
export const NavigationComponents = {
    // Nav,
    // NavLink,
    // Logo
};

// ================================================================
// USAGE EXAMPLES
// ================================================================

/*
// Import individual components
import { Button, ButtonGroup } from './components/ui';

// Import component groups
import { ButtonComponents } from './components/ui';
const { Button, IconButton } = ButtonComponents;

// Import all at once (not recommended for production)
import * as UI from './components/ui';

// Usage examples:
<Button variant="primary">Click me</Button>
<ButtonGroup>
    <Button variant="outline">Cancel</Button>
    <Button variant="primary">Confirm</Button>
</ButtonGroup>
*/

// ================================================================
// VERSION INFO
// ================================================================

export const VERSION = '1.0.0';
export const LAST_UPDATED = '2025-01-15';

// Component library metadata
export const COMPONENT_LIBRARY = {
    name: 'Form Desk UI',
    version: VERSION,
    description: 'React component library for Form Desk brand',
    designSystem: {
        colors: ['charcoal', 'white', 'cream', 'oak', 'forest', 'electric', 'yellow'],
        fonts: ['Menlo (primary)', 'Geist (secondary)'],
        cornerSystem: ['18mm large', '6mm small'],
        shadows: 'neo-brutalist hard shadows'
    },
    components: {
        buttons: ['Button', 'ButtonGroup', 'IconButton', 'DropdownButton', 'CopyButton', 'SubmitButton'],
        // cards: ['Card', 'SpecCard'],
        // forms: ['Input', 'Label', 'Textarea', 'Select'],
        // navigation: ['Nav', 'NavLink', 'Logo'],
        // loading: ['Spinner', 'LoadingDots', 'Skeleton']
    }
};

// ================================================================
// DEVELOPMENT HELPERS
// ================================================================

// Check if component exists
export const hasComponent = (componentName) => {
    return Object.keys(COMPONENT_LIBRARY.components).some(category =>
        COMPONENT_LIBRARY.components[category].includes(componentName)
    );
};

// Get all available components
export const getAvailableComponents = () => {
    return Object.values(COMPONENT_LIBRARY.components).flat();
};

// Development mode helpers
if (process.env.NODE_ENV === 'development') {
    // Log component library info in development
    console.group('🎨 Form Desk UI Components');
    console.log('Version:', VERSION);
    console.log('Available components:', getAvailableComponents());
    console.log('Design system:', COMPONENT_LIBRARY.designSystem);
    console.groupEnd();
}