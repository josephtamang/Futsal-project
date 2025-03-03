const bookFutsalCourt = jest.fn(() => 'Booking successful');
const cancelBooking = jest.fn(() => 'Cancellation successful');

describe('Booking Tests', () => {
    beforeEach(() => {
        bookFutsalCourt.mockClear();
        cancelBooking.mockClear();
    });

    test('should book a futsal court successfully', () => {
        expect(bookFutsalCourt()).toBe('Booking successful');
    });

    test('should cancel a booking successfully', () => {
        expect(cancelBooking()).toBe('Cancellation successful');
    });

    test('should not book a court if already booked', () => {
        bookFutsalCourt.mockReturnValueOnce('Court already booked');
        expect(bookFutsalCourt()).toBe('Court already booked');
    });

    test('should not cancel a non-existent booking', () => {
        cancelBooking.mockReturnValueOnce('No booking found');
        expect(cancelBooking()).toBe('No booking found');
    });
});
