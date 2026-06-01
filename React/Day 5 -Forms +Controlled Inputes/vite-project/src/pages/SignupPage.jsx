const SignupPage = ({
    formData,
    handleChange,
    handleSubmit
}) => {
  return (
    <>
    <form onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            />
            <br />
            <br />
        <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            />
            <br />
            <br />
        <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            />
            <br />
            <br />
        <button type="submit">Signup</button>
           

    </form>
    </>
  )
}
export default SignupPage