function Login () {
    return(
        <section>
            <h2>LogIn</h2>
            <form>
                <label htmlFor="userName">User Name</label>
                <input type="text" />
                <label htmlFor="password">Password</label>
                <input type="password" />
                <button className="btn" type="submit">
                    Login
                </button>
            </form>
        </section>
    );
};

export default Login