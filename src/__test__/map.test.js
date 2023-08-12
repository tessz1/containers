import Team from "../mapStatus";


describe('ErrorRepository', () => {
    let errorRepo;

    beforeEach(() => {
        errorRepo = new Team();
    });

    it('should translate known error codes', () => {
        errorRepo.addError(404, 'Page not found');
        errorRepo.addError(500, 'Internal server error');

        const result404 = errorRepo.translate(404);
        const result500 = errorRepo.translate(500);

        expect(result404).toBe('Page not found');
        expect(result500).toBe('Internal server error');
    });

    it('should return "Unknown error" for unknown error code', () => {
        const result = errorRepo.translate(403);
        expect(result).toBe('Unknown error');
    });
});