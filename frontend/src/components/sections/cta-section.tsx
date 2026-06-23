import Link from "next/link";
import GradientButton from "@/components/ui/gradient-button";

export default function CTASection() {
  return (
    <section className="py-32">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2
          className="
          text-5xl
          md:text-6xl
          font-black
          "
        >
          Ready To Verify
          Digital Authenticity?
        </h2>

        <p
          className="
          mt-6
          text-gray-400
          text-lg
          "
        >
          Start detecting deepfakes and synthetic media today.
        </p>

        <div className="mt-10">
          <Link href="/detect/image">
            <GradientButton>
              Start Detecting
            </GradientButton>
          </Link>
        </div>

      </div>
    </section>
  );
}