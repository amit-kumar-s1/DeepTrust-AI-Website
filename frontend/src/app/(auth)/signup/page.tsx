import AuthCard from "@/components/auth/auth-card";
import SignupForm from "@/components/auth/signup-form";

export default function SignupPage() {
  return (
    <div
      className="
      min-h-screen

      flex
      items-center
      justify-center
      "
    >
      <AuthCard>

        <p
          className="
          mb-3
          text-sm
          font-semibold
          text-cyan-400
          "
        >
          DeepTrust AI
        </p>

        <h1
          className="
          text-3xl
          font-bold
          "
        >
          Create Account
        </h1>

        <p
          className="
          mt-3
          mb-6
          text-slate-600
          dark:text-gray-400
          "
        >
          Start verifying digital authenticity.
        </p>

        <SignupForm />
      </AuthCard>
    </div>
  );
}
