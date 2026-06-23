import SubscriptionCard from "@/components/dashboard/subscription-card";
import ApiUsageCard from "@/components/dashboard/api-usage-card";

export default function BillingPage() {
  return (
    <div className="space-y-8">

      <div>

        <h1
          className="
          text-4xl
          font-bold
          "
        >
          Billing
        </h1>

        <p className="text-gray-400 mt-2">
          Manage subscription and API usage.
        </p>

      </div>

      <div className="grid lg:grid-cols-2 gap-6">

        <SubscriptionCard />

        <ApiUsageCard />

      </div>

      <div
        className="
        rounded-3xl

        border
        border-white/10

        bg-white/5

        p-8
        "
      >
        <h2
          className="
          text-2xl
          font-bold
          "
        >
          Available Plans
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold">
              Free
            </h3>

            <p className="mt-3 text-gray-400">
              10 scans/month
            </p>
          </div>

          <div className="border border-cyan-500 rounded-2xl p-6">
            <h3 className="text-xl font-bold">
              Pro
            </h3>

            <p className="mt-3 text-gray-400">
              1000 scans/month
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold">
              Enterprise
            </h3>

            <p className="mt-3 text-gray-400">
              Unlimited scans
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}