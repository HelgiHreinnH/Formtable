// ================================================================
// FORM DESK BUTTON COMPONENT
// Reusable button component with multiple variants
// File: src/components/ui/Button.jsx
// ================================================================

import React from 'react';

const Button = ({ 
    children, 
    variant = 'primary', 
    size = 'normal', 
    corner = 'a',
    disabled = false, 
    loading = false,
    onClick,
    href,
    target,
    type = 'button',
    className = '',
    ...props 
}) => {
    // Base button classes
    const baseClasses = 'btn-base corner-fillet-' + corner + ' border-thick transition-normal btn-hover';
    
    // Variant classes
    const variantClasses = {
        primary: 'bg-charcoal text-white border-charcoal shadow-hard',
        secondary: 'bg-electric text-white border-electric shadow-hard',
        outline: 'bg-transparent text-charcoal border-charcoal hover:bg-charcoal hover:text-white',
        ghost: 'bg-transparent text-charcoal border-transparent hover:bg-cream',
        danger: 'bg-forest text-white border-forest shadow-hard',
        warning: 'bg-yellow text-charcoal border-yellow shadow-hard'
    };
    
    // Size classes
    const sizeClasses = {
        small: 'text-sm px-4 py-2',
        normal: 'text-base px-8 py-4',
        large: 'text-lg px-10 py-5'
    };
    
    // State classes
    const stateClasses = {
        disabled: 'opacity-50 cursor-not-allowed pointer-events-none',
        loading: 'cursor-wait'
    };
    
    // Combine all classes
    const buttonClasses = [
        baseClasses,
        variantClasses[variant] || variantClasses.primary,
        sizeClasses[size] || sizeClasses.normal,
        disabled && stateClasses.disabled,
        loading && stateClasses.loading,
        className
    ].filter(Boolean).join(' ');
    
    // Loading spinner component
    const LoadingSpinner = () => (
        <svg 
            className="spinner w-4 h-4 mr-2" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeDasharray="31.416" 
                strokeDashoffset="31.416"
            />
        </svg>
    );
    
    // Button content with loading state
    const buttonContent = (
        <>
            {loading && <LoadingSpinner />}
            <span className={`btn-text ${loading ? 'opacity-75' : ''}`}>
                {children}
            </span>
        </>
    );
    
    // If href is provided, render as link
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={buttonClasses}
                onClick={disabled ? undefined : onClick}
                aria-disabled={disabled}
                {...props}
            >
                {buttonContent}
            </a>
        );
    }
    
    // Otherwise render as button
    return (
        <button
            type={type}
            className={buttonClasses}
            onClick={disabled || loading ? undefined : onClick}
            disabled={disabled || loading}
            aria-disabled={disabled || loading}
            {...props}
        >
            {buttonContent}
        </button>
    );
};

// Button group component for organizing multiple buttons
export const ButtonGroup = ({ children, className = '', ...props }) => {
    const groupClasses = `flex gap-4 ${className}`;
    
    return (
        <div className={groupClasses} role="group" {...props}>
            {children}
        </div>
    );
};

// Icon button variant
export const IconButton = ({ 
    icon, 
    children, 
    iconPosition = 'left',
    ...buttonProps 
}) => {
    const iconElement = typeof icon === 'string' ? (
        <span className="font-primary text-lg">{icon}</span>
    ) : icon;
    
    return (
        <Button {...buttonProps}>
            {iconPosition === 'left' && iconElement}
            {children && <span className={iconPosition === 'left' ? 'ml-2' : 'mr-2'}>{children}</span>}
            {iconPosition === 'right' && iconElement}
        </Button>
    );
};

// Button with dropdown indicator
export const DropdownButton = ({ children, isOpen = false, ...buttonProps }) => {
    return (
        <Button {...buttonProps}>
            {children}
            <span className={`ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                ▼
            </span>
        </Button>
    );
};

// Copy button with success feedback
export const CopyButton = ({ 
    textToCopy, 
    children = 'Copy',
    successText = 'Copied!',
    ...buttonProps 
}) => {
    const [copied, setCopied] = React.useState(false);
    
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };
    
    return (
        <Button
            {...buttonProps}
            onClick={handleCopy}
            variant={copied ? 'secondary' : buttonProps.variant}
            className={copied ? 'success-bounce' : buttonProps.className}
        >
            {copied ? successText : children}
        </Button>
    );
};

// Submit button with form validation
export const SubmitButton = ({ 
    children = 'Submit',
    isValid = true,
    ...buttonProps 
}) => {
    return (
        <Button
            {...buttonProps}
            type="submit"
            disabled={!isValid || buttonProps.disabled}
            variant={isValid ? buttonProps.variant : 'outline'}
        >
            {children}
        </Button>
    );
};

export default Button;

// ================================================================
// USAGE EXAMPLES
// ================================================================

/*
// Basic usage
<Button>Click me</Button>

// Primary button with shadow
<Button variant="primary" corner="b">
    Configure Your Desk
</Button>

// Secondary button
<Button variant="secondary" size="large">
    Learn More
</Button>

// Outline button
<Button variant="outline" corner="a">
    Cancel
</Button>

// Link button
<Button href="/configure" variant="primary">
    Get Started
</Button>

// Button with loading state
<Button loading={isSubmitting}>
    Submitting...
</Button>

// Disabled button
<Button disabled>
    Not Available
</Button>

// Icon button
<IconButton icon="→" variant="primary">
    Next Step
</IconButton>

// Button group
<ButtonGroup>
    <Button variant="outline">Cancel</Button>
    <Button variant="primary">Confirm</Button>
</ButtonGroup>

// Dropdown button
<DropdownButton isOpen={dropdownOpen} onClick={toggleDropdown}>
    Options
</DropdownButton>

// Copy button
<CopyButton textToCopy="hello@formdesk.dk">
    Copy Email
</CopyButton>

// Submit button
<SubmitButton isValid={formIsValid} loading={isSubmitting}>
    Send Message
</SubmitButton>
*/