import useSignup from "../hooks/useSignup";
import SignupPage from "../pages/SignupPage";

const SingnupForm = () => {
    const {formData,handleChange,handleSubmit} = useSignup();
  return (
    <>
    <h1>Signup Page</h1>
    <SignupPage
    formData={formData}
    handleChange={handleChange}
    handleSubmit={handleSubmit}
    />
    </>
  )
}
export default SingnupForm
