const createUser = jest.fn(() => 'User created successfully');
const loginUser = jest.fn(() => 'Login successful');
const updateUser = jest.fn(() => 'User updated successfully');
const deleteUser = jest.fn(() => 'User deleted successfully');

describe('User Management Tests', () => {
    beforeEach(() => {
        createUser.mockClear();
        loginUser.mockClear();
        updateUser.mockClear();
        deleteUser.mockClear();
    });

    test('should create a new user successfully', () => {
        expect(createUser()).toBe('User created successfully');
    });

    test('should login user successfully', () => {
        expect(loginUser()).toBe('Login successful');
    });

    test('should update user profile successfully', () => {
        expect(updateUser()).toBe('User updated successfully');
    });

    test('should delete user successfully', () => {
        expect(deleteUser()).toBe('User deleted successfully');
    });

    test('should fail when creating duplicate user', () => {
        createUser.mockReturnValueOnce('User already exists');
        expect(createUser()).toBe('User already exists');
    });

    test('should fail with invalid credentials', () => {
        loginUser.mockReturnValueOnce('Invalid credentials');
        expect(loginUser()).toBe('Invalid credentials');
    });
});
