export const userData = {
    firstName: 'David',
    lastName: 'Smith',
    address: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zipCode: '12345',
    phoneNumber: '555-123-4567',
    ssn: '123-45-6789',
    username: 'test-david-001',
    password: 'password12345',
};

export const successfulRegistrationData = {
    welcomeHeader: `Welcome ${userData.username}`,
    welcomeMessage: `Your account was created successfully. You are now logged in.`,
};

export const invalidUserData = {
    firstName: 'invaliduser',
    lastName: '123invalidpassword321',
    errorMessage: 'The username and password could not be verified.',
};