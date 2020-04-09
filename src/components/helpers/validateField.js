const validateField = (type, value) => {
    switch (type) {
        case 'name':
            if (value.length > 2 && value.length < 31) {
                return value.match(/^[a-zA-Z\s]/) ? true : false;
            };
            return false;
        case 'email':
            if (value.length >= 6) {
                return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/) ? true : false;
            };
            return false;
        case 'phone':
            const shortValue = value.replace(/\s/g, '');

            if (shortValue.length === 10) {
                return shortValue.match(/(\d{10})/) ? true : false;
            };
            return false;
        case 'url':
            return value.match(/^((https?):\/\/)?([w|W]{3}\.)+[a-zA-Z0-9\-.]{3,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/) ? true : false;
        default:
            return false;
    }
};

export default validateField;
