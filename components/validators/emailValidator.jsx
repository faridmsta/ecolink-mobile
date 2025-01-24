export default function emailValidator(email) {

    const trimmedEmail = email.trim();
    const re = /^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!trimmedEmail) return "Please fill in this field.";
    if (!re.test(trimmedEmail)) return "Please enter a valid email address!";
    
    return '';
}
