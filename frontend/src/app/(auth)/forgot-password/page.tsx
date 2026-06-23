import AuthCard from "@/components/auth/auth-card";
import ForgotPasswordForm from "@/components/auth/forgot-password-form";

export default function ForgotPasswordPage() {
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

        <h1
          className="
          text-3xl
          font-bold
          mb-6
          "
        >
          Reset Password
        </h1>

        <ForgotPasswordForm />

      </AuthCard>
    </div>
  );
}