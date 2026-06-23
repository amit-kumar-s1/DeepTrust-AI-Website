import AuthCard from "@/components/auth/auth-card";
import LoginForm from "@/components/auth/login-form";

export default function LoginPage() {
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
          Sign In
        </h1>

        <p
          className="
          mt-3
          mb-6
          text-slate-600
          dark:text-gray-400
          "
        >
          Access your detection dashboard.
        </p>

        <LoginForm />
      </AuthCard>
    </div>
  );
}
