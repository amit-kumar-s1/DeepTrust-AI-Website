const activities = [
  {
    time: "12:05 PM",
    action: "Image Scan Completed",
  },

  {
    time: "11:42 AM",
    action: "Video Analysis Started",
  },

  {
    time: "11:10 AM",
    action: "Document Verified",
  },

  {
    time: "10:25 AM",
    action: "API Key Generated",
  },

  {
    time: "09:50 AM",
    action: "Subscription Updated",
  },
];

export default function ActivityTimeline() {
  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-6
      "
    >
      <h2 className="text-xl font-bold mb-6">
        Activity Timeline
      </h2>

      <div className="space-y-6">
        {activities.map((item) => (
          <div
            key={item.time}
            className="flex gap-4"
          >
            <div
              className="
              w-3
              h-3
              rounded-full
              bg-cyan-400
              mt-2
              "
            />

            <div>
              <p className="font-medium">
                {item.action}
              </p>

              <p className="text-sm text-gray-400">
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}