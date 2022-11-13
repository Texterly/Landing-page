function SingUp () {
    return (
        <section>
            <h2>Sing Up</h2>
            <form>
                <label htmlFor="userName">Full name</label>
                <input type="text" />
                <label htmlFor="userName">Email</label>
                <input type="email" />
                <label htmlFor="userName">User name</label>
                <input type="text" />
                <label htmlFor="password">Password</label>
                <input type="password" />
                <label htmlFor="password">Repeat Password</label>
                <input type="password" />
                <button className="btn" type="submit">
                    Sing Up
                </button>
            </form>
      </section>
    );
};

export default SingUp