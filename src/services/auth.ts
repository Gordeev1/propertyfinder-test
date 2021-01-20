class AuthService {
	authorize() {
		return new Promise((resolve) => {
			setTimeout(resolve, 2000);
		});
	}
}

export default new AuthService();
